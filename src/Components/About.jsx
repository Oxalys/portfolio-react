import React from 'react';
import img from '../img/about2.jpg';

const About = () => {

    return (
        <div id="about" className="container mb-5">
            <h1 className="text-center my-5 display-4">- About me -</h1>
            <div class="row">
                <div class="col-6"><img src={img} alt="#"/></div>
                <div class="col-5 text-justify mt-3 pt-4">
                    <h3>FullStack Dev @ MolenGeek</h3>
                    <br/>
                    <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quidem explicabo autem perferendis et, pariatur similique perspiciatis sequi beatae, at, atque sint natus quod tenetur nam. Perspiciatis, magni necessitatibus. Beatae! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis porro, eaque reprehenderit voluptatem aliquid similique non excepturi tenetur quibusdam eos at, reiciendis consectetur quis blanditiis provident aut cumque dolorum nisi.</h5>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, provident! Quis itaque repellat recusandae voluptas! Deleniti ab amet praesentium? Quo ipsa animi, quaerat sequi laborum accusamus sit illo molestias officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
                    <br/>
                    <br/>
                    <div className="d-flex justify-content-center">
                    <input type="button" value="Learn More" className="text-white btn rounded-pill font-weight-bolder p-3 px-4" href="https://github.com/Oxalys/"/></div> 
                </div>
            </div>
       </div>
    )
}

export default About;