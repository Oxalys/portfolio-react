import React from 'react';
import img from '../img/about2.jpg';

const About = () => {

    return (
        <div id="about" className="container mb-5">
            <h1 className="text-center my-5 display-4">- About us -</h1>
            <div className="row">
                <div className="col-md-6 col-sm-12 justify-content-center d-flex"><img src={img} alt="#" className="rounded" /></div>
                <div className="col-md-6 col-sm-12 mt-2">
                    <h3>FullStack Dev @ MolenGeek</h3>
                    <h5 className="my-4"><p>Email : s.yonte.montero@gmail.com</p>
                        <p>Phone : +32 476 60 68 70</p>
                        <p>Adress : Brussels 1050, Belgium</p>
                        <p>Website : This one, lmfao</p></h5>
                    <div>
                        <center>
                            <div id="SkillBox">
                                <h3>My Dev Skills</h3>
                                <div class="SkillBar">
                                    <div id="Skill-HTML">
                                        <span class="Skill-Area ">HTML</span>
                                    </div>
                                </div>

                                <div class="SkillBar">
                                    <div id="Skill-CSS">
                                        <span class="Skill-Area ">CSS</span>
                                    </div>
                                </div>
                                <div class="SkillBar">
                                    <div id="Skill-JS">
                                        <span class="Skill-Area ">JavaScript</span>
                                    </div>
                                </div>
                                <div class="SkillBar">
                                    <div id="Skill-R">
                                        <span class="Skill-Area">REACT</span>
                                    </div>
                                </div>
                                <div class="SkillBar">
                                    <div id="Skill-PPro">
                                        <span class="Skill-Area ">PremierePro</span>
                                    </div>
                                </div>
                                <div class="SkillBar">
                                    <div id="Skill-PHI">
                                        <span class="Skill-Area ">Photoshop/Illustrator</span>
                                    </div>
                                </div>

                            </div>
                        </center>
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <a href="https://github.com/Oxalys"><input type="button" value="Learn More" className="text-white btn  font-weight-bolder p-3 px-4" /></a></div>
                </div>
            </div>
        </div>
    )
}

export default About;


