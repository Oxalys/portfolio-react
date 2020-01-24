import React from 'react';

const Nav = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <span className="navbar-brand mb-0 h1 mx-3" href="#">PORTFOLIO</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <div className="navbar-nav">
                        <span className="nav-item nav-link mx-2">HOME</span>
                        <span className="nav-item nav-link mx-2">ABOUT</span>
                        <span className="nav-item nav-link mx-2">SERVICES</span>
                        <span className="nav-item nav-link mx-2">PORTFOLIO</span>
                        <span className="nav-item nav-link mx-2 mr-4">CONTACT</span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav; 