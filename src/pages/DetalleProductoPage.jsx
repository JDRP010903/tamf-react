import "../styles/styles-detalle-producto.css"

import imagen1 from "../assets/images/maquinaria/tornoMiyano.jpg"
import imagen2 from "../assets/images/maquinaria/IMG_483001.jpg"
import imagen3 from "../assets/images/maquinaria/IMG_47530101.jpg"
import imagen4 from "../assets/images/maquinaria/TORNO_REVOLVER.jpg"
import imagen5 from "../assets/images/maquinaria/tornoParalelo.jpg"
import imagen6 from "../assets/images/maquinaria/tornoParalelo30.jpg"

const DetalleProductoPage = () => {
  return (
    <>
      <main>
        <section className="row col d-block mt-2 mt-md-0 text-center containerTitleTxtDetalleProductoPage text-center mb-4">
            <h1 className="TitletxtDetalleProductoPage">DETALLE DE PRODUCTO</h1>
            <p className="ParrafoHeroTxtDetalleProductoPage">Tú lo imaginas, nosotros lo hacemos realidad</p>
        </section>

        <section className="row mt-2 text-center">
          <p>Se pueden fabricar de 5,000 a 100,000 piezas mensuales según su complejidad o procesos.</p>
        </section>

        <section className="row mt-3">
            <h4 className="text-center">Capacidad de Maquinaria</h4>
            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="card mx-auto" style={{ width: '18rem' }}>
                    <img src={imagen1} className="card-img-top imagenMaquinariaDetalleProductoPage" alt="Torno Miyano" />
                    <div className="card-body">
                      <h5 className="card-title">1 Torno CNC Miyano</h5>
                      <p className="card-text">7bc, 2” de paso de barra, 9” en Z y 10” de volteo.</p>
                      <p className="card-text">Tolerancia: + - 0.025 mm</p>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="card mx-auto" style={{ width: '18rem' }}>
                    <img src={imagen2} className="card-img-top imagenMaquinariaDetalleProductoPage" alt="Fresadora CNC" />
                    <div className="card-body">
                      <h5 className="card-title">Fresadora CNC</h5>
                      <p className="card-text">X 32”, Y 12” y Z 6”.</p>
                      <p className="card-text">Tolerancia: + - 0.025 mm</p>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="card mx-auto" style={{ width: '18rem' }}>
                    <img src={imagen3} alt="Torno Automático" className="card-img-top imagenMaquinariaDetalleProductoPage" />
                    <div className="card-body">
                      <h5 className="card-title">Torno Automático, Traub</h5>
                      <p className="card-text">5/8” hasta 1 ¼“ de diámetro de paso de barra.</p>
                      <p className="card-text">Tolerancia: + - 0.075 mm</p>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="card mx-auto" style={{ width: '18rem' }}>
                    <img src={imagen4} alt="Torno Revolver" className="card-img-top imagenMaquinariaDetalleProductoPage" />
                    <div className="card-body">
                      <h5 className="card-title">Torno Revolver</h5>
                      <p className="card-text">1 ½” de diámetro de paso de barra.</p>
                      <p className="card-text">Tolerancia: + - 0.075 mm</p>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="card mx-auto" style={{ width: '18rem' }}>
                    <img src={imagen5} className="card-img-top imagenMaquinariaDetalleProductoPage" alt="Torno Paralelo" />
                    <div className="card-body">
                      <h5 className="card-title">Torno paralelo de 8” de volteo</h5>
                      <p className="card-text">750 mm entre puntos.</p>
                      <p className="card-text">Tolerancia: + - 0.075 mm</p>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="card mx-auto" style={{ width: '18rem' }}>
                    <img src={imagen6} className="card-img-top imagenMaquinariaDetalleProductoPage" alt="Torno Paralelo Grande" />
                    <div className="card-body">
                      <h5 className="card-title">Torno paralelo de 30 de volteo”</h5>
                      <p className="card-text">2” de paso de barra, 9” en Z y 10” de volteo.</p>
                      <p className="card-text">Tolerancia: + - 0.15 mm</p>
                    </div>
                  </div>
                </div>

              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </section>

          <section className="row mt-5 contenedorCardsDetalleProductoPage">
            <h4 className="text-center">Materiales</h4>
            <div className="row row-cols-1 row-cols-md-3 g-3 mt-0">
              <div className="col">
                <div className="card h-100">
                  <img src="https://www.aceromafe.com/wp-content/uploads/2022/03/Redondo-12L14.jpg" className="card-img-top" alt="Acero 12L14" />
                  <div className="card-body">
                    <h5 className="card-title">Acero 12L14</h5>
                    <p className="card-text">Breve descripción</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src="https://inoxidablesvictoria.com/wp-content/uploads/2023/02/tubos-de-acero-al-carbon-estructural-y-mecanicos.jpg" className="card-img-top" alt="Acero al carbón" />
                  <div className="card-body">
                    <h5 className="card-title">Acero al carbón</h5>
                    <p className="card-text">1018, 1045, 4140, 4140 tratado, A36</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src="https://metalcast.com.mx/wp-content/uploads/2020/12/Aceros-inoxidables_Mesa-de-trabajo-1-1024x768.png" className="card-img-top" alt="Aceros Inoxidables" />
                  <div className="card-body">
                    <h5 className="card-title">Aceros Inoxidables</h5>
                    <p className="card-text">Tipo 303, 304, 316</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src="https://i0.wp.com/cameisa.com/wp-content/uploads/2021/02/cropped-producto_4-1.jpg?resize=940%2C940&ssl=1" className="card-img-top" alt="Plásticos de ingeniería" />
                  <div className="card-body">
                    <h5 className="card-title">Plásticos de ingeniería</h5>
                    <p className="card-text">Breve descripción</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src="https://insul-therm.mx/insul/wp-content/uploads/2021/09/ROLLO-ALUMINIO.png" className="card-img-top" alt="Aluminio" />
                  <div className="card-body">
                    <h5 className="card-title">Aluminio</h5>
                    <p className="card-text">Breve descripción</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src="https://www.mecanizadossinc.com/recurso/noticia/mecanizado_del_laton_propiedades_tipos_y_aplicaciones_okmaq3po9qoshc24sgip38tcwmaly86ueo0p7m6il0.jpg" className="card-img-top" alt="Latón" />
                  <div className="card-body">
                    <h5 className="card-title">Latón</h5>
                    <p className="card-text">Breve descripción</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src="https://static1.s123-cdn-static-a.com/uploads/4735132/2000_5ff61fb64119d.jpg" className="card-img-top" alt="Bronce" />
                  <div className="card-body">
                    <h5 className="card-title">Bronce</h5>
                    <p className="card-text">Breve descripción</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

      </main>
    </>
  )
}

export default DetalleProductoPage