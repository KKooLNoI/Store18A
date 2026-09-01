import { useState } from 'react'
import { GARDEN_PHOTOS } from '../data.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import './GardenGallery.css'

/*  Layout สำหรับ 6 รูป (bento editorial)
    ┌────────────┬─────────┬─────────┐
    │            │  [1]    │  [2]    │  row-1
    │   [0]      ├─────────┼─────────┤
    │  (tall)    │  [3]    │  [4]    │  row-2
    ├────────────┴─────────┴─────────┤
    │         [5]  (wide)            │  row-3
    └────────────────────────────────┘
*/
const SPANS = [
  { area: 'a' },  // tall left
  { area: 'b' },
  { area: 'c' },
  { area: 'd' },
  { area: 'e' },
  { area: 'f' },  // wide bottom
]

const TAGS = ['สดทุกเช้า','ปลูกเอง','อินทรีย์','ไม่ใช้สาร','สดจากสวน','หลังบ้าน']

export default function GardenGallery() {
  const { ref, visible } = useScrollReveal()
  const [active, setActive] = useState(null)          // lightbox index

  return (
    <div className="garden-gallery" ref={ref}>
      {/* Header */}
      <div className={`gg-header reveal${visible ? ' visible' : ''}`}>
        <div>
          <div className="gg-eyebrow">
            <span className="gg-eyebrow-line" />
            สวนยายศรี
            <span className="gg-eyebrow-line" />
          </div>
          <h3 className="gg-title">📸 ภาพจากสวนของเราจริง ๆ</h3>
          <p className="gg-sub">ถ่ายจากสวนหลังบ้าน สดทุกวัน ไม่มีแต่งภาพ</p>
        </div>
        <div className="gg-badge-row">
          <span className="gg-badge">🌿 ปลูกเอง</span>
          <span className="gg-badge">📷 ภาพจริง</span>
          <span className="gg-badge">✅ ไม่มีสาร</span>
        </div>
      </div>

      {/* Bento Grid */}
      <div className={`gg-grid reveal scale${visible ? ' visible' : ''}`}>
        {GARDEN_PHOTOS.map((p, i) => (
          <button
            key={p.img}
            className={`gg-cell area-${SPANS[i].area}`}
            onClick={() => setActive(i)}
            aria-label={`ดูรูป: ${p.label}`}
          >
            <img
              src={p.img}
              alt={p.label}
              className="gg-img"
              loading={i < 2 ? 'eager' : 'lazy'}
            />
            {/* overlay */}
            <div className="gg-overlay">
              <span className="gg-tag">{TAGS[i]}</span>
              <div className="gg-label-wrap">
                <span className="gg-zoom-icon">🔍</span>
                <span className="gg-label">{p.label}</span>
              </div>
            </div>
            {/* corner dot */}
            <span className="gg-corner-dot" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div className="gg-lightbox" onClick={() => setActive(null)}>
          <button className="gg-lb-close" onClick={() => setActive(null)}>✕</button>
          <button
            className="gg-lb-nav prev"
            onClick={e => { e.stopPropagation(); setActive(v => (v - 1 + GARDEN_PHOTOS.length) % GARDEN_PHOTOS.length) }}
          >‹</button>
          <div className="gg-lb-inner" onClick={e => e.stopPropagation()}>
            <img
              src={GARDEN_PHOTOS[active].img}
              alt={GARDEN_PHOTOS[active].label}
              className="gg-lb-img"
            />
            <div className="gg-lb-footer">
              <span className="gg-lb-label">{GARDEN_PHOTOS[active].label}</span>
              <span className="gg-lb-counter">{active + 1} / {GARDEN_PHOTOS.length}</span>
            </div>
          </div>
          <button
            className="gg-lb-nav next"
            onClick={e => { e.stopPropagation(); setActive(v => (v + 1) % GARDEN_PHOTOS.length) }}
          >›</button>
        </div>
      )}
    </div>
  )
}
