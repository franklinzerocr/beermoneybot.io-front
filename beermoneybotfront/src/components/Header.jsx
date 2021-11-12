import React from 'react';
import '../styles/Header.scss'

const Header = () => {
    return (
        <nav>
            <img src={process.env.PUBLIC_URL + '/Logo-definitivo-03.png'} alt="logo" className="logo" />

            <div className="navbar-right">
          
            </div>

            <div className="navbar-right">
            <ul>
                    <li>
                        <a href="/">Sobre nosotros</a>
                    </li>
                    <li>
                        <a href="/">Ganancias</a>
                    </li>
                    <li>
                        <a href="/">Instrucciones</a>
                    </li>
                    <li>
                        <a href="/">Ingresa VIP</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;