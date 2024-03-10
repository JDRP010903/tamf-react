import "../styles/styles-servicios.css"

import tuercaHexagonal from "../assets/images/servicios/01_TUERCA_HEXAGONAL.jpg"
import tuercaLaton from "../assets/images/servicios/02_TUERCA_LATON.jpg"
import bujeRoscado from "../assets/images/servicios/03_BUJE_ROSCADO.jpg"
import conectorBullet from "../assets/images/servicios/04_CONECTOR_TIPO_BULLET.jpg"
import reduccion from "../assets/images/servicios/05_REDUCCION.jpg"
import inserto from "../assets/images/servicios/06_INSERTO.jpg"
import insertoM from "../assets/images/servicios/07_INSERTO_M12.jpg"
import piezaCentar from "../assets/images/servicios/08_PIEZA_PARA_CENTRAR.jpg"
import opresorPerno from "../assets/images/servicios/09_OPRESOR_PARA_PERNO_INTERIOR.jpg"
import pataAluminio from "../assets/images/servicios/10_PATA_DE_ALUMINIO.jpg"
import posteAluminio from "../assets/images/servicios/11_POSTE_DE_ALUMINIO.jpg"
import buje from "../assets/images/servicios/12_BUJE.jpg"


const ServiciosPage = () => {
    return (
    <>
        <main>
            <div className="row d-block mx-auto my-auto mt-2 mt-md-0 text-center mb-4 containerTitleTxtServiciosPage">
                <div className="col">
                    <h1 className="d-block TitleTxtServiciosPage">NUESTROS SERVICIOS</h1>
                    <p className="d-block ParrafoHeroTxtServiciosPage">La satisfacción del cliente es prioridad</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-6 col-xl-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">Tuerca Hexagonal</h5>
                        </div>
                        <img src={tuercaHexagonal} className="card-img-top" alt="Imagen Servicio 1" />
                        <div className="card-text m-2 d-flex justify-content-center">
                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalContactanos">Cotizar</button>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-6 col-xl-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">Tuerca Latón</h5>
                        </div>
                        <img src={tuercaLaton} className="card-img-top" alt="Imagen Servicio 1" />
                        <div className="card-text m-2 d-flex justify-content-center">
                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalContactanos">Cotizar</button>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-6 col-xl-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">Buje Roscado</h5>
                        </div>
                        <img src={bujeRoscado} className="card-img-top" alt="Imagen Servicio 1" />
                        <div className="card-text m-2 d-flex justify-content-center">
                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalContactanos">Cotizar</button>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-6 col-xl-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">Conector Tipo Bullet</h5>
                        </div>
                        <img src={conectorBullet} className="card-img-top" alt="Imagen Servicio 1" />
                        <div className="card-text m-2 d-flex justify-content-center">
                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalContactanos">Cotizar</button>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-6 col-xl-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">Reducción</h5>
                        </div>
                        <img src={reduccion} className="card-img-top" alt="Imagen Servicio 1" />
                        <div className="card-text m-2 d-flex justify-content-center">
                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalContactanos">Cotizar</button>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-6 col-xl-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">Inserto</h5>
                        </div>
                        <img src={inserto} className="card-img-top" alt="Imagen Servicio 1" />
                        <div className="card-text m-2 d-flex justify-content-center">
                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalContactanos">Cotizar</button>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-6 col-xl-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">Inserto</h5>
                        </div>
                        <img src={insertoM} className="card-img-top" alt="Imagen Servicio 1" />
                        <div className="card-text m-2 d-flex justify-content-center">
                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalContactanos">Cotizar</button>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-6 col-xl-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">Pieza Para Centrar</h5>
                        </div>
                        <img src={piezaCentar} className="card-img-top" alt="Imagen Servicio 1" />
                        <div className="card-text m-2 d-flex justify-content-center">
                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalContactanos">Cotizar</button>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-6 col-xl-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">Opresor Para Perno Interior</h5>
                        </div>
                        <img src={opresorPerno} className="card-img-top" alt="Imagen Servicio 1" />
                        <div className="card-text m-2 d-flex justify-content-center">
                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalContactanos">Cotizar</button>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-6 col-xl-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">Pata De Aluminio</h5>
                        </div>
                        <img src={pataAluminio} className="card-img-top" alt="Imagen Servicio 1" />
                        <div className="card-text m-2 d-flex justify-content-center">
                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalContactanos">Cotizar</button>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-6 col-xl-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">Poste De Aluminio</h5>
                        </div>
                        <img src={posteAluminio} className="card-img-top" alt="Imagen Servicio 1" />
                        <div className="card-text m-2 d-flex justify-content-center">
                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalContactanos">Cotizar</button>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-6 col-xl-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">Buje</h5>
                        </div>
                        <img src={buje} className="card-img-top" alt="Imagen Servicio 1" />
                        <div className="card-text m-2 d-flex justify-content-center">
                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalContactanos">Cotizar</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
    )
}

export default ServiciosPage