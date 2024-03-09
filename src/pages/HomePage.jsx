import "../styles/styles-homepage.css"

import imagen1 from "../assets/images/maquinaria/IMG_4733.jpg"
import quienesSomosImg from "../assets/images/imagenesExtras/quienesSomos.png"
import MisionImg from "../assets/images/imagenesExtras/MisionImg.png"
import VisionImg from "../assets/images/imagenesExtras/VisionImg.png"


const HomePage = () => {
  return (
    <>
      <main>
        <section className="row">
          <div className="col-12 col-md-6 div-izquierda">
            <img className="img-fluid" src={imagen1} alt="FotoTorno" />
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mt-2 mt-md-0 div-derecha text-center">
            <div className="d-block">
            <h1 className="text-white TitletxtHomePage">Torneado Automático Manuel Franco</h1>
            <h1 className="text-white TitletxtHomePage">Eficiencia, Precisión, Calidad</h1>
            </div>
          </div>
        </section>
      <br />
        <section className="container mt-5 sectionSobreNosotros">
          <h2 className="text-center titleSobreNosotros">Sobre Nosotros</h2>
          <div className="row align-items-center ">
            <div className="col-lg-6 mb-3 mb-lg-0 d-flex justify-content-center">
              <img src={quienesSomosImg} className="img-fluid" alt="Quiénes Somos" />
            </div>
            <div className="col-lg-6">
              <h4>¿Quiénes Somos?</h4>
              <p>Somos una empresa dedicada a la producción de partes torneadas, con un arraigo en la tradición y la excelencia que se remonta a nuestra fundación en 1993. Establecidos en Tlalnepantla de Baz, Estado de México, hemos crecido para ser un referente en la manufactura de precisión.</p>
            </div>
          </div>
          <div className="row align-items-center my-5 flex-lg-row-reverse">
            <div className="col-lg-6 mb-3 mb-lg-0 d-flex justify-content-center">
              <img src={MisionImg} className="img-fluid" alt="Misión" />
            </div>
            <div className="col-lg-6">
              <h4>Misión</h4>
              <p>Nuestra misión es satisfacer las necesidades de nuestros clientes proporcionándoles servicios de la más alta calidad. Nos apoyamos en la tecnología más avanzada para garantizar productos sin defectos.</p>
            </div>
          </div>
          <div className="row align-items-center my-5">
            <div className="col-lg-6 mb-3 mb-lg-0 d-flex justify-content-center">
              <img src={VisionImg} className="img-fluid" alt="Visión" />
            </div>
            <div className="col-lg-6">
              <h4>Visión</h4>
              <p>Ser reconocidos a nivel global como pioneros en la manufactura de precisión, ampliando las fronteras de la ingeniería con innovaciones que definan el estándar de la industria.</p>
            </div>
          </div>
        </section>
        <br />
        <section className="row sectionUbicacion">
            <h2 className="text-center titleUbicacion">Ubicación</h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d939.8840566662465!2d-99.1715899!3d19.5615147!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f79cff7b6517%3A0x6ac95f1189f28392!2sTorneado%20autom%C3%A1tico%20manuel%20franco!5e0!3m2!1ses!2smx!4v1707268236073!5m2!1ses!2smx"
                width="600"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </section>
      
      </main>
    </>
  )
}

export default HomePage