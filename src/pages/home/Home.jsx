import { Link } from "react-router-dom"
import S from "./home.module.scss"
import Doctor from "../../assets/doctor.png"
import Icone from "../../assets/icon_estetoscopio.png"

export default function Home() {
  return (
    <main>
        <section className={S.section1}>
          <article>
            <div className={S.label}>
              <img src={Icone} alt="Icone do Estetoscópio" />
              <p>Saúde para todos</p>
            </div>
            
            <h1>Saúde e cuidado sem barreiras</h1>
            <p>Um projeto dedicado a oferecer atendimento médico e odontológico gratuito para pessoas que mais precisam na nossa comunidade.</p>

            <div className={S.buttonsHome}>
              <Link to={'/voluntario'}>Seja Voluntário</Link>
              <Link to={'/'}>Como Ajudar</Link>
            </div>
          </article>
          <article>
            <img src={Doctor} alt="Photo ilustrativa de um mádico." />
          </article>
        </section>

        <section className={S.section2}>

        </section>

        <section className={S.section3}>

        </section>
    </main>
  )
}
