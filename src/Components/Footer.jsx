import React from 'react';

const Footer = () => {

    return (
        <div id="footer">
            <div className="row container-fluid no-gutters d-flex justify-content-center my-4">
                <div className="col-2"></div>
                <div className="col text-center">
                    <h4>- Follow us on Social Media -</h4>
                    <i class="fab fa-facebook-square mt-4 h2 p-2"></i> <i class="fab fa-twitter-square h2 p-2"></i> <i class="fab fa-instagram h2 p-2"></i> <i class="fab fa-snapchat-square h2 p-2"></i>
                </div>
                <div className="col text-center">
                    <h4 className="mb-4">- Know us Better -</h4>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col">
                            <div><a href="#header">Terms of Use</a></div>
                            <div><a href="#header">Confidenciality</a></div>
                        </div>
                        <div className="col">
                            <div><a href="#header">F.A.Q.</a></div>
                            <div><a href="#header">Jobs</a></div>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
            <div id="footer2"><p className="text-center text-light m-0 py-3">© Copyright 2020 | website made with <i class="fas fa-heart text-danger"></i> by Oxalys Web Dev</p></div>
        </div>
    )
}

export default Footer;