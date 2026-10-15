// Street Time Machine: one street grid seen twice, as the surveyors drew it and as it is today, a loupe divider sliding between.
import { type Draw, TAU } from './kit'

const PAPER = '#efe6d2'

function streets(c: CanvasRenderingContext2D, w: number, h: number, now: boolean) {
  const g = h * 0.22
  c.save()
  c.translate(w / 2, h * 0.45)
  c.rotate(-0.32)
  c.lineWidth = now ? 2 : 1
  c.strokeStyle = now ? 'rgba(233,228,216,.42)' : 'rgba(239,230,210,.4)'
  c.beginPath()
  for (let i = -7; i <= 7; i++) (c.moveTo(i * g * 1.2, -h), c.lineTo(i * g * 1.2, h))
  for (let j = -5; j <= 5; j++) (c.moveTo(-w, j * g), c.lineTo(w, j * g))
  c.stroke()
  if (now) {
    c.fillStyle = 'rgba(233,228,216,.09)'
    for (let i = -3; i < 3; i++) for (let j = -2; j < 2; j++) c.fillRect(i * g * 1.2 + 5, j * g + 5, g * 1.2 - 10, g - 10)
  } else {
    c.strokeStyle = 'rgba(239,230,210,.2)'
    c.lineWidth = 1
    c.beginPath()
    for (let k = 0; k < 4; k++) (c.moveTo(-w, -g * 1.6 + k * 9), c.bezierCurveTo(-w * 0.3, -g * 2.6 + k * 9, w * 0.3, -g * 0.4 + k * 9, w, -g * 1.4 + k * 9))
    c.stroke()
  }
  c.restore()
}

export const streetTimeMachine: Draw = (c, w, h, t, accent) => {
  const x = w * (0.5 + 0.3 * Math.sin(t * 0.55 + 0.4)), ly = h * 0.58
  c.save()
  c.beginPath()
  c.rect(0, 0, x, h)
  c.clip()
  c.fillStyle = 'rgba(239,230,210,.1)'
  c.fillRect(0, 0, w, h)
  streets(c, w, h, false)
  c.restore()
  c.save()
  c.beginPath()
  c.rect(x, 0, w - x, h)
  c.clip()
  streets(c, w, h, true)
  c.restore()
  c.fillStyle = accent
  c.beginPath()
  c.arc(w * 0.44, h * 0.4, 4.5, 0, TAU)
  c.fill()
  c.strokeStyle = PAPER
  c.lineWidth = 1.5
  c.beginPath()
  c.moveTo(x, 0)
  c.lineTo(x, h)
  c.stroke()
  c.fillStyle = '#0c0a09'
  c.beginPath()
  c.arc(x, ly, 11, 0, TAU)
  c.fill()
  c.stroke()
  c.beginPath()
  c.moveTo(x - 3, ly - 3)
  c.lineTo(x - 6, ly)
  c.lineTo(x - 3, ly + 3)
  c.moveTo(x + 3, ly - 3)
  c.lineTo(x + 6, ly)
  c.lineTo(x + 3, ly + 3)
  c.stroke()
  // time rail, its needle following the divider
  const a = w * 0.25, b = w * 0.9, ry = h * 0.93, nx = a + (b - a) * (x / w)
  c.globalAlpha = 0.3
  c.lineWidth = 1
  c.beginPath()
  c.moveTo(a, ry)
  c.lineTo(b, ry)
  for (let i = 0; i <= 14; i++) (c.moveTo(a + ((b - a) * i) / 14, ry), c.lineTo(a + ((b - a) * i) / 14, ry - (i % 5 ? 3 : 6)))
  c.stroke()
  c.globalAlpha = 1
  c.strokeStyle = accent
  c.lineWidth = 2
  c.beginPath()
  c.moveTo(nx, ry - 9)
  c.lineTo(nx, ry + 3)
  c.stroke()
}
