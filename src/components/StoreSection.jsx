import { useState } from 'react'
import { STORE_PRODUCTS } from '../data.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import './StoreSection.css'

const CATS = [
  { key:'all',       label:'ทั้งหมด',      count: STORE_PRODUCTS.length },
  { key:'staple',    label:'🍚 ข้าว-แป้ง' },
  { key:'instant',   label:'🍜 บะหมี่' },
  { key:'drink',     label:'🧃 เครื่องดื่ม' },
  { key:'seasoning', label:'🧂 เครื่องปรุง' },
  { key:'household', label:'🧴 ของใช้' },
  { key:'snack',     label:'🍭 ขนม' },
]
const TAG_LABEL = { bestseller:'🔥 ขายดี', sale10:'💥 ลด 10%' }
const TAG_COLOR = { bestseller:'tag-hot', sale10:'tag-sale' }

function ProductCard({ p, delay }) {
  const { ref, visible } = useScrollReveal(0.08)
  return (
    <div
      ref={ref}
      className={`prod-card reveal${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${delay * 75}ms` }}
    >
      {p.tag && (
        <div className={`prod-tag ${TAG_COLOR[p.tag]}`}>{TAG_LABEL[p.tag]}</div>
      )}
      <div
        className="prod-thumb"
        style={{ background: `linear-gradient(135deg,${p.color})` }}
      >
        {p.img
          ? <img src={p.img} alt={p.name} className="prod-img" loading="lazy" />
          : <span className="prod-emoji">{p.emoji}</span>
        }
      </div>
      <div className="prod-body">
        <div className="prod-name">{p.name}</div>
        <div className="prod-unit">{p.unit}</div>
      </div>
    </div>
  )
}

export default function StoreSection() {
  const [cat, setCat] = useState('all')
  const { ref: hdRef, visible: hdVis } = useScrollReveal()
  const filtered = cat === 'all'
    ? STORE_PRODUCTS
    : STORE_PRODUCTS.filter(p => p.cat === cat)

  return (
    <section className="store-section" id="store">
      <div className="wrap">
        {/* Header */}
        <div ref={hdRef} className={`store-hd reveal${hdVis ? ' visible' : ''}`}>
          <div>
            <div className="section-eyebrow">ร้านค้าซอย 18A</div>
            <h2 className="section-heading">สินค้าครบ ราคาเป็นมิตร</h2>
            <p className="section-lead">
              อุปโภคบริโภคคุณภาพดีราคาย่อมเยา<br />
              จัดส่งถึงบ้านในหมู่บ้านไม่มีขั้นต่ำ
            </p>
          </div>
          <a href="#contact" className="btn btn-solid store-cta-btn">
            📞 สั่งซื้อสินค้า
          </a>
        </div>

        {/* Category Tabs */}
        <div className="cat-bar">
          {CATS.map(c => (
            <button
              key={c.key}
              className={`cat-btn${cat === c.key ? ' active' : ''}`}
              onClick={() => setCat(c.key)}
            >
              {c.label}
              {c.count && cat === c.key && (
                <span className="cat-count">{c.count}</span>
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="prod-grid">
          {filtered.map((p, i) => (
            <ProductCard key={p.name} p={p} delay={i % 4} />
          ))}
        </div>
      </div>
    </section>
  )
}
