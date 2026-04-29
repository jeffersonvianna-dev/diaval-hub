import { BANNER } from '../banner'

export function Banner() {
  if (BANNER.lines.length === 0) return null
  return (
    <aside className="c-home-banner" role="note">
      <span className="c-home-banner-icon" aria-hidden="true">{BANNER.icon}</span>
      <div className="c-home-banner-body">
        {BANNER.lines.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </aside>
  )
}
