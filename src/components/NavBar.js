const NavBar = () => { 
    return (
        <>
        <nav className="header navbar navbar-expand-lg bg-light">
          <div className="header__contenedor container-fluid justify-content-evenly">
            <nav className="header__nav navbar navbar-light pt-1">
              <div className="header__logo container">
                <a className="navbar-brand" href="./index.html">
                  <img src="./logo.png" alt="Imagen Logo RM Sistemas Informaticos" width="180" height="180" /></a>
              </div>
            </nav>
            <button className="header__button navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav align-items-between me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="header__link nav-link" aria-current="page" href="../index.html">Inicio</a>
                </li>
                <li id="admMenu" className="nav-item dropdown">
                  <a className="header__link nav-link dropdown-toggle" href="#top" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">Admin</a>
                  <ul className="adm dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a className="header__link nav-link" href="#top">Inventario</a>
                    </li>
                    <li>
                      <a className="header__link nav-link" href="#top">Usuarios</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="header__link nav-link" href="#top">Tienda</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
}

export default NavBar;