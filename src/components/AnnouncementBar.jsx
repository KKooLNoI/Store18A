import './AnnouncementBar.css'

const MESSAGES = [
  '🎉 ลูกค้าใหม่ รับส่วนลด 10% สำหรับออเดอร์แรก!',
  '🚚 ส่งฟรีในหมู่บ้าน ไม่มีขั้นต่ำ',
  '🌿 ผักสดเก็บเช้าวันนี้ มาถึงแล้ว!',
  '📱 สั่งทาง LINE ได้เลย ตอบไวทุกวัน',
  '🥚 ไข่ไก่สดเบอร์ 2 แผง 30 ฟอง ฿105',
  '🍚 ข้าวหอมมะลิถุง 5 กก. เพียง ฿145',
]

export default function AnnouncementBar() {
  const repeated = [...MESSAGES, ...MESSAGES]
  return (
    <div className="ann-bar">
      <div className="ann-track">
        {repeated.map((msg, i) => (
          <span key={i} className="ann-item">
            {msg}
            <span className="ann-sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
