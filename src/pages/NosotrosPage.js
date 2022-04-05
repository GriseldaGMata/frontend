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
                <p>lorem
                    parrafo 2: Lorem Lorem Lorem Lorem Lorem Lorem
                    Lorem Lorem Lorem Lorem Lorem LoremLorem Lorem Lorem
                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                </p>
            </div>
            <h2>Staff</h2>
            <div className="personas">
                <div className="persona">
                    <img src="img/nosotros/yo.jpeg" width="75" alt="Griselda" />
                    <h5> Griselda De la Mata</h5>
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