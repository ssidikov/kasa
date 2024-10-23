import { NavLink } from 'react-router-dom'
import Logo from '../../assets/Logo.svg'

function Header() {
  return (
    <header className='header'>
      <div className='header-logo'>
        <NavLink to='/'>
          <img src={Logo} alt='Kasa' className='header-logo__img' />
        </NavLink>
      </div>
      <nav className='header-nav'>
        <ul>
          <li>
            <NavLink to='/' activeClassName='active-link'>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to='/About' activeClassName='active-link'>
              À propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
