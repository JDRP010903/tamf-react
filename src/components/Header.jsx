import { Link, NavLink } from 'react-router-dom';
import "../styles/styles-header.css"
import logo2 from "../assets/images/logo/logo2.jpg"

const Header = () => {
  return (
    <>
      <header className='mb-5'>
        <div className="container-fluid">
          <section className="row d-flex justify-content-around align-items-center">
            <section className="col">
              <nav className="navbar navbar-custom" data-bs-theme="dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/servicios">Servicios</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/galeria">Galería</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/detalleproducto">Detalle de Producto</NavLink>
                            </li>
                            <li className="nav-item">
                              <button className="nav-link btn btn-link" data-bs-toggle="modal" data-bs-target="#modalContactanos">Contáctanos</button>
                            </li>
                        </ul>
                    </div>
                </div>
              </nav>
            </section>
            <section className="col d-flex justify-content-end align-items-center">
              <Link to="/" className="aLogoImg">
                  <img className="img-fluid logoImg" src={logo2} alt="Logo" />
              </Link>
            </section>
          </section>
        </div>
      </header>
    </>
  )
}

export default Header