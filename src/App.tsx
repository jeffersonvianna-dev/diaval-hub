import { CARDS, GROUPS } from './cards'
import type { CardGroup } from './cards'
import { Card } from './components/Card'
import { CalendarStrip } from './components/CalendarStrip'

function Section({ groupKey, title }: { groupKey: CardGroup; title: string }) {
  const cards = CARDS.filter((c) => c.group === groupKey)
  if (cards.length === 0) return null
  return (
    <section className={`c-home-section c-home-section-${groupKey}`}>
      <h2 className="c-home-section-h">{title}</h2>
      <div className="c-home-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </section>
  )
}

export function App() {
  const seduc = GROUPS.find((g) => g.key === 'seduc')!
  const dashboards = GROUPS.find((g) => g.key === 'dashboards')!
  const drive = GROUPS.find((g) => g.key === 'drive')!

  return (
    <>
      <header className="c-header">
        <div className="c-header-inner">
          <div className="c-home-logo" aria-hidden="true">SEDUC SP</div>
          <div>
            <h1>DIAVAL</h1>
            <p>Acesso rápido aos principais arquivos e painéis</p>
          </div>
        </div>
      </header>

      <main className="c-content">
        <CalendarStrip />
        <Section groupKey={drive.key} title={drive.title} />
        <div className="c-home-top-row">
          <Section groupKey={dashboards.key} title={dashboards.title} />
          <Section groupKey={seduc.key} title={seduc.title} />
        </div>
      </main>
    </>
  )
}
