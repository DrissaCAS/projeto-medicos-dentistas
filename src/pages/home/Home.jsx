import { Link } from "react-router-dom"
import S from "./home.module.scss"
import Doctor from "../../assets/doctor.png"
import Icone from "../../assets/icon_estetoscopio.png"
import CardMissao from "../../components/cards/cardMissao"
import CardImpacto from "../../components/cards/cardImpacto";

export default function Home() {
  return (
    <main>
        <section className={S.hero}>
          <article className={S.heroTitle}>
            <div className={S.label}>
              <img src={Icone} alt="Icone do Estetoscópio" />
              <p>Saúde para todos</p>
            </div>
            
            <h1>Saúde e cuidado sem barreiras</h1>
            <p>Um projeto dedicado a oferecer atendimento médico e odontológico gratuito para pessoas que mais precisam na nossa comunidade.</p>

            <div className={S.buttonsHome}>
              <Link to={'/voluntario'} className={S.btn1}>Seja Voluntário</Link>
              <Link to={'/'} className={S.btn2}>Como Ajudar</Link>
            </div>
          </article>
          <article>
            <img src={Doctor} alt="Photo ilustrativa de um mádico." className={S.imgDoctor} />
          </article>
        </section>

        <section className={S.missao}>
          <article className={S.containerMissao}>
            <h2>Nossa Missão</h2>
            <p>Transformar vidas através do acesso universal a saúde de qualidade</p>

            <CardMissao />
          </article>
        </section>

        <section className={S.impacto}>
          <article className={S.containerImpacto}>
            <h2>Nosso Impacto</h2>
            <p>Transformando a saúde de nossa comunidade, um paciente de cada vez</p>

            <CardImpacto />
          </article>
        </section>
    </main>
  )
}
