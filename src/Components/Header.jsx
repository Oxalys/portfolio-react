import React from 'react';
import Nav from './Nav';

const Header = () => {

    return(
        <div id="header">
            <div class="bann position-absolute no-gutters row"></div>
            <Nav className="nav"/>
            <h1 className="text-white text text-center font-weight-bold">I'm a web developer, <br/> having trouble with react?</h1>
        </div>
    )
}

export default Header; 