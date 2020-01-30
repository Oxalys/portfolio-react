import React, { useEffect, useState } from 'react';
import img from '../img/about2.jpg';

const About = () => {

    const [skill1, setSkill1] = useState('');
    const [skill2, setSkill2] = useState('');
    const [skill3, setSkill3] = useState('');
    const [skill4, setSkill4] = useState('');
    const [skill5, setSkill5] = useState('');
    const [skill6, setSkill6] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 460) {
                setSkill1('Skill-HTML')
                setSkill2('Skill-CSS')
                setSkill3('Skill-JS')
                setSkill4('Skill-R')
                setSkill5('Skill-PPro')
                setSkill6('Skill-PHI')
            } else {
                setSkill1('')
                setSkill2('')
                setSkill3('')
                setSkill4('')
                setSkill5('')
                setSkill6('')
            }
        })
    })

    return (
        <div id="about" className="container mb-5">
            <h1 className="text-center my-5 display-4">- About us -</h1>
            <div className="row">
                <div className="col-md-6 col-sm-12 justify-content-center d-flex"><img src={img} alt="#" className="rounded mb-3" /></div>
                <div className="col-md-6 col-sm-12 py-4 text-justify px-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam deserunt a consequatur magnam ipsum nemo enim officia, vitae doloremque minus. Quaerat amet ipsa incidunt nisi repudiandae itaque impedit deleniti suscipit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat delectus expedita dolore est, reiciendis, libero consectetur similique veritatis officia odio totam. Officiis tempora aspernatur deserunt soluta aliquam nam accusantium molestias.</p>
                    <div>
                        <center>
                            <div id="SkillBox">
                                <h3>My Dev Skills</h3>
                                <div className="SkillBar">
                                    <div id={skill1}>
                                        <span className="Skill-Area">HTML</span> 
                                    </div>
                                </div>

                                <div className="SkillBar">
                                    <div id={skill2}>
                                        <span className="Skill-Area">CSS</span>
                                    </div>
                                </div>
                                <div className="SkillBar">
                                    <div id={skill3}>
                                        <span className="Skill-Area">JavaScript</span>
                                    </div>
                                </div>
                                <div className="SkillBar">
                                    <div id={skill4}>
                                        <span className="Skill-Area">REACT</span>
                                    </div>
                                </div>
                                <div className="SkillBar">
                                    <div id={skill5}>
                                        <span className="Skill-Area">PremierePro</span>
                                    </div>
                                </div>
                                <div className="SkillBar">
                                    <div id={skill6}>
                                        <span className="Skill-Area">Photoshop/Illustrator</span>
                                    </div>
                                </div>

                            </div>
                        </center>
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <a href="https://github.com/Oxalys" target="_blank"><input type="button" value="Learn More" className="text-white btn  font-weight-bolder p-3 px-4" /></a></div>
                </div>
            </div>
        </div>
    )
}

export default About;


