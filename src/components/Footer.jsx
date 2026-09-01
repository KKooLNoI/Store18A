import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-brand-icon">🏪</div>
            <div>
              <div className="footer-brand-name">ร้านค้าซอย 18A</div>
              <div className="footer-brand-sub">& สวนยายศรี — สดทุกวัน ใกล้บ้านคุณ</div>
            </div>
          </div>
          <div className="footer-links">
            <a href="#home">หน้าแรก</a>
            <a href="#menu">เมนูอาหาร</a>
            <a href="#store">ร้านของชำ</a>
            <a href="#veggie">สวนยายศรี</a>
            <a href="#contact">ติดต่อเรา</a>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-copy">© 2567 ร้านค้าซอย 18A · ออกแบบด้วยความรักต่อชุมชน 💚</div>
          <div className="footer-contact">
            <span>📞 061-785-6138</span>
            <span>⏰ 05:00–19:00 น. ทุกวัน</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
