import '../styles/components/pages/NosotrosPage.css';

import React from "react";
const NosotrosPage = (props) => {
    return (
        <section className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>Somos una empresa joven, dinamica, buscamos respuestas y soluciones.
                    Nuestro team se compone de profesionales comprometidos con el servicio y
                    calidad de cara al cliente.
                    Comprometidos, responsables y  expeditivos en las tematicas de gestion documental.
                    Analizamoa las mejores opciones en casa caso particular y te ofrecemos una plataforma
                    digital que acelera tus tramites y consultas. </p>
                <p>En Gestoria Mata, gestionamos soluciones.</p>
               
            </div>

           <section className="holder">
            <div className="personas">
            <h2>Staff</h2>
                <div className="persona">
                    <img src="img/nosotros/yo.jpeg" width="100" alt="Griselda" />
                    <h5> Griselda De la Mata</h5>
                    <h6>CEO Co-founder</h6>
                    <p>parrafo personal: Lorem ipsum
                        em Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                </div>
                <div className="persona">
                    <img src="img/nosotros/nosotros1.jpg" width="120" alt="Sumate a nuestro team" />
                    <h5> Envianos tus datos</h5>
                    <h6>Aplicaciones</h6>
                    <p>parrafo personal: Lorem ipsum
                        em Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                </div>
                <div className="persona">
                    <img src="/img/nosotros/co_founder.jpg" width="120" alt="Co-founder" />
                    <h5> Juana Gonzalez</h5>
                    <h6>Directora co-founder</h6>
                    <p>parrafo personal: Lorem ipsum
                        em Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                </div>
            </div>
            </section>

        </section>
    );
}
export default NosotrosPage;