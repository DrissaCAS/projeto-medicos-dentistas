
import S from './cardImpacto.module.scss'

const cardImpacto = () => {
    return (
        <div className={S.cardImpacto}>
            <div className={S.impactoCards}>
                <article className={S.impactoCard}>
                    <h2>2,500+</h2>
                    <p>Pessoas Atendidas</p>
                </article>
    
                <article className={S.impactoCard}>
                    <h2>150+</h2>
                    <p>Profissionais Voluntários</p>
                </article>
    
                <article className={S.impactoCard}>
                    <h2>98%</h2>
                    <p>Satisfação dos Pacientes</p>
                </article>
    
                <article className={S.impactoCard}>
                    <h2>5+</h2>
                    <p>Anos de Dedicação</p>
                </article>
            </div>
        </div>
    )
}

export default cardImpacto