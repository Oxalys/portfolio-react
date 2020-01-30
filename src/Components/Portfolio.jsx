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
                <div className="row no-gutters">
                    <div className="col-xs-12 col-lg-8 offset-lg-2">
                        <div id="carouselExampleCaptions" className="carousel slide container py-5 w-100" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner mb-3">
                                <div className="carousel-item active">
                                    <img src={img1} className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h3>New Ideas</h3>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={img2} className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h3>High Quality Design</h3>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={img3} className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h3>Great Responsive Apps</h3>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center no-gutters">
                    <div className="col-md-4 col-sm-6 my-5 pb-4 text-center zoom">
                        <img src={proj1} alt=""/>
                        <div className="container hide w-50 text-light">
                            <p>Les Chefs <br/>
                                HTML/CSS
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 my-5 pb-4 text-center zoom">
                        <img src={proj2} alt=""/>
                        <div className="container hide w-50 text-light">
                            <p>
                                Emporium <br/>
                                JS/DOM
                            </p>
                        </div>
                    </div>
                </div>
                <div id="banniere"></div>
            </div>
        </Fragment>
                )
            }
            
export default Portfolio;