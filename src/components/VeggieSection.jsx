import { VEGGIE_LIST, GROW_STEPS } from '../data.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import GardenGallery from './GardenGallery.jsx'
import './VeggieSection.css'

function VegCard({ v, delay }) {
  const { ref, visible } = useScrollReveal(0.08)
  return (
    <div
      ref={ref}
      className={`veg-card reveal${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${delay * 80}ms` }}
    >
      <div
        className="veg-thumb"
        style={{ background: `linear-gradient(135deg,${v.from},${v['to']})` }}
      >
        {v.img
          ? <img src={v.img} alt={v.name} className="veg-img" loading="lazy" />
          : <span className="veg-emoji">{v.emoji}</span>
        }
        <div className={`veg-origin-badge ${v.tag === 'ปลูกเอง' ? 'own' : 'select'}`}>
          {v.tag === 'ปลูกเอง' ? '🏡 ปลูกเอง' : '⭐ คัดเกรด'}
        </div>
        {v.inStock && <div className="veg-fresh-dot" />}
      </div>
      <div className="veg-body">
        <div className="veg-name">{v.name}</div>
        <div className="veg-desc">{v.desc}</div>
        <div className="veg-footer">
          <div className={`veg-status ${v.inStock ? 'in' : 'out'}`}>
            {v.inStock ? '✅ มีของ' : '❌ หมด'}
          </div>
        </div>
      </div>
    </div>
  )
}


export default function VeggieSection() {
  const { ref: hd1, visible: hv1 } = useScrollReveal()
  const { ref: hd2, visible: hv2 } = useScrollReveal()
  const { ref: gdRef, visible: gdVis } = useScrollReveal()

  return (
    <section className="veggie-section" id="veggie">
      {/* decorative background */}
      <div className="veg-bg-leaf l1" aria-hidden="true">🍃</div>
      <div className="veg-bg-leaf l2" aria-hidden="true">🌿</div>
      <div className="veg-bg-blob" aria-hidden="true" />

      <div className="wrap">
        {/* ── Section Header ── */}
        <div className="veggie-hd">
          <div ref={hd1} className={`reveal${hv1 ? ' visible' : ''}`}>
            <div className="section-eyebrow">สวนยายศรี</div>
            <h2 className="section-heading">
              ผักสด ปลูกเอง<br />
              <span className="veg-heading-accent">จากสวนหลังบ้าน</span>
            </h2>
            <p className="section-lead">
              เก็บเช้า ขายเช้า ปลูกระบบอินทรีย์ ไม่ใช้ยาฆ่าแมลง<br />
              สั่งล่วงหน้าได้ทุกวัน รับสดทุกเช้า
            </p>
            <div style={{ marginTop:'1.8rem', display:'flex', gap:'12px', flexWrap:'wrap' }}>
              <a href="#contact" className="btn btn-solid">📱 สั่งผักล่วงหน้า</a>
              <a href="#contact" className="btn btn-ghost">💬 ติดต่อ LINE</a>
            </div>
          </div>

          {/* Today list card */}
          <div ref={hd2} className={`today-card reveal${hv2 ? ' visible' : ''}`}>
            <div className="today-card-top">
              <div className="today-card-icon">🛒</div>
              <div>
                <div className="today-card-title">ผักสดวันนี้</div>
                <div className="today-card-sub">เก็บจากสวน เช้านี้</div>
              </div>
              <div className="today-badges">
                <span className="tb green">🌱 อินทรีย์</span>
                <span className="tb lime">💧 ปลูกเอง</span>
              </div>
            </div>
            <ul className="today-list">
              {[
                {name:'ผักบุ้ง',  price:'฿10/กำ'},
                {name:'กะเพรา', price:'฿10/กำ'},
                {name:'โหระพา', price:'฿10/กำ'},
                {name:'คะน้า',   price:'฿15/กำ'},
                {name:'พริกขี้หนู',price:'฿5/กำ'},
                {name:'ตะไคร้',  price:'฿5/3ต้น'},
              ].map(item => (
                <li key={item.name}>
                  <span className="tl-dot" />
                  <span className="tl-name">{item.name}</span>
                  <span className="tl-price">{item.price}</span>
                </li>
              ))}
            </ul>
            <div className="today-card-ft">
              <span>✅ สดทุกวัน · ✅ ไม่มีสาร · ✅ ราคาถูก</span>
            </div>
          </div>
        </div>

        {/* ── Veggie Cards ── */}
        <div className="veg-grid">
          {VEGGIE_LIST.map((v, i) => (
            <VegCard key={v.name} v={v} delay={i % 4} />
          ))}
        </div>

        {/* ── Grow Guide ── */}
        <div ref={gdRef} className={`grow-guide reveal${gdVis ? ' visible' : ''}`}>
          <div className="grow-guide-hd">
            <div>
              <div className="label-chip"><span className="chip-dot" />เคล็ดลับ</div>
              <h3 className="grow-guide-title">🌱 วิธีปลูกผักที่บ้าน</h3>
              <p className="grow-guide-sub">ปลูกง่าย ใช้พื้นที่น้อย กินสดได้ทุกวัน</p>
            </div>
          </div>
          <div className="steps">
            {GROW_STEPS.map((s, i) => (
              <div className="step-card" key={s.title}>
                <div className="step-num">{s.step}</div>
                <div className="step-icon">{s.icon}</div>
                <div className="step-title">{s.title}</div>
                <div className="step-text">{s.text}</div>
              </div>
            ))}
          </div>
          <div className="tip-box">
            <div className="tip-icon">💡</div>
            <div>
              <strong>เคล็ดลับเด็ด:</strong> ใช้น้ำหมักชีวภาพจากเปลือกผลไม้แทนปุ๋ยเคมี
              ผักหวาน นุ่ม ปลอดภัยกว่า ประหยัดค่าใช้จ่ายได้กว่า 80%!
            </div>
          </div>
        </div>

        {/* ── Garden Gallery ── */}
        <GardenGallery />
      </div>
    </section>
  )
}
