import React from "react";
const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="img/home/oficina2.jpg" alt="foto oficina" width="300px" height="300px" />

            </div>
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p>En Gestoria Mata ofrecemos servicio de asesoria y gestion de tramites internacionales entre 
                       Argentina y España. Visados, DNI, nacionalidad por residencia, actas de nacimiento y 
                       matrimonio-solteria-divorcio, antecedentes penales, etc.-
                       Nos especializamos en resolver con discrecion, rapidez y sobre todo profesionalidad; 
                       lo necesario para tu relocacion de pais. Buscamos propiedades para tu llegada y la de tu familia.</p>
                </div>
                
                <div className="testimonios right">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Super claros.</span>
                        <span> Inscripcion de matrimonio </span>
                        <span> - </span>
                        <span className="autor">Esteban Garcia - Bahia Blanca</span>
                    </div>
                </div>
                <div className="testimonios right">
                    {/* <h2>Testimonios</h2> */}
                    <div className="testimonio">
                        <span className="cita">Confianza y rapidez!</span>
                        <span> Ciudadania por residencia </span>
                        <span> - </span>
                        <span className="autor">Marta Castillo - Buenos Aires</span>
                    </div>
                </div>
                <div className="testimonios right">
                    {/* <h2>Testimonios</h2> */}
                    <div className="testimonio">
                        <span className="cita">Solucionaron todo!</span>
                        <span> Relocacion de pais </span>
                        <span> - </span>
                        <span className="autor">Carolina Sotto - CABA</span>
                    </div>
                </div>
                
            </div>
        </main>
    );
}
export default HomePage;