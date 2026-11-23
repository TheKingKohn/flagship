// Will You Survive This?: the 61 second shopping clock running down under hazard stripes, the budget bar draining as items go in the cart.
import { type Draw, INK, MONO, clamp, digits, loop } from './kit'

const P = 9

export const survive: Draw = (c, w, h, t, accent) => {
  const p = loop(t, P, 4.5), left = 61 * (1 - clamp(p / (P - 1)))
  const L = w * 0.08, W = w * 0.84
  // hazard stripes along the top
  const sy = h * 0.1, sh = h * 0.07, sw = sh * 1.6, off = (t * 18) % (sw * 2)
  c.save()
  c.beginPath()
  c.rect(L, sy, W, sh)
  c.clip()
  c.fillStyle = accent
  c.globalAlpha = 0.85
  for (let x = L - sw * 2 + off; x < L + W + sw; x += sw * 2) {
    c.beginPath()
    c.moveTo(x, sy + sh)
    c.lineTo(x + sw, sy)
    c.lineTo(x + sw * 2, sy)
    c.lineTo(x + sw, sy + sh)
    c.fill()
  }
  c.restore()
  // the clock
  const s = Math.round(h * 0.3), urgent = left < 10 && Math.floor(t * 4) % 2 === 0
  c.globalAlpha = 1
  c.fillStyle = urgent ? accent : INK
  c.font = `700 ${s}px ${MONO}`
  c.textAlign = 'left'
  c.textBaseline = 'alphabetic'
  digits(c, Math.ceil(left), L + W * 0.62, h * 0.56, s * 0.62, 2)
  c.globalAlpha = 0.55
  c.font = `${Math.round(s * 0.2)}px ${MONO}`
  c.fillStyle = INK
  c.fillText('seconds to shop', L + W * 0.62 + s * 0.7, h * 0.56)
  // budget bar: $1000 draining in steps as items are bought
  const by = h * 0.68, bh = h * 0.06, spent = Math.min(1, Math.floor(p * 1.6) / 14)
  c.globalAlpha = 0.18
  c.fillRect(L, by, W, bh)
  c.globalAlpha = 0.9
  c.fillStyle = accent
  c.fillRect(L, by, W * (1 - spent), bh)
  c.globalAlpha = 1
}
