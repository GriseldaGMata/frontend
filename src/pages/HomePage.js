import React from "react";
const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="img/home/oficina2.jpg" alt="foto oficina" />
            </div>
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsumlorem ipsum lorem ipsum
                    lorem ipsum lorem ipsumlorem ipsum lorem ipsum
                    lorem ipsum lorem ipsumlorem ipsum lorem ipsum
                    lorem ipsum lorem ipsumlorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum</p>
                </div>
                <div className="testimonios right">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente excelente</span>
                        <span> - </span>
                        <span className="autor">Juan Perez</span>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default HomePage;