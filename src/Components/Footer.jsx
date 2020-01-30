import React from 'react';

const Footer = () => {

    return (
        <div id="footer">
            <div className="row container-fluid no-gutters d-flex justify-content-center my-4">
                <div className="col-sm-6 col-xs-12 text-center">
                    <h4 className="my-3">- Follow us on Social Media -</h4>
                    <a href="https://www.facebook.com/Oxalyss" target="_blank"><i className="fab fa-facebook-square mt-2 h2 p-2"></i></a> <a href="https://twitter.com/Oxalyss" target="_blank"><i className="fab fa-twitter-square h2 p-2"></i></a> <a href="https://www.instagram.com/oxxalys/" target="_blank"><i className="fab fa-instagram h2 p-2"></i></a> <a href="https://www.snapchat.com/l/fr-fr/" target="_blank"><i className="fab fa-snapchat-square h2 p-2"></i></a>
                </div>
                <div className="col-sm-6 col-xs-12 text-center">
                    <h4 className="my-3">- Know us Better -</h4>
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
            </div>
            <div id="footer2"><p className="text-center text-light m-0 py-3">© Copyright 2020 | website made with <i className="fas fa-heart text-danger"></i> by Oxalys Web Dev</p></div>
        </div>
    )
}

export default Footer;