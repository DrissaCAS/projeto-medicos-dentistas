import { Link } from "react-router-dom"
import Logo from '../../assets/logo.png'
import S from "./footer.module.scss"

function Footer() {
  return (
    <footer>
      <Link to="/" className={S.boxLogo}> 
        <img src={Logo} alt="Logo do site, coração verde" className={S.imgHeader} /> 
        <h2>Médicos & Dentistas</h2>
      </Link>
    </footer>
  )
}

export default Footer