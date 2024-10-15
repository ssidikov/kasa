import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.svg'

function Header() {
  return (
    <header className='header'>
      <div className='header-logo'>
        <Link to='/'>
          <img src={Logo} alt='Kasa' className='header-logo__img' />
        </Link>
      </div>
      <nav className='header-nav'>
        <ul>
          <li>
            <Link to='/'>Accueil</Link>
          </li>
          <li>
            <Link to='/about'>À propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
