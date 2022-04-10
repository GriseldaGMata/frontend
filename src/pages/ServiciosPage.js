import '../styles/components/pages/ServiciosPage.css';

import React from "react";
function ServiciosPage(props) {
    return (
        <section className="holder">
            <div className="servicio">
                <h2>Nuestros servicios</h2>
                <div>
                    <h3>Asesoria integral</h3>
                    <img src="img/servicios/asesoria.jpg" width="100" alt="asesoria" />
                    <p className='servicioinfo'>parrafo 1: Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Impedit animi soluta necessitatibus vero molestiae provident 
                    tenetur hic, perspiciatis nesciunt incidunt nulla ratione exercitationem temporibus 
                    omnis, quam, sint est 
                    </p>
                </div>
                <div>
                    <h3>Servicio personalizado</h3>
                    <img src="img/servicios/charla.jpg" width="100" alt="charla cliente" />
                    <p className='servicioinfo'>parrafo 2: Lorem Lorem Lorem Lorem Lorem Lorem
                        Lorem Lorem Lorem Lorem Lorem LoremLorem Lorem Lorem
                        Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                    </p>            
                </div>
                <div>
                    <h3>Brindamos soluciones</h3>
                    <img  src="img/servicios/soluciones.jpg" width="100" alt="soluciones" />
                    <p className='servicioinfo'>parrafo 3: Lorem Lorem Lorem Lorem Lorem Lorem
                        Lorem Lorem Lorem Lorem Lorem LoremLorem Lorem Lorem
                        Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                    </p>                   
                </div>

            </div>
        </section>
    );
}
export default ServiciosPage;