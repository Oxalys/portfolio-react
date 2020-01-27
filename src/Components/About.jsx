import React from 'react';
import img from '../img/about2.jpg';

const About = () => {

    return (
        <div id="about" className="container mb-5">
            <h1 className="text-center my-5 display-4">- About me -</h1>
            <div class="row">
                <div class="col-6"><img src={img} alt="#"/></div>
                <div class="col-5 text-justify mt-3">
                    <h3>FullStack Dev @ MolenGeek</h3>
                    <br/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quidem explicabo autem perferendis et, pariatur similique perspiciatis sequi beatae, at, atque sint natus quod tenetur nam. Perspiciatis, magni necessitatibus. Beatae! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis porro, eaque reprehenderit voluptatem aliquid similique non excepturi tenetur quibusdam eos at, reiciendis consectetur quis blanditiis provident aut cumque dolorum nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi excepturi quod quas? Asperiores nulla odio, deserunt delectus fugit porro tempora voluptates eos consequatur nobis repudiandae reiciendis explicabo eligendi, suscipit praesentium! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi veritatis commodi voluptate deleniti inventore nobis tempora sunt iure quam asperiores, ab repudiandae maiores aliquam ullam minus repellendus? Et, quaerat quia.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, provident! Quis itaque repellat recusandae voluptas! Deleniti ab amet praesentium? Quo ipsa animi, quaerat sequi laborum accusamus sit illo molestias officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem atque architecto inventore cupiditate corporis quisquam, esse ratione assumenda optio laudantium animi hic eius iure reprehenderit impedit quae beatae obcaecati accusamus.</p>
                    <br/>
                    <br/>
                    <div className="d-flex justify-content-center">
                    <button className="text-white btn rounded-pill font-weight-bolder p-3 px-4">Learn More</button></div>
                </div>
            </div>
       </div>
    )
}

export default About;