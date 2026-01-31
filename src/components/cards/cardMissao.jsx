import S from './cardMissao.module.scss'

const cardMissao = () => {
    return (
        <div className={S.missaoCards}>
            <article className={S.missaoCard}>
                <h3>Acesso Equitativo</h3>
                <p> Garantir que todos tenham acesso a cuidados de saúde de qualidade, independentemente de sua condição financeira.</p>
            </article>

            <article className={S.missaoCard}>
                <h3>Comunidade Forte</h3>
                <p>Construir uma rede de profissionais de saúde dedicados a servir com compaixão e profissionalismo.</p>
            </article>

            <article className={S.missaoCard}>
                <h3>Acesso Equitativo</h3>
                <p>Oferecer atendimento integral em medicina geral e odontologia para melhorar a qualidade de vida.</p>
            </article>
        </div>
    )
}

export default cardMissao