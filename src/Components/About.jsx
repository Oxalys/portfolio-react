import React from 'react';
import img from '../img/about2.jpg';

const About = () => {

    return (
        <div id="about" className="container mb-5">
            <h1 className="text-center my-5 display-4">- About me -</h1>
            <div className="row">
                <div className="col-6"><img src={img} alt="#" className="rounded"/></div>
                <div className="col-5 text-justify mt-3">
                    <h3>FullStack Dev @ MolenGeek</h3>
                    <h5 className="my-5"><p>Email : s.yonte.montero@gmail.com</p>
                        <p>Phone : +32 476 60 68 70</p> 
                        <p>Adress : Brussels 1050, Belgium</p>   
                        <p>Website : This one, lmfao</p></h5>
                    <div>
                        <h3>My Dev Skills</h3>
                        <ul className="skill-list">
                            <li className="skill">
                                <h3>HTML</h3>
                                <progress className="skill-1" max="100" value="90">
                                    <strong>Skill Level: 90%</strong>
                                </progress>
                            </li>
                            <li className="skill">
                                <h3>JavaScript</h3>
                                <progress className="skill-2" max="100" value="70">
                                    <strong>Skill Level: 70%</strong>
                                </progress>
                            </li>
                            <li className="skill">
                                <h3>React</h3>
                                <progress className="skill-3" max="100" value="80">
                                    <strong>Skill Level: 80%</strong>
                                </progress>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <a href="https://github.com/Oxalys"><input type="button" value="Learn More" className="text-white btn  font-weight-bolder p-3 px-4" /></a></div>
                </div>
            </div>
        </div>
    )
}

export default About;