import { useState, useEffect } from 'react'
import './Navbar.css'

const LINKS = [
  { href:'#home',    label:'หน้าแรก' },
  { href:'#menu',    label:'🍛 เมนูอาหาร' },
  { href:'#store',   label:'ร้านของชำ' },
  { href:'#veggie',  label:'สวนยายศรี' },
  { href:'#contact', label:'📱 ติดต่อเรา', cta:true },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active,   setActive]   = useState('home')
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const ids = ['home','menu','store','veggie','contact']
      let cur = 'home'
      ids.forEach(id => {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) cur = id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll, { passive:true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <a href="#home" className="nav-logo">
          <div className="nav-logo-icon">🏪</div>
          <div className="nav-logo-text">
            <span>ร้านค้าซอย 18A</span>
            <span className="nav-logo-sub">& สวนยายศรี</span>
          </div>
        </a>

        <ul className="nav-links">
          {LINKS.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`nav-link${l.cta ? ' nav-cta' : ''}${active === l.href.slice(1) ? ' active' : ''}`}
              >{l.label}</a>
            </li>
          ))}
        </ul>

        <button
          className={`hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-label="เมนู"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`drawer-overlay${open ? ' open' : ''}`} onClick={() => setOpen(false)} />
      <aside className={`side-drawer${open ? ' open' : ''}`}>
        <div className="drawer-head">
          <div className="drawer-logo">
            <div className="drawer-logo-icon">🏪</div>
            <span>ร้านค้าซอย 18A</span>
          </div>
          <button className="drawer-close" onClick={() => setOpen(false)}>✕</button>
        </div>
        <nav className="drawer-nav">
          {LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={l.cta ? 'drawer-cta' : ''}
              onClick={() => setOpen(false)}
            >{l.label}</a>
          ))}
        </nav>
      </aside>
    </>
  )
}
