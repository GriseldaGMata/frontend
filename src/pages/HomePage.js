import '../styles/components/pages/HomePage.css';

import React from "react";
const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                
            </div>
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p className='parrafo'>En Gestoria Mata ofrecemos servicio de asesoria y gestion de tramites internacionales entre 
                       Argentina y España. Visados, DNI, nacionalidad por residencia, actas de nacimiento y 
                       matrimonio-solteria-divorcio, antecedentes penales, etc.-
                       Nos especializamos en resolver con discrecion, rapidez y sobre todo profesionalidad; 
                       lo necesario para tu relocacion de pais. Buscamos propiedades para tu llegada y la de tu familia.</p>
                </div>
                
                <div className="testimonios right">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Super claros.</span>
                        <span> - </span>
                        <span> Inscripcion de matrimonio </span>
                        <span> - </span>
                        <span className="autor">Julieta Abril - Bahia Blanca</span>
                    </div>
                </div>
                
                <div className="testimonios right">
                   
                    <div className="testimonio">
                        <span className="cita">Solucionaron todo!</span>
                        <span> - </span>
                        <span> Relocacion de pais </span>
                        <span> - </span>
                        <span className="autor">Lucas Hernan - CABA</span>
                    </div>
                </div>
                <img className='imghome' src="img/home/team.jpg" alt="fototeam" width="350px" height="250px" />
            </div>
        </main>
    );
}
export default HomePage;