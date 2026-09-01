import { useScrollReveal } from '../hooks/useScrollReveal.js'
import './Contact.css'

const INFO_ITEMS = [
  { icon:'📍', title:'ที่อยู่ร้าน',     value:'ดูแผนที่ Google Maps', href:'https://maps.app.goo.gl/bzfEFdMYA8ME1skW8', color:'#dcfce7' },
  { icon:'⏰', title:'เวลาทำการ',        value:'เปิดทุกวัน 05:00 – 19:00 น.', href:null, color:'#fef9c3' },
  { icon:'📞', title:'โทรศัพท์',         value:'02-924-0301 / 061-785-6138', href:'tel:0619785613', color:'#e0f2fe' },
  { icon:'💳', title:'การชำระเงิน',      value:'เงินสด · พร้อมเพย์ · QR Code', href:null, color:'#f0fdf4' },
]

const CTA_LINKS = [
  { icon:'💬', label:'ติดต่อ LINE Official', sub:'ตอบไวทุกวัน', href:'https://lin.ee/xj7q0Ih', highlight:true },
  { icon:'📞', label:'โทรสั่งซื้อสินค้า', sub:'061-785-6138', href:'tel:0619785613', highlight:false },
  { icon:'📦', label:'จัดส่งในหมู่บ้าน', sub:'ฟรี ไม่มีขั้นต่ำ', href:null, badge:'FREE', highlight:false },
]

export default function Contact() {
  const { ref: l, visible: lv } = useScrollReveal()
  const { ref: r, visible: rv } = useScrollReveal()
  const { ref: hd, visible: hdv } = useScrollReveal()

  return (
    <section className="contact-section" id="contact">
      <div className="wrap">
        {/* Header */}
        <div ref={hd} className={`contact-hd reveal${hdv ? ' visible' : ''}`}>
          <div className="section-eyebrow">ติดต่อเรา</div>
          <h2 className="section-heading">พร้อมบริการทุกวัน</h2>
          <p className="section-lead">
            ติดต่อสั่งซื้อสินค้าหรือสอบถามข้อมูลเพิ่มเติมได้เลย
          </p>
        </div>

        <div className="contact-grid">
          {/* Left — Info */}
          <div ref={l} className={`reveal${lv ? ' visible' : ''}`}>
            <h3 className="contact-sub-title">ข้อมูลร้านค้า</h3>
            <div className="info-cards">
              {INFO_ITEMS.map(item => (
                <div
                  key={item.title}
                  className="info-card"
                  style={{ '--chip-color': item.color }}
                >
                  <div className="info-icon">{item.icon}</div>
                  <div className="info-body">
                    <div className="info-title">{item.title}</div>
                    {item.href
                      ? <a href={item.href} className="info-val link" target="_blank" rel="noreferrer">{item.value} →</a>
                      : <div className="info-val">{item.value}</div>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* open hours banner */}
            <div className="hours-banner">
              <div className="hours-indicator">
                <span className="hours-dot" />
                <span className="hours-status">เปิดให้บริการ</span>
              </div>
              <div className="hours-time">05:00 – 19:00 น. ทุกวัน</div>
            </div>
          </div>

          {/* Right — CTA */}
          <div ref={r} className={`reveal${rv ? ' visible' : ''}`}>
            <div className="cta-card">
              <div className="cta-card-glow" />
              <div className="cta-card-hd">
                <div className="cta-card-icon">🛒</div>
                <div>
                  <h3 className="cta-card-title">สั่งซื้อได้เลยทันที!</h3>
                  <p className="cta-card-sub">ส่งถึงบ้านในหมู่บ้าน · สั่งผักล่วงหน้า รับสดทุกเช้า</p>
                </div>
              </div>
              <div className="cta-links">
                {CTA_LINKS.map(link => (
                  link.href
                    ? (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                        className={`cta-row${link.highlight ? ' highlight' : ''}`}
                      >
                        <span className="cta-row-icon">{link.icon}</span>
                        <span className="cta-row-text">
                          <span className="cta-row-label">{link.label}</span>
                          <span className="cta-row-sub">{link.sub}</span>
                        </span>
                        <span className="cta-row-arrow">→</span>
                      </a>
                    )
                    : (
                      <div key={link.label} className="cta-row free">
                        <span className="cta-row-icon">{link.icon}</span>
                        <span className="cta-row-text">
                          <span className="cta-row-label">{link.label}</span>
                          <span className="cta-row-sub">{link.sub}</span>
                        </span>
                        {link.badge && <span className="free-badge">{link.badge}</span>}
                      </div>
                    )
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
