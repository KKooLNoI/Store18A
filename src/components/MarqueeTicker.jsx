import './MarqueeTicker.css'

const ITEMS = [
  { emoji:'🍚', label:'ข้าวสารหอมมะลิ' },
  { emoji:'🥚', label:'ไข่ไก่สด' },
  { emoji:'🥬', label:'ผักบุ้ง' },
  { emoji:'🌿', label:'กะเพรา' },
  { emoji:'🌶️', label:'พริกขี้หนู' },
  { emoji:'🍜', label:'มาม่า' },
  { emoji:'🧃', label:'น้ำส้ม UHT' },
  { emoji:'🥛', label:'นมสด' },
  { emoji:'🧂', label:'น้ำปลา' },
  { emoji:'🫙', label:'ซีอิ๊วขาว' },
  { emoji:'🍅', label:'มะเขือเทศ' },
  { emoji:'🌽', label:'ข้าวโพดหวาน' },
  { emoji:'🥦', label:'คะน้า' },
  { emoji:'🍭', label:'ลูกอม' },
  { emoji:'🧴', label:'น้ำยาล้างจาน' },
]

export default function MarqueeTicker() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {doubled.map((it, i) => (
          <span key={i} className="marquee-chip">
            <span className="mq-emoji">{it.emoji}</span>
            <span className="mq-label">{it.label}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
