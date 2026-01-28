import { Link } from "react-router-dom"
import Logo from '../../assets/logo.png'
import S from "./header.module.scss"

function Header() {
  return (
    <header>
      <Link to="/" className={S.boxLogo}> 
        <img src={Logo} alt="Logo do site, coração verde" className={S.imgHeader} /> 
        <h2>Médicos & Dentistas</h2>
      </Link>
        
      <nav className={S.navHeader}>
        <Link to="/">Home</Link>
        <Link to="/voluntario">Seja Voluntário</Link>
      </nav>

      <nav className={S.navMobile}>
        <span className={S.barra}></span>
        <span className={S.barra}></span>
        <span className={S.barra}></span>
      </nav>
    </header>
  )
}

export default Header