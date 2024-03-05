import "../styles/styles-contactanos-modal.css"

const ContactanosModal = () => {
  return (
    <>
        <div className="container">
            <div className="modal fade" id="modalContactanos" tabIndex="-1" aria-labelledby="modalContactanosLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="modalContactanos">Contáctanos</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="form-label">Nombre</label>
                                    <input type="text" className="form-control" id="nombre" placeholder="Tu nombre" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Tu correo electrónico" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tel" className="form-label">Teléfono</label>
                                    {/* Asegúrate de que el atributo id sea "tel" y no "el" */}
                                    <input type="tel" className="form-control" id="tel" placeholder="Tu número de teléfono" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="mensaje" className="form-label">Mensaje</label>
                                    <textarea className="form-control" id="mensaje" rows="3" placeholder="Tu mensaje"></textarea>
                                </div>
                                <p>Nos pondremos en contacto contigo. Saludos!</p>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-primary">Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ContactanosModal