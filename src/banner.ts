export interface Banner {
  icon: string
  /** Linhas do banner — primeira recebe destaque, demais ficam mais discretas. */
  lines: string[]
}

/**
 * Mensagem informativa exibida abaixo de "Próximas avaliações".
 * Trocar conteúdo aqui quando a mensagem da semana mudar.
 */
export const BANNER: Banner = {
  icon: '💡',
  lines: [
    'Acesse os resultados da Prova Paulista no BI — Escola Total! Definam as suas prioridades e o seu plano de ação.',
    'Lembre-se: aprendizagens não consolidadas vão impactar negativamente os resultados do SARESP no final do ano.',
  ],
}
