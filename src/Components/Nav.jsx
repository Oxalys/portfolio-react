import React from 'react';

const Nav = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-transparent navbar-dark pt-4">
            <span className="navbar-brand mb-0 mx-3" href="#">OXALYS</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <div className="navbar-nav">
                    <a href="#header" className="nav-item nav-link mx-2">HOME</a>
                    <a href="#about" className="nav-item nav-link mx-2">ABOUT</a>
                    <a href="#portfolio" className="nav-item nav-link mx-2">PORTFOLIO</a>
                    <a href="#banniere" className="nav-item nav-link mx-2">SERVICES</a>
                    <a href="#contact" className="nav-item nav-link mx-2 mr-4">CONTACT</a>
                </div>
            </div>
        </nav>
    )
}

export default Nav; 