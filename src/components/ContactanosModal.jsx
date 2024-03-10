import { useState } from 'react'
import "../styles/styles-contactanos-modal.css"


const ContactanosModal = () => {

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [errores, setErrores] = useState({});
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChangeNombre = (e) => {
        setNombre(e.target.value);
        // Restablecer el mensaje de error para el campo 'nombre' si es necesario
        if (errores.nombre) {
            setErrores(prev => ({ ...prev, nombre: '' }));
        }
    };

    const handleChangeCorreo = (e) => {
        setCorreo(e.target.value);
        // Restablecer el mensaje de error para el campo 'nombre' si es necesario
        if (errores.correo) {
            setErrores(prev => ({ ...prev, correo: '' }));
        }
    };

    const handleChangeTelefono = (e) => {
        setTelefono(e.target.value);
        // Restablecer el mensaje de error para el campo 'nombre' si es necesario
        if (errores.telefono) {
            setErrores(prev => ({ ...prev, telefono: '' }));
        }
    };
    
    const handleChangeMensaje = (e) => {
        setMensaje(e.target.value);
        // Restablecer el mensaje de error para el campo 'nombre' si es necesario
        if (errores.mensaje) {
            setErrores(prev => ({ ...prev, mensaje: '' }));
        }
    };

    const resetCamposForm = () => {
        setNombre("");
        setCorreo("");
        setTelefono("");
        setMensaje("");
    }

    const validarFormulario = () => {
        const nuevosErrores = {};
        // Validaciones simples como ejemplo, ajusta según tus necesidades
        if (!nombre.trim()) nuevosErrores.nombre = 'El nombre es requerido';
        if (!correo.trim()) nuevosErrores.correo = 'El correo es requerido';
        // Asegúrate de que el correo tenga un formato válido
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(correo)) {
            nuevosErrores.correo = 'Correo electrónico inválido';
        }
        if (!telefono.trim()) nuevosErrores.telefono = 'El teléfono es requerido';
        if (!mensaje.trim()) nuevosErrores.mensaje = 'El mensaje es requerido';
    
        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0; // Retorna true si no hay errores
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true); // Inicia el estado de carga

        const form = event.target;
        const data = new FormData(form);

        const requestOptions = {
            method: 'POST',
            body: data,
        };

        try {
            const response = await fetch('https://formsubmit.co/compras@torneadomanuelfranco.com', requestOptions);
            if (response.ok) {
                setSubmitSuccess(true); // Mostrar el mensaje de éxito

                // Borrar los valores del formulario
                resetCamposForm();

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
        } finally {
            setIsSubmitting(false); // Detiene el estado de carga
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
                                        <input type="text" className="form-control" name="nombre" id="nombre" placeholder="Tu nombre" required value={nombre} onChange={handleChangeNombre} />
                                        {errores.nombre && <div className="error">{errores.nombre}</div>}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="correo" className="form-label">Email</label>
                                        <input type="email" className="form-control" name="correo" id="email" placeholder="Tu correo electrónico" required value={correo} onChange={handleChangeCorreo} />
                                        {errores.correo && <div className="error">{errores.correo}</div>}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="telefono" className="form-label">Teléfono</label>
                                        <input type="tel" className="form-control" name="telefono" id="tel" placeholder="Tu número de teléfono" required value={telefono} onChange={handleChangeTelefono} />
                                        {errores.telefono && <div className="error">{errores.telefono}</div>}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="mensaje" className="form-label">Mensaje</label>
                                        <textarea className="form-control" name="mensaje" id="mensaje" rows="3" placeholder="Tu mensaje" required value={mensaje} onChange={handleChangeMensaje}></textarea>
                                        {errores.mensaje && <div className="error">{errores.mensaje}</div>}
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                        <button type="submit" className="btn btn-primary">Enviar</button>
                                    </div>
                                    {submitSuccess && <div className="submit-success-message">Formulario enviado con éxito.</div>}
                                </form>
                                {isSubmitting && (
                                    <div className="text-center">
                                        <div className="spinner-border text-primary" role="status">
                                            <span className="visually-hidden">Cargando...</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactanosModal