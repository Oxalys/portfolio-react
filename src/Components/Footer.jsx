import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index.js'
import { faFacebookSquare} from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare} from '@fortawesome/free-brands-svg-icons'
import { faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faSnapchatSquare} from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {

    return (
        <div id="footer">
            <div className="row container-fluid no-gutters d-flex justify-content-center my-4">
                <div className="col-sm-6 col-xs-12 text-center">
                    <h4 className="my-3">- Follow us on Social Media -</h4>
                    <a className="h2 p-2" href="https://www.facebook.com/Oxalyss" target="_blank"><FontAwesomeIcon icon={faFacebookSquare} color="#472D7F" /></a> 
                    <a className="h2 p-2" href="https://twitter.com/Oxalyss" target="_blank"><FontAwesomeIcon icon={faTwitterSquare} color="#472D7F" /></a> 
                    <a className="h2 p-2" href="https://www.instagram.com/oxxalys/" target="_blank"><FontAwesomeIcon icon={faInstagram} color="#472D7F" /></a> 
                    <a className="h2 p-2" href="https://www.snapchat.com/l/fr-fr/" target="_blank"><FontAwesomeIcon icon={faSnapchatSquare} color="#472D7F" /></a>
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
            <div id="footer2"><p className="text-center text-light m-0 py-3">© Copyright 2020 | website made with <FontAwesomeIcon icon={faHeart} className="text-danger" /> by Oxalys Web Dev</p></div>
        </div>
    )
}

export default Footer;