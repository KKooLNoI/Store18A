import { useState, useEffect } from 'react'
import './FloatingBtn.css'

export default function FloatingBtn() {
  const [show, setShow] = useState(false)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 300)
      setShowTop(window.scrollY > 600)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* LINE button */}
      <a
        href="https://lin.ee/xj7q0Ih"
        target="_blank"
        rel="noreferrer"
        className={`fab-line${show ? ' visible' : ''}`}
        aria-label="ติดต่อ LINE"
      >
        <span className="fab-icon">💬</span>
        <span className="fab-label">LINE</span>
      </a>

      {/* Scroll to top */}
      <button
        className={`fab-top${showTop ? ' visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="กลับด้านบน"
      >↑</button>
    </>
  )
}
