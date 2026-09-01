import { useScrollReveal } from '../hooks/useScrollReveal.js'
import './FlashDeal.css'

const U = (id) => `https://images.unsplash.com/photo-${id}?w=400&h=300&fit=crop&q=80`

const DEALS = [
  { emoji:'🍚', img: U('1686820740687-426a7b9b2043'), name:'ข้าวสารหอมมะลิ', unit:'ถุง 5 กก.',    color:'#dcfce7,#bbf7d0', hot:true  },
  { emoji:'🥚', img: U('1570802685082-2224bd954723'), name:'ไข่ไก่สดเบอร์ 2', unit:'แผง 30 ฟอง', color:'#fef9c3,#fef08a', hot:true  },
  { emoji:'🍜', img: U('1766871138762-51db92945bbc'), name:'มาม่า ต้มยำกุ้ง', unit:'แพ็ก 10 ซอง',color:'#fee2e2,#fecaca', hot:false },
  { emoji:'🧴', img: null,                             name:'น้ำยาล้างจาน',   unit:'ขวด 500 ml.', color:'#ecfccb,#d9f99d', hot:false },
]


function DealCard({ d, delay }) {
  const { ref, visible } = useScrollReveal(0.08)
  return (
    <div ref={ref} className={`deal-card reveal${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${delay * 80}ms` }}>
      {d.hot && <div className="deal-hot">🔥 ขายดี</div>}
      <div className="deal-thumb" style={{ background: `linear-gradient(135deg,${d.color})` }}>
        {d.img
          ? <img src={d.img} alt={d.name} className="deal-img" loading="lazy" />
          : <span className="deal-emoji">{d.emoji}</span>
        }
      </div>
      <div className="deal-body">
        <div className="deal-name">{d.name}</div>
        <div className="deal-unit">{d.unit}</div>
        <a href="#contact" className="deal-btn">🛒 สั่งซื้อ</a>
      </div>
    </div>
  )
}

export default function FlashDeal() {
  const { ref, visible } = useScrollReveal()

  return (
    <section className="flash-section">
      <div className="flash-bg-blob" aria-hidden="true" />
      <div className="wrap">
        <div ref={ref} className={`flash-hd reveal${visible ? ' visible' : ''}`}>
          <div className="flash-left">
            <div className="flash-eyebrow">⭐ สินค้าแนะนำ</div>
            <h2 className="flash-title">สินค้ายอดนิยม<br /><span>ที่ลูกค้าชื่นชอบ</span></h2>
          </div>
        </div>

        <div className="deal-grid">
          {DEALS.map((d, i) => <DealCard key={d.name} d={d} delay={i} />)}
        </div>
      </div>
    </section>
  )
}
