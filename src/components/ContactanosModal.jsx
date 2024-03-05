import { useState } from 'react'
import "../styles/styles-contactanos-modal.css"


const ContactanosModal = () => {

    const [submitSuccess, setSubmitSuccess] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const form = event.target;
        const data = new FormData(form);
    
        const requestOptions = {
            method: 'POST',
            body: data,
        };
    
        try {
            const response = await fetch('https://formsubmit.co/torneado_automatico@hotmail.com', requestOptions);
            if (response.ok) {
                setSubmitSuccess(true); // Mostrar el mensaje de éxito
    
                // Borrar los valores del formulario
                form.reset();
    
                // Ocultar el mensaje de éxito después de 5 segundos
                setTimeout(() => {
                    setSubmitSuccess(false);
                }, 5000);
    
            } else {
                // Manejar respuesta no exitosa
                alert('Hubo un problema al enviar el formulario.');
            }
        } catch (error) {
            // Manejar errores de la petición
            console.error('Error al enviar el formulario:', error);
            alert('Error al enviar el formulario.');
        }
    };
    
    

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
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="nombre" className="form-label">Nombre</label>
                                        <input type="text" className="form-control" name="nombre" id="nombre" placeholder="Tu nombre" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="correo" className="form-label">Email</label>
                                        <input type="email" className="form-control" name="correo" id="email" placeholder="Tu correo electrónico" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="telefono" className="form-label">Teléfono</label>
                                        <input type="tel" className="form-control" name="telefono" id="tel" placeholder="Tu número de teléfono" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="mensaje" className="form-label">Mensaje</label>
                                        <textarea className="form-control" name="mensaje" id="mensaje" rows="3" placeholder="Tu mensaje" required></textarea>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                        <button type="submit" className="btn btn-primary">Enviar</button>
                                    </div>
                                    {submitSuccess && <div className="submit-success-message">Formulario enviado con éxito.</div>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactanosModal