import { useMemo, useState } from 'react'
import { MENU_ITEMS, MENU_DAYS, WEEK_DAYS } from '../data.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import './WeeklyMenu.css'

function getMenuStatus() {
  const today = new Date().getDay()
  if (MENU_DAYS.includes(today)) return { open: true, daysLeft: 0 }
  for (let diff = 1; diff <= 7; diff++) {
    const check = (today + diff) % 7
    if (MENU_DAYS.includes(check)) {
      return { open: false, daysLeft: diff, nextDay: WEEK_DAYS.find(w => w.d === check).full }
    }
  }
  return { open: false, daysLeft: null, nextDay: '' }
}

const DAY_MESSAGES = {
  open: '🎉 วันนี้เปิดขายเมนูอาหารครบทุกเมนู! สั่งล่วงหน้าทาง LINE ได้เลย',
  closed: '😊 วันนี้ไม่มีขายเมนูอาหารนะ แต่ยังแวะซื้อของชำ/ผักสดได้ตามปกติ',
}

function SpicyLevel({ n }) {
  if (!n) return <span className="mi-spicy none">ไม่เผ็ด</span>
  return (
    <span className="mi-spicy">
      {Array.from({ length: 3 }).map((_, i) => (
        <span key={i} className={`chili${i < n ? ' on' : ''}`}>🌶️</span>
      ))}
    </span>
  )
}

function MenuCard({ item, delay }) {
  const { ref, visible } = useScrollReveal(0.08)
  return (
    <div
      ref={ref}
      className={`menu-card reveal${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${delay * 75}ms` }}
    >
      {item.tag && <div className="menu-card-tag sticker">{item.tag}</div>}
      <div className="menu-card-thumb">
        {item.img
          ? <img src={item.img} alt={item.name} className="menu-card-img" loading="lazy" />
          : <span className="menu-card-emoji">{item.emoji}</span>
        }
      </div>
      <div className="menu-card-body">
        <div className="menu-card-top">
          <div className="menu-card-name">{item.name}</div>
          <div className="menu-card-price">{item.price}</div>
        </div>
        <p className="menu-card-desc">{item.desc}</p>
        <div className="menu-card-ft">
          <SpicyLevel n={item.spicy} />
          <a href="#contact" className="menu-card-order">สั่งเลย →</a>
        </div>
      </div>
    </div>
  )
}

export default function WeeklyMenu() {
  const status = useMemo(getMenuStatus, [])
  const today = new Date().getDay()
  const { ref: hdRef, visible: hdVis } = useScrollReveal()
  const [pickedDay, setPickedDay] = useState(today)

  const pickedIsMenuDay = MENU_DAYS.includes(pickedDay)
  const pickedInfo = WEEK_DAYS.find(w => w.d === pickedDay)

  return (
    <section className="weekly-menu" id="menu">
      <div className="wm-bg-tape t1" aria-hidden="true" />
      <div className="wm-bg-tape t2" aria-hidden="true" />

      <div className="wrap">
        <div ref={hdRef} className={`wm-hd reveal${hdVis ? ' visible' : ''}`}>
          <div className="wm-hd-copy">
            <div className="label-chip"><span className="chip-dot" />เมนูอาหารพิเศษ</div>
            <h2 className="section-heading">
              อาหารทำสดใหม่<br />ขายเฉพาะวัน <mark>อังคาร &amp; พฤหัสบดี</mark>
            </h2>
            <p className="section-lead">
              ปรุงสดวันต่อวัน ไม่ค้างคืน สั่งล่วงหน้าทาง LINE รับได้ทันทีหน้าร้าน
              หรือให้ส่งถึงบ้านในหมู่บ้าน
            </p>
          </div>

          <div className={`wm-status-card${status.open ? ' open' : ''}`}>
            {status.open ? (
              <>
                <div className="wm-status-icon">🔥</div>
                <div>
                  <div className="wm-status-title">เปิดขายวันนี้!</div>
                  <div className="wm-status-sub">สั่งได้ตั้งแต่ 10:00 น. จนกว่าของจะหมด</div>
                </div>
              </>
            ) : (
              <>
                <div className="wm-status-icon">⏳</div>
                <div>
                  <div className="wm-status-title">
                    เปิดขายอีก {status.daysLeft} วัน
                  </div>
                  <div className="wm-status-sub">พบกันวัน{status.nextDay}นี้ ห้ามพลาด!</div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Day picker */}
        <div className="day-picker">
          {WEEK_DAYS.map(w => {
            const isMenuDay = MENU_DAYS.includes(w.d)
            const isToday = w.d === today
            const isPicked = w.d === pickedDay
            return (
              <button
                key={w.d}
                className={`day-chip${isMenuDay ? ' menu-day' : ''}${isPicked ? ' picked' : ''}${isToday ? ' today' : ''}`}
                onClick={() => setPickedDay(w.d)}
              >
                <span className="day-chip-label">{w.short}</span>
                {isMenuDay && <span className="day-chip-dot" />}
                {isToday && <span className="day-chip-today">วันนี้</span>}
              </button>
            )
          })}
        </div>

        <div className="day-picker-msg">
          {pickedIsMenuDay
            ? <span className="ok">🎉 วัน{pickedInfo.full} มีขายเมนูอาหารครบทุกเมนู!</span>
            : <span className="no">😊 วัน{pickedInfo.full} ไม่มีขายเมนูอาหาร แวะซื้อของชำ/ผักสดได้ตามปกติ</span>
          }
        </div>

        {/* Menu grid */}
        <div className="menu-grid">
          {MENU_ITEMS.map((item, i) => (
            <MenuCard key={item.name} item={item} delay={i % 4} />
          ))}
        </div>

        <div className="wm-note card-pop">
          <span className="wm-note-icon">📌</span>
          <span>
            รับออเดอร์ล่วงหน้าได้ทาง LINE ตั้งแต่เย็นวันก่อนหน้า ยืนยันออเดอร์เช้าวันขาย
            เพื่อจองเมนูที่ต้องการไว้ก่อนของหมด
          </span>
        </div>
      </div>
    </section>
  )
}
