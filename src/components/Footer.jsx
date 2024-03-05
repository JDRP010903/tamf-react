import "../styles/styles-footer.css"

const Footer = () => {
  return (
    <>
        <footer className="bg-dark text-white pt-4 pb-4 mt-4 mb-0">
            <div className="container text-center text-md-left">
                <div className="row">
                <div className="col-12 mb-3">
                    <h5>Contacto</h5>
                    <a href="https://maps.app.goo.gl/ZxtANwH9DWYxWdKP6" target="_blank" rel="noopener noreferrer" className="text-white m-2">
                      <box-icon name='map' type='solid' color='#F0F0F0' size="md"></box-icon>
                    </a>
                    <a href="tel:+525523507968" target="_blank" className="text-white m-2">
                      <box-icon name='phone' type='solid' color='#F0F0F0' size="md"></box-icon>
                    </a>
                    <a href="mailto:torneado_automatico@hotmail.com" target="_blank" rel="noopener noreferrer" className="text-white m-2">
                      <box-icon name='envelope' type='solid' color='#F0F0F0' size="md"></box-icon>
                    </a>
                    <a href="https://wa.me/525523507968?text=Hola%20me%20gustaría%20saber%20más%20sobre..." target="_blank" rel="noopener noreferrer" className="text-white m-2">
                      <box-icon name='whatsapp-square' type='logo' color='#f0f0f0' size="md"></box-icon>
                    </a>
                    <a href="https://www.facebook.com/ta.mfr?locale=es_LA" target="_blank" rel="noopener noreferrer" className="text-white m-2">
                      <box-icon name='facebook-square' type='logo' color='#F0F0F0' size="md"></box-icon>
                    </a>
                    <a href="https://www.instagram.com/torneadoautomatico" target="_blank" rel="noopener noreferrer" className="text-white m-2">
                      <box-icon name='instagram' type='logo' color='#F0F0F0' size="md"></box-icon>
                    </a>
                    <a href="https://www.tiktok.com/@torneadoautomaticomf" target="_blank" rel="noopener noreferrer" className="text-white m-2">
                      <box-icon name='tiktok' type='logo' color='#F0F0F0' size="md"></box-icon>
                    </a>
                </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer