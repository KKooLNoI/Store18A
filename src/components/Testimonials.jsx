import { TESTIMONIALS } from '../data.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import './Testimonials.css'

function Stars({ n }) {
  return (
    <div className="stars-row">
      {Array.from({ length: n }).map((_, i) => (
        <span key={i} className="star">★</span>
      ))}
    </div>
  )
}

function ReviewCard({ t, i }) {
  const { ref, visible } = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`review-card reveal${visible ? ' visible' : ''} d${i+1}`}
    >
      <div className="review-quote">❝</div>
      <Stars n={t.stars} />
      <p className="review-text">{t.text}</p>
      <div className="reviewer">
        <div className="reviewer-avi" style={{ background: t.color, color: t.textColor }}>
          {t.emoji}
        </div>
        <div>
          <div className="reviewer-name">{t.name}</div>
          <div className="reviewer-role">{t.role}</div>
        </div>
        <div className="verified-badge">✓ ซื้อจริง</div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const { ref, visible } = useScrollReveal()
  const { ref: sumRef, visible: sumVisible } = useScrollReveal()
  return (
    <section className="reviews-section">
      {/* dark blob */}
      <div className="reviews-blob r1" aria-hidden="true" />
      <div className="reviews-blob r2" aria-hidden="true" />

      <div className="wrap">
        <div ref={ref} className={`reviews-hd reveal${visible ? ' visible' : ''}`}>
          <div className="label-chip light">
            <span className="chip-dot lime" />
            รีวิวลูกค้า
          </div>
          <h2 className="section-heading" style={{ color:'#fff' }}>
            ลูกบ้านพูดถึงเรา
          </h2>
          <p className="section-lead" style={{ color:'rgba(255,255,255,.6)', maxWidth:460 }}>
            ความเชื่อใจจากลูกค้าในชุมชน คือสิ่งที่เราภูมิใจที่สุด
          </p>
        </div>

        <div className="reviews-grid">
          {TESTIMONIALS.map((t, i) => <ReviewCard key={t.name} t={t} i={i} />)}
        </div>

        {/* summary bar */}
        <div className={`reviews-summary reveal${sumVisible ? ' visible' : ''} d4`} ref={sumRef}>
          {[
            { num:'5.0', label:'คะแนนเฉลี่ย' },
            { num:'100+', label:'รีวิว' },
            { num:'98%', label:'พอใจมาก' },
          ].map(s => (
            <div className="rs-stat" key={s.label}>
              <div className="rs-num">{s.num}</div>
              <div className="rs-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
