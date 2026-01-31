import S from './cardVoluntario.module.scss'

const cardVoluntario = () => {
  return (
    <section className={S.voluntarioCards}>
        <article className={S.voluntarioCard}>
            <h3>Impacto Direto</h3>
            <p>Sua dedicação salva vidas e transforma comunidades</p>
        </article>
        <article className={S.voluntarioCard}>
            <h3>Crescimento Pessoal</h3>
            <p>Desenvolva habilidades e cresça profissionalmente</p>
        </article>
        <article className={S.voluntarioCard}>
            <h3>Comunidade</h3>
            <p>Faça parte de uma rede de profissionais comprometidos</p>
        </article>
    </section>
  )
}

export default cardVoluntario