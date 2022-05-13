import '../styles/components/pages/ContactoPage.css';

import React from "react";
const ContactoPage = (props) => {
    return (
        <main className="holder">
            <div class="container">
                <div class="box">
                    <div class="col">
                        <div className="izquierda">
                            <h2>Complete el siguiente formulario</h2>
                            <form action="" method="" className="formulario">
                                <p>
                                    <label>Nombre completo:</label>
                                    <input type="text" name="nombre" />
                                </p>
                                <p>
                                    <label>Email:</label>
                                    <input type="text" name="email" />
                                </p>
                                <p>
                                    <label>Telefono o movil:</label>
                                    <input type="text" name="telefono" />
                                </p>
                                <p>
                                    <label>Comentario:</label>
                                    <textarea name="mensaje"></textarea>
                                </p>
                                <p className="centrar">
                                    <input type="submit"  value="Enviar datos: Nos contactaremos a la brevedad." className='boton'/>
                                    

                                </p>
                            </form>

                        </div>
                        <div class="col">
                            <div className="derecha">
                                <h2>Otras vias de contacto</h2>
                                <p>Si lo desea puede contactarnos utilizando los siguientes medios:</p>
                                <ul>
                                    <li>Telefono: 123 1234 123</li>
                                    <li>Email: </li>
                                    <li>Facebook</li>
                                    <li>Twitter</li>
                                    <li>Skype</li>
                                    <li>instagram</li>
                                    <li>Nuestras oficinas en: calle Siempre viva 12345-Malaga</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default ContactoPage;