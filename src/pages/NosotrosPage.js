import React from "react";
const NosotrosPage = (props) => {
    return (
        <section className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>parrafo 1: Lorem Lorem Lorem Lorem Lorem Lorem
                    Lorem Lorem Lorem Lorem Lorem LoremLorem Lorem Lorem
                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                </p>
                <div><img src="img/home/edificio.jpg" width="100" alt="frente edificio" /></div>
                <div><img src="img/home/exteriorverde.jpg" width="100" alt="Vistas" />
                </div><div><img src="img/home/empleada.jpg" width="100" alt="empleada" /></div>
                <div><img src="img/home/of1.jpg" width="100" alt="Oficina 1" /></div>
                <div><img src="img/home/oficina2.jpg" width="100" alt="Oficina 2" /></div>

                <p>lorem
                    parrafo 2: Lorem Lorem Lorem Lorem Lorem Lorem
                    Lorem Lorem Lorem Lorem Lorem LoremLorem Lorem Lorem
                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                </p>
            </div>
            <h2>Staff</h2>
            <div className="personas">
                <div className="persona">
                    <img src="img/nosotros/yo.jpeg" width="100" alt="Griselda" />
                    <h5> Griselda De la Mata</h5>
                    <h6>Gerente general</h6>
                    <p>parrafo personal: Lorem ipsum
                        Lorem Lorem Lorem Lorem Lorem Lorem
                        Lorem Lorem Lorem Lorem Lorem LoremLorem Lorem Lorem
                        Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                </div>
                <div className="persona">
                    <img src="img/nosotros/nosotros1.jpg" width="120" alt="Sumate a nuestro team" />
                    <h5> Envianos tus datos</h5>
                    <h6>Aplicaciones</h6>
                    <p>parrafo personal: Lorem ipsum
                        Lorem Lorem Lorem Lorem Lorem Lorem
                        Lorem Lorem Lorem Lorem Lorem LoremLorem Lorem Lorem
                        Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                </div>
                <div className="persona">
                    <img src="/img/nosotros/co_founder.jpg" width="120" alt="Co-founder" />
                    <h5> ----------------------</h5>
                    <h6>Gerente general</h6>
                    <p>parrafo personal: Lorem ipsum
                        Lorem Lorem Lorem Lorem Lorem Lorem
                        Lorem Lorem Lorem Lorem Lorem LoremLorem Lorem Lorem
                        Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                </div>
            </div>
        </section>
    );
}
export default NosotrosPage;