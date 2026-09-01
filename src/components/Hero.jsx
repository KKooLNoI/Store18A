import './Hero.css'

const QUICK_ITEMS = [
  { emoji:'🍛', label:'เมนูอาหาร', badge:'อ. / พฤ.' },
  { emoji:'🥬', label:'ผักบุ้ง',  badge:'ปลูกเอง' },
  { emoji:'🌿', label:'กะเพรา',  badge:'อินทรีย์' },
  { emoji:'🍚', label:'ข้าวสาร',  badge:'ขายดี' },
  { emoji:'🥚', label:'ไข่ไก่',   badge:'สด' },
  { emoji:'🌶️', label:'พริก',    badge:'สด' },
]

const STATS = [
  { num:'500+', label:'รายการสินค้า' },
  { num:'10 ปี', label:'ให้บริการ' },
  { num:'100%', label:'ผักอินทรีย์' },
]

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* ambient blobs */}
      <div className="blob b1" aria-hidden="true" />
      <div className="blob b2" aria-hidden="true" />
      <div className="blob b3" aria-hidden="true" />
      {/* grid pattern overlay */}
      <div className="hero-grid-pattern" aria-hidden="true" />

      <div className="hero-inner wrap">
        {/* ── Left ── */}
        <div className="hero-copy">
          <div className="hero-pill">
            <span className="hero-pill-dot" />
            <span>เปิดทุกวัน 05:00 – 19:00 น.</span>
          </div>

          <h1 className="hero-h1">
            <span className="hero-h1-line1">ร้านของชำ &amp;</span>
            <span className="hero-h1-line2">
              <span className="hero-accent">สวนผักสด</span>
            </span>
            <span className="hero-h1-line3">ใกล้บ้านคุณ</span>
          </h1>

          <p className="hero-lead">
            สินค้าอุปโภคบริโภคครบครัน ราคาย่อมเยา<br />
            ผักสดปลูกเอง ไม่ใช้ยาฆ่าแมลง เก็บเช้าขายเช้า
          </p>

          <div className="hero-actions">
            <a href="#menu" className="btn btn-solid">🍛 ดูเมนูอาหาร อ.-พฤ.</a>
            <a href="#store" className="btn btn-ghost">🛒 ดูสินค้าทั้งหมด</a>
          </div>

          <div className="hero-stats">
            {STATS.map((s, i) => (
              <div className="hero-stat" key={s.label} style={{ animationDelay: `${i * .1 + .5}s` }}>
                <div className="hero-stat-num">{s.num}</div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right Card ── */}
        <div className="hero-visual">
          {/* main card */}
          <div className="hero-card">
            <div className="hero-card-bar" />
            <div className="hero-card-hd">
              <div className="hc-avatar">🏪</div>
              <div>
                <div className="hc-title">วันนี้มีอะไรบ้าง?</div>
                <div className="hc-sub">อัปเดตสด ราคาดีทุกวัน</div>
              </div>
              <div className="hc-live">
                <span className="live-dot" />
                สด
              </div>
            </div>
            <div className="quick-grid">
              {QUICK_ITEMS.map(item => (
                <div className="quick-item" key={item.label}>
                  <div className="qi-emoji">{item.emoji}</div>
                  <div className="qi-label">{item.label}</div>
                  <div className="qi-badge">{item.badge}</div>
                </div>
              ))}
            </div>
            <div className="hero-card-ft">
              <span className="hcft-tag green">🌿 ผักสดจากสวนหลังบ้าน</span>
              <span className="hcft-tag amber">🚚 ส่งฟรีในหมู่บ้าน</span>
            </div>
          </div>

          {/* floating chips */}
          <div className="float-chip fc1">
            <span className="fc-dot g" />
            <span>ผักสดทุกเช้า</span>
          </div>
          <div className="float-chip fc2">
            <span className="fc-dot a" />
            <span>ไม่ใช้สารเคมี</span>
          </div>
          <div className="float-chip fc3">
            <span>🏡</span>
            <span>ปลูกเองที่บ้าน</span>
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="hero-scroll-hint">
        <div className="scroll-arrow" />
      </div>
    </section>
  )
}
