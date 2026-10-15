// Checks every signature motion in src/components/cards/motions against a stub 2D context:
// it must draw without throwing at t = 0, 1, 10 and 1000, pass only finite numbers to the canvas,
// and render 1,000 frames at 342 x 214 and at 640 x 400 with no frame taking 50 ms or more.
// Run: node scripts/check-motions.mjs
import { createRequire } from 'node:module'
import { mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync, statSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dir = join(root, 'src/components/cards/motions')
const ts = createRequire(join(root, 'package.json'))('typescript')
const HELPERS = new Set(['kit', 'map', 'map-data', 'six', 'six-data', 'six-tile', 'states', 'sheet'])
const MAX_BYTES = 4096
const TIMES = [0, 1, 10, 1000]
const SIZES = [[342, 214], [640, 400]]
const FRAMES = 1000
const BUDGET_MS = 50

// Transpile the folder (all but the registry, which reaches outside it) to ES modules in a temp directory.
const out = mkdtempSync(join(tmpdir(), 'motions-'))
for (const f of readdirSync(dir).filter((f) => f.endsWith('.ts') && f !== 'index.ts')) {
  const js = ts.transpileModule(readFileSync(join(dir, f), 'utf8'), { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 } }).outputText
  writeFileSync(join(out, f.replace(/\.ts$/, '.mjs')), js.replace(/from '\.\/([\w-]+)'/g, "from './$1.mjs'"))
}

function stub() {
  let calls = 0
  const data = { font: '', fillStyle: '', strokeStyle: '', lineWidth: 1, globalAlpha: 1, textAlign: 'start', textBaseline: 'alphabetic', lineCap: 'butt', lineJoin: 'miter', lineDashOffset: 0, globalCompositeOperation: 'source-over' }
  return new Proxy(data, {
    get(o, k) {
      if (k === 'calls') return calls
      if (k in o) return o[k]
      if (k === 'measureText') return (s) => (calls++, { width: String(s).length * 8 })
      if (String(k).startsWith('create')) return () => ({ addColorStop() {} })
      return (...a) => {
        calls++
        for (const v of a) if (typeof v === 'number' && !Number.isFinite(v)) throw new Error(`${String(k)} got ${v} (args ${a.join(', ')})`)
      }
    },
    set(o, k, v) {
      if (typeof v === 'number' && !Number.isFinite(v)) throw new Error(`${String(k)} set to ${v}`)
      if (k === 'globalAlpha' && (v < 0 || v > 1)) throw new Error(`globalAlpha ${v} out of range`)
      o[k] = v
      return true
    },
  })
}

let failed = 0
const rows = []
for (const f of readdirSync(dir).filter((f) => f.endsWith('.ts')).sort()) {
  const name = f.replace(/\.ts$/, '')
  if (name === 'index') continue // the registry belongs to the card code and is not a motion
  const bytes = statSync(join(dir, f)).size
  try {
    if (bytes > MAX_BYTES) throw new Error(`${bytes} bytes of source, over ${MAX_BYTES}`)
    if (HELPERS.has(name)) {
      rows.push(`ok    ${name.padEnd(22)} ${String(bytes).padStart(5)} B   (shared helper)`)
      continue
    }
    const mod = await import(pathToFileURL(join(out, `${name}.mjs`)).href)
    const draw = Object.values(mod).find((v) => typeof v === 'function')
    if (!draw) throw new Error('no exported draw function')
    let worst = 0
    let total = 0
    for (const [w, h] of SIZES) {
      for (const t of TIMES) {
        const c = stub()
        draw(c, w, h, t, '#4DEBA0')
        if (!c.calls) throw new Error(`drew nothing at t = ${t}`)
      }
      const c = stub()
      for (let i = 0; i < FRAMES; i++) {
        const t0 = performance.now()
        draw(c, w, h, i / 60, '#4DEBA0')
        const ms = performance.now() - t0
        worst = Math.max(worst, ms)
        total += ms
        if (ms >= BUDGET_MS) throw new Error(`frame ${i} took ${ms.toFixed(1)} ms at ${w}x${h}`)
      }
    }
    rows.push(`ok    ${name.padEnd(22)} ${String(bytes).padStart(5)} B   worst frame ${worst.toFixed(3)} ms   mean ${(total / (FRAMES * SIZES.length)).toFixed(4)} ms`)
  } catch (e) {
    failed++
    rows.push(`FAIL  ${name.padEnd(22)} ${String(bytes).padStart(5)} B   ${e.message}`)
  }
}
rmSync(out, { recursive: true, force: true })
console.log(rows.join('\n'))
console.log(failed ? `\n${failed} motion(s) failed` : `\nall ${rows.length} motions pass (t = ${TIMES.join(', ')}; ${FRAMES} frames each at ${SIZES.map((s) => s.join('x')).join(' and ')}, budget ${BUDGET_MS} ms)`)
process.exit(failed ? 1 : 0)
