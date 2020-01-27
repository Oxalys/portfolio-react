import React from 'react';

const Footer = () => {

    return (
        <div id="footer">
            <div className="row container mt-5">
                <div className="col-8 text-center my-4"><h4>- Follow us on Social Media -</h4>
                    <i class="fab fa-facebook-square mt-4 h2 p-2"></i> <i class="fab fa-twitter-square h2 p-2"></i> <i class="fab fa-instagram h2 p-2"></i> <i class="fab fa-snapchat-square h2 p-2"></i>
                </div>
                <div className="col-4 text-center mt-4 pb-5"><h4>- Know us Better -</h4>
                    <ul className="mt-4">
                        <li><a href="">Terms of Use</a></li>
                        <li><a href="">F.A.Q.</a></li>
                        <li><a href="">Conficiality Politics</a></li>
                        <li><a href="">Jobs</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;