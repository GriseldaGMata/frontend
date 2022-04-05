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
                <p>parrafo 2: Lorem Lorem Lorem Lorem Lorem Lorem
                    Lorem Lorem Lorem Lorem Lorem LoremLorem Lorem Lorem
                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                </p>
            </div>
            <h2>Staff</h2>
            <div className="personas">
                <div className="persona">
                    <img src="images/nosotros/nosotros1.jpg" width="75" alt="Juan" />
                    <h5>Juan Gomez</h5>
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