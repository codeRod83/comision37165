import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => { 
    return (
        <>
        <nav className="header navbar navbar-expand-lg bg-light">
          <div className="header__contenedor container-fluid justify-content-evenly">
            <nav className="header__nav navbar navbar-light pt-1">
              <div className="header__logo container">
                  <Link className="navbar-brand" to={'/'}>
                    <img src="./logo.png" alt="Imagen Logo RM Sistemas Informaticos" width="170" height="170" />
                  </Link>
              </div>
            </nav>
            <button className="header__button navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse mx-4" id="navbarSupportedContent">
              <ul className="navbar-nav align-items-between me-auto mb-2 mb-lg-0">
                <li>
                  <NavLink className="header__link nav-link" to={'/categoria/Discos Duros'}>
                    Discos Duros
                  </NavLink>
                </li>
                <li>
                  <NavLink className="header__link nav-link" to={'/categoria/Mouse'}>
                    Mouse
                  </NavLink>
                </li>
                <li>
                  <NavLink className="header__link nav-link" to={'/categoria/Monitores'}>
                    Monitores
                  </NavLink>
                </li>
                <li>
                  <NavLink className="header__link nav-link" to={'/categoria/Laptops'}>
                    Laptops
                  </NavLink>
                </li>
                <li id="admMenu" className="nav-item dropdown">
                  <a className="header__link nav-link dropdown-toggle disabled" href="#top" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">Categorias</a>
                  <ul className="adm dropdown-menu" aria-labelledby="navbarDropdown">
                    {/* <li>
                      <Link
                        className="header__link nav-link"
                        to={'/categoria/:id'}>
                        Disco Duro
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="header__link nav-link"
                        to={'/categoria/:id'}>
                        Mouse
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="header__link nav-link"
                        to={'/categoria/:id'}>
                        Monitores
                      </Link>
                    </li>
                    <li>
                    <Link
                        className="header__link nav-link"
                        to={'/categoria/:id'}>
                        Laptops
                      </Link>
                    </li> */}
                  </ul>
                </li>
              </ul>
            </div>
            <div className="header__carrito mx-5">
            <CartWidget />
            </div>
          </div></nav>
      </>
  )
}

export default NavBar;