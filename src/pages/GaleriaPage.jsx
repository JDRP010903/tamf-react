import "../styles/styles-galeria.css"

import piezas1 from "../assets/images/imagenesTrabajadas/Piezas_01.jpg";
import piezas2 from "../assets/images/imagenesTrabajadas/Piezas_02.jpg";
import piezas3 from "../assets/images/imagenesTrabajadas/Piezas_03.jpg";
import piezas4 from "../assets/images/imagenesTrabajadas/Piezas_04.jpg";
import piezas5 from "../assets/images/imagenesTrabajadas/Piezas_05.jpg";
import piezas6 from "../assets/images/imagenesTrabajadas/Piezas_06.jpg";
import piezas7 from "../assets/images/imagenesTrabajadas/Piezas_07.jpg";
import piezas8 from "../assets/images/imagenesTrabajadas/Piezas_08.jpg";
import piezas9 from "../assets/images/imagenesTrabajadas/Piezas_09.jpg";
import piezas10 from "../assets/images/imagenesTrabajadas/Piezas_10.jpg";

const GaleriaPage = () => {
  return (
    <>
      <main>
        <section className="row col d-block mt-2 mt-md-0 text-center containerTitleTxtGaleriaPage text-center mb-4">
            <h1 className="TitletxtGaleriaPage">GALERÍA</h1>
            <p className="ParrafoHeroTxtGaleriaPage">Productos calidad y alta precisión</p>
        </section>

        <section className="row SeccionImagenesGaleriaPage">
          <div className="col-12 col-md-6 g-1">
            <img src={piezas1} alt="Piezas" />
            <img src={piezas2} alt="Piezas" />
            <img src={piezas3} alt="Piezas" />
            <img src={piezas4} alt="Piezas" />
            <img src={piezas5} alt="Piezas" />
          </div>
          <div className="col-12 col-md-6 g-1">
            <img src={piezas6} alt="Piezas" />
            <img src={piezas7} alt="Piezas" />
            <img src={piezas8} alt="Piezas" />
            <img src={piezas9} alt="Piezas" />
            <img src={piezas10} alt="Piezas" />
          </div>
        </section>
      </main>
    </>
  )
}

export default GaleriaPage