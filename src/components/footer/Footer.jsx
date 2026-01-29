import { Link } from "react-router-dom"
import Logo from '../../assets/logo.png'
import S from "./footer.module.scss"

import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";

import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

function Footer() {
  return (
    <footer>
      <article className={S.menuFooter}>
        <div className={S.footer-1}>
          <Link to="/" className={S.boxLogo}> 
            <img src={Logo} alt="Logo do site, coração verde" className={S.imgHeader} /> 
            <h2>Médicos & Dentistas</h2>
          </Link>
          <p>Saúde e cuidado sem barreiras para toda comunidade.</p>
        </div>

        <div className={S.footer-2}>
          <h4>Contato</h4>
          <a href="mailt">
            <MdOutlineEmail />
            <p>contato@medico-dentista.org</p>
          </a>
          <a>
            <FiPhone />
            <p>(11) 3000-0000</p>
          </a>
          <a href="https://maps.app.goo.gl/H2PrC9sK1kTT11hp9" target="_blank">
            <CiLocationOn />
            <p>São Paulo, Brasil</p>
          </a>
        </div>

        <div className={S.footer-3}>
          <h4>Redes Sociais</h4>
          <a href="https://www.facebook.com/drissa.designergrafico/" target="_blank">
            <CiFacebook /> 
            <p>Facebook</p>
          </a>
          <a href="https://www.instagram.com/drissadesign/" target="_blank">
            <CiInstagram /> 
            <p>Instagram</p>
          </a>
          <a href="https://www.linkedin.com/in/drissacas/" target="_blank">
            <CiLinkedin /> 
            <p>LinkedIn</p>
          </a>
        </div>
      </article>

      <article className={S.textFooter}>
        <p className={S.textFoot}>© 2026 Vai na Web & Empower. Por <a href="https://drissacas.github.io/Drissa/" target="_blank">Drissa CAS</a>. Todos os direitos reservados. Projeto destinado exclusivamente a fins educativos.</p>
      </article>

    </footer>
  )
}

export default Footer