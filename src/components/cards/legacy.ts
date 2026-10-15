// The three pass-1 motions, kept as they were: each draws inside a box and names its own reduced-motion frame.
// motions/index.ts adapts them to the registry signature.
export type Box = { x: number; y: number; w: number; h: number }
export type Motion = {
  draw: (c: CanvasRenderingContext2D, W: number, H: number, t: number, b: Box, accent: string) => void
  /** the time, in seconds, of the frame drawn under prefers-reduced-motion */
  still: number
}

const TAU = Math.PI * 2
const clamp = (x: number) => Math.min(1, Math.max(0, x))
const ease = (x: number) => x * x * (3 - 2 * x)
const GRID = 'rgba(230,235,240,.08)'

// ---------------------------------------------------------------- Roofline: a radial hazard profile
// Twelve spokes, one score each, drawn spoke by spoke, then read one at a time; it settles on a second county and back.
// -1 is "not applicable": a gap and a hollow tick, never a zero.
const VA = [0.62, 0.36, 0.5, 0.2, 0.14, 0.58, 0.42, -1, 0.7, 0.3, 0.46, 0.24]
const VB = [0.28, 0.66, 0.34, 0.44, 0.5, 0.22, 0.64, -1, 0.36, 0.58, 0.2, 0.52]
const VM = [0.45, 0.45, 0.45, 0.3, 0.3, 0.4, 0.45, 0.35, 0.5, 0.35, 0.35, 0.35]
const NA = 7

export const roofline: Motion = {
  still: 3,
  draw(c, _W, _H, t, b, ac) {
    const cx = b.x + b.w / 2
    const cy = b.y + b.h / 2
    const R = Math.min(b.w, b.h) * 0.44
    const pt = (i: number, r: number): [number, number] => {
      const a = -Math.PI / 2 + (i / 12) * TAU
      return [cx + Math.cos(a) * R * r, cy + Math.sin(a) * R * r]
    }
    const u = (t - 1.6) % 9
    const m = ease(clamp((u - 2.5) / 1.5)) - ease(clamp((u - 6.5) / 1.5))
    const v = (i: number) => (t < 1.6 ? VA[i] * ease(clamp((t - i * 0.07) / 0.9)) : VA[i] + (VB[i] - VA[i]) * m)
    c.lineWidth = 1
    c.strokeStyle = GRID
    for (const r of [0.25, 0.5, 0.75, 1]) {
      c.beginPath()
      c.arc(cx, cy, R * r, 0, TAU)
      c.stroke()
    }
    for (let i = 0; i < 12; i++) {
      c.beginPath()
      c.moveTo(cx, cy)
      c.lineTo(...pt(i, 1))
      c.stroke()
    }
    c.setLineDash([3, 4])
    c.strokeStyle = 'rgba(230,235,240,.3)'
    c.beginPath()
    VM.forEach((s, i) => (i ? c.lineTo(...pt(i, s)) : c.moveTo(...pt(i, s))))
    c.closePath()
    c.stroke()
    c.setLineDash([])
    c.beginPath()
    for (let k = 1; k < 12; k++) {
      const i = (NA + k) % 12
      c.lineTo(...pt(i, v(i)))
    }
    c.fillStyle = ac
    c.globalAlpha = 0.14
    c.fill()
    c.globalAlpha = 1
    c.strokeStyle = ac
    c.lineWidth = 1.5
    c.stroke()
    const cur = t < 1.6 ? -1 : Math.floor(u / 0.45) % 12
    for (let i = 0; i < 12; i++) {
      const [x, y] = i === NA ? pt(i, 0.5) : pt(i, v(i))
      c.beginPath()
      c.arc(x, y, i === NA ? 3 : 2.5, 0, TAU)
      if (i === NA) {
        c.strokeStyle = 'rgba(230,235,240,.5)'
        c.lineWidth = 1
        c.stroke()
      } else {
        c.fillStyle = ac
        c.fill()
      }
      if (i === cur) {
        c.beginPath()
        c.arc(x, y, 7, 0, TAU)
        c.strokeStyle = ac
        c.lineWidth = 1
        c.stroke()
      }
    }
  },
}

// ---------------------------------------------------------------- Patchwork: pixels landing one by one
const PAL: Record<string, string> = {
  r: '#c5303b', t: '#d8a67a', w: '#6ac0ff', b: '#5a3a2a',
  h: '#f26a4b', H: '#ff9d6c', d: '#c5303b',
}
const MOTIFS = [
  ['.....rr.....', '....rrrr....', '...rrrrrr...', '..rrrrrrrr..', '.rrrrrrrrrr.', 'rrrrrrrrrrrr', '.tttttttttt.', '.ttwwtttbbt.', '.ttwwtttbbt.', '.tttttttbbt.', '.tttttttbbt.'],
  ['.hhhh.hhhh.', 'hhHHhhhhhhh', 'hhHhhhhhhhh', 'hhhhhhhhhhh', '.hhhhhhhhh.', '..hhhhhhh..', '...hhhhh...', '....ddd....', '.....d.....'],
]
let seed = 7
const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647
const SHOTS = MOTIFS.map((rows) => {
  const cells: [number, number, string][] = []
  rows.forEach((row, y) => [...row].forEach((ch, x) => ch !== '.' && cells.push([x, y, PAL[ch]])))
  return cells.map((q) => [rnd(), q] as const).sort((p, q) => p[0] - q[0]).map((p) => p[1])
})
const DT = 0.045
const LEN = SHOTS.map((s) => 0.3 + s.length * DT + 2.4)

export const patchwork: Motion = {
  still: 0.3 + SHOTS[0].length * DT + 0.6,
  draw(c, W, H, t, b, ac) {
    let k = 0
    let u = t % (LEN[0] + LEN[1])
    if (u >= LEN[0]) {
      u -= LEN[0]
      k = 1
    }
    const rows = MOTIFS[k]
    const cols = rows[0].length
    const cs = Math.max(5, Math.floor(Math.min(b.w / cols, b.h / rows.length) * 0.8))
    const ox = Math.round(b.x + (b.w - cols * cs) / 2)
    const oy = Math.round(b.y + (b.h - rows.length * cs) / 2)
    c.strokeStyle = GRID
    c.lineWidth = 1
    c.beginPath()
    for (let x = ox % cs; x < W; x += cs) {
      c.moveTo(x + 0.5, 0)
      c.lineTo(x + 0.5, H)
    }
    for (let y = oy % cs; y < H; y += cs) {
      c.moveTo(0, y + 0.5)
      c.lineTo(W, y + 0.5)
    }
    c.stroke()
    const shots = SHOTS[k]
    const done = shots.length * DT + 0.3
    c.globalAlpha = u > done + 1.8 ? 1 - clamp((u - done - 1.8) / 0.6) : 1
    let last: [number, number, string] | null = null
    shots.forEach((s, i) => {
      const p = clamp((u - 0.3 - i * DT) / 0.28)
      if (p <= 0) return
      const g = (1 - ease(p)) * cs * 0.5
      c.fillStyle = s[2]
      c.fillRect(ox + s[0] * cs - g, oy + s[1] * cs - g, cs + g * 2, cs + g * 2)
      if (p < 1) last = s
    })
    c.globalAlpha = 1
    if (last) {
      const [x, y] = last as [number, number, string]
      c.strokeStyle = ac
      c.lineWidth = 2
      c.strokeRect(ox + x * cs - 2, oy + y * cs - 2, cs + 4, cs + 4)
    }
  },
}

// ---------------------------------------------------------------- FluxRead: one word at a time, the eye locked on one letter
const WORDS = 'Paste a link and read it one word at a time, right where your eye locks on.'.split(' ')
const DUR = WORDS.map((w) => 0.2 * (1 + (w.replace(/\W/g, '').length > 6 ? 0.4 : 0) + (/[,;]$/.test(w) ? 0.6 : 0) + (/\.$/.test(w) ? 1.2 : 0)))
const AT = DUR.map((_, i) => DUR.slice(0, i).reduce((a, d) => a + d, 0))
const READ = AT[AT.length - 1] + DUR[DUR.length - 1]

export const fluxread: Motion = {
  still: AT[15] + 0.05,
  draw(c, _W, _H, t, b, ac) {
    const u = t % (READ + 0.8)
    const i = Math.max(0, AT.findIndex((a, j) => u >= a && u < a + DUR[j]))
    const word = u < READ ? WORDS[i] : ''
    const cx = b.x + b.w / 2
    const cy = b.y + b.h / 2
    const fs = Math.min(b.h * 0.22, b.w / 4.3)
    c.strokeStyle = 'rgba(229,229,229,.14)'
    c.lineWidth = 1
    c.beginPath()
    c.moveTo(b.x, cy - fs * 0.8)
    c.lineTo(b.x + b.w, cy - fs * 0.8)
    c.moveTo(b.x, cy + fs * 0.8)
    c.lineTo(b.x + b.w, cy + fs * 0.8)
    c.moveTo(cx, cy - fs * 0.8)
    c.lineTo(cx, cy - fs * 0.5)
    c.moveTo(cx, cy + fs * 0.5)
    c.lineTo(cx, cy + fs * 0.8)
    c.stroke()
    if (word) {
      const n = word.replace(/\W/g, '').length
      const o = n < 2 ? 0 : n < 6 ? 1 : n < 10 ? 2 : 3
      c.font = `600 ${fs}px system-ui, -apple-system, "Segoe UI", sans-serif`
      c.textBaseline = 'middle'
      c.textAlign = 'left'
      const pre = word.slice(0, o)
      const mid = word[o]
      const x0 = cx - c.measureText(pre).width - c.measureText(mid).width / 2
      c.fillStyle = '#e5e5e5'
      c.fillText(pre, x0, cy)
      c.fillText(word.slice(o + 1), x0 + c.measureText(pre + mid).width, cy)
      c.fillStyle = ac
      c.fillText(mid, x0 + c.measureText(pre).width, cy)
    }
    const y = b.y + b.h - 4
    c.strokeStyle = 'rgba(229,229,229,.14)'
    c.beginPath()
    c.moveTo(b.x + b.w * 0.1, y)
    c.lineTo(b.x + b.w * 0.9, y)
    c.stroke()
    c.strokeStyle = ac
    c.beginPath()
    c.moveTo(b.x + b.w * 0.1, y)
    c.lineTo(b.x + b.w * (0.1 + 0.8 * clamp(u / READ)), y)
    c.stroke()
  },
}
