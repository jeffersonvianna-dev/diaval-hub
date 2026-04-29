import type { SystemCard } from '../cards'

interface Props {
  card: SystemCard
}

export function Card({ card }: Props) {
  return (
    <a
      className="c-home-card"
      href={card.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Abrir ${card.label} em nova aba`}
      title={card.description}
    >
      <span className="c-home-card-icon" aria-hidden="true">
        {card.icon}
      </span>
      <span className="c-home-card-title">{card.label}</span>
    </a>
  )
}
