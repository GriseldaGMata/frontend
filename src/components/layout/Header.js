import '../../styles/components/layout/Header.css';

import React from 'react';
const Header = (props) => {
    return (
        <header  className='ubicacion'>
            
            {/* <div className="holder , shadow-lg p-3 mb-5 bg-body rounded"> */}
                <div >
                    <img  src='img/logogestoria.jpeg' width="180"
                        alt="Gestoria Mata" />
                    {/* <h1> Gestoria Mata - soluciones integrales </h1> */}
                </div>
            {/* </div> */}
        </header>
    );
}
export default Header;

<div class="shadow-lg p-3 mb-5 bg-body rounded">Larger shadow</div>