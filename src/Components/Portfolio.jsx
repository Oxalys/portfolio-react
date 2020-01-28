import React, { Fragment } from 'react';
import img1 from '../img/portfolio1.jpg';
import img2 from '../img/portfolio2.jpg';
import img3 from '../img/portfolio3.jpg';
import proj1 from '../img/proj1.jpg';
import proj2 from '../img/proj2.jpg';

const Portfolio = () => {

    return (
        <Fragment>
            <div id="portfolio"> 
                <h1 className="text-center pt-4 display-4 text-light">- Portfolio -</h1>
                <div className="row d-flex justify-content-center no-gutters">
                    <div className="col-2"><img src={proj1} alt=""/></div>
 
                    <div className="col-6">
                        <div id="carouselExampleCaptions" class="carousel slide container py-5 w-75" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner mb-3">
                                <div class="carousel-item active">
                                    <img src={img1} class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h3>New Ideas</h3>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src={img2} class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h3>High Quality Design</h3>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src={img3} class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h3>Great Responsive Apps</h3>
                                    </div>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>

                    <div className="col-2 mb-5"><img src={proj2} alt=""/></div>
                </div>
            </div>
            <div id="banniere"></div>
        </Fragment>
    )
}

export default Portfolio;