import '../styles/components/pages/ServiciosPage.css';

import React from "react";
function ServiciosPage(props) {
    return (
        <section className="holder">
            <div className="servicio">
                <h2>Nuestros servicios</h2>
                <div className='secciones'>
                    <h3>Asesoria integral</h3>
                    <section>
                    <img src="img/servicios/gestionintegral.jpg" width="120" alt="asesoria" />
                    <p className='servicioinfo'>Nuestro equipo de profesionales 
                    multidisciplinarios podra brindarte un servicio integral.
                    </p>                        
                    </section>
                </div>
                <div className='secciones'>
                    <h3>Servicio personalizado</h3>
                    <section>
                    <img src="img/servicios/analizartucaso.jpg" width="120" alt="charla cliente" />
                    <p className='servicioinfo'>En todo momento adecuaremos las soluciones a tus necesidades, 
                    respetando siempre tu opinion. Seras parte activa en todo momento.
                    </p>
                    </section>         
                </div>
                <div className='secciones'>
                    <h3>Brindamos soluciones</h3>
                    <section>
                    <img  src="img/servicios/ceo.jpg" width="120" alt="soluciones" />
                    <p className='servicioinfo'>Nuestro equipo diseñara y aplicara las mejores soluciones respetando siempre ti opinion.
                    </p>
                    </section>                  
                </div>

            </div>
        </section>
    );
}
export default ServiciosPage;