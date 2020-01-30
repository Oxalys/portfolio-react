import React from 'react';
import Nav from './Nav';

const Header = () => {

    return(
        <div id="header">
            <div className="bann position-absolute no-gutters row"></div>
            <Nav className="nav"/>
            <h1 className="text-white text text-center font-weight-bold animated fadeInDownBig slow">I'm a fullstack developer, <br/> I'm Oxalys</h1>
        </div>
    )
}

export default Header; 