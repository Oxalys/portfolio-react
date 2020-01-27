import React, { Fragment } from 'react';

const Services = () => {

    return(
        <Fragment>
        <div id="services" class="container my-4 text-center">
            <div class="row py-4 align-items-center">
                <div class="col">
                <i class="h1 py-4 fas fa-magic"></i>
                    <h3 className="pb-3">Web Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id volume amet.</p></div>
                <div class="col">
                <i class="h1 py-4 fas fa-laptop-code"></i>
                    <h3 className="pb-3">Web Dev</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id volume amet.</p></div>
                <div class="col">
                <i class="h1 py-4 fas fa-mobile-alt"></i>
                    <h3 className="pb-3">App Dev</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id volume amet.</p></div>
                <div class="col">
                <i class="h1 py-4 fas fa-search"></i>
                    <h3 className="pb-3">Research</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id volume amet.</p></div>
            </div>
        </div>
    </Fragment>
    )
}

export default Services;