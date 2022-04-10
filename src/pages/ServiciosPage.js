import React from "react";
const ServiciosPage = (props) => {
    return (
        <section className="holder">
            <div className="servicios">
                <h2>Nuestros servicios</h2>
                <div>
                    <h3>Asesoria integral</h3>
                    <img src="img/servicios/asesoria.jpg" width="100" alt="asesoria"/>
                    <p>parrafo 1: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit animi soluta necessitatibus vero molestiae provident tenetur hic, perspiciatis nesciunt incidunt nulla ratione exercitationem temporibus omnis, quam, sint est laudantium earum
                    </p>
                </div>
                <div>
                    <h3>Servicio personalizado, acorde a tus necesidades</h3>
                    <p>parrafo 1: Lorem Lorem Lorem Lorem Lorem Lorem
                        Lorem Lorem Lorem Lorem Lorem LoremLorem Lorem Lorem
                        Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                    </p>
                    <img src="img/servicios/charla.jpg" width="100" alt="charla cliente" />
                </div>
                <div>
                    <h3>Brindamos soluciones</h3>
                    <p>parrafo 1: Lorem Lorem Lorem Lorem Lorem Lorem
                        Lorem Lorem Lorem Lorem Lorem LoremLorem Lorem Lorem
                        Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                    </p>
                    <img src="img/servicios/soluciones.jpg" width="100" alt="soluciones" />
                </div>

            </div>
        </section>
    );
}
export default ServiciosPage;