import { FEATURES } from '../data.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import './FeaturesStrip.css'

export default function FeaturesStrip() {
  const { ref, visible } = useScrollReveal()
  return (
    <div className="feat-strip" ref={ref}>
      <div className="feat-inner wrap">
        {FEATURES.map((f, i) => (
          <div
            key={f.title}
            className={`feat-card reveal${visible ? ' visible' : ''} d${i+1}`}
          >
            <div className="feat-icon-wrap" style={{ background: f.color }}>
              {f.icon}
            </div>
            <div>
              <div className="feat-title">{f.title}</div>
              <div className="feat-desc">{f.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
