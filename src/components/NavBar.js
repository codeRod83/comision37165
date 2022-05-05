import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => { 
    return (
        <>
        <nav className="header__navbar navbar navbar-expand-md navbar-light bg-light">
          <div className="container-fluid justify-content-evenly">
            <nav className="header__nav navbar navbar-light pt-1">
              <div className="header__logo container">
                  <Link className="navbar-brand" to={'/'}>
                    <img src="./logo.png" alt="Imagen Logo RM Sistemas Informaticos" width="170" height="170" />
                  </Link>
              </div>
            </nav>
            <button type="button" className="header__button navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="header__links collapse navbar-collapse mx-4" id="navbarSupportedContent">
              <ul className="navbar-nav align-items-between me-auto mb-2 mb-lg-0">
                <li>
                  <NavLink className="header__link px-2 py-2" to={'/categoria/Discos Duros'}>
                    Discos Duros
                  </NavLink>
                </li>
                <li>
                  <NavLink className="header__link px-2 py-2" to={'/categoria/Mouse'}>
                    Mouse
                  </NavLink>
                </li>
                <li>
                  <NavLink className="header__link px-2 py-2" to={'/categoria/Monitores'}>
                    Monitores
                  </NavLink>
                </li>
                <li>
                  <NavLink className="header__link px-2 py-2" to={'/categoria/Laptops'}>
                    Laptops
                  </NavLink>
                </li>
                <div id='adm'>

                </div>
                {/* <li id="admMenu" className="nav-item dropdown">
                  <a className="header__link px-2 py-2 nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">Categorias</a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <NavLink
                        className="dropdown-item header__link nav-link"
                        to={'/categoria/:id'}>
                        Disco Duro
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item header__link nav-link"
                        to={'/categoria/:id'}>
                        Mouse
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item header__link nav-link"
                        to={'/categoria/:id'}>
                        Monitores
                      </NavLink>
                    </li>
                    <li>
                    <NavLink
                        className="dropdown-item header__link nav-link"
                        to={'/categoria/:id'}>
                        Laptops
                      </NavLink>
                    </li>
                  </ul>
                </li> */}
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