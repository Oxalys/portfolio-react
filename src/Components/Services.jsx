import React, { Fragment, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index.js'
import { faMagic } from '@fortawesome/free-solid-svg-icons'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const Services = () => {

    const [hover,setHover] = useState(false)
    const [style,setStyle] = useState({
        color: "#472D7F!important",
        transition: "transform"+ .2+"s",
    })

    const entrer = () => {
        setStyle(
            {
                color: "#472D7F !important",
                transition: "transform"+ .2+"s",
                transform: "scale(2)"
            }
        )
    }


    const sorti = () => {
        setStyle({
            color: "#472D7F !important",
            transition: "transform"+ .2+"s",
        })
    }


    return(
        <Fragment>
        <div id="services" className="container my-4 text-center">
            <div className="row py-4 align-items-center">
                <div className="col-md-3 col-sm-6 col-xs-12"> 
                <div className="icon">
                    <FontAwesomeIcon 
                    icon={faMagic}
                    onMouseEnter={entrer}
                    onMouseLeave={sorti}
                    style={style}
                    />
                </div>
                <h3 className="py-3">Web Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id volume amet.</p></div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                <FontAwesomeIcon icon={faLaptopCode} color="#472D7F" className="h1" />                    
                <h3 className="py-3">Web Dev</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id volume amet.</p></div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                <FontAwesomeIcon icon={faMobileAlt} color="#472D7F" className="h1" />                    
                <h3 className="py-3">App Dev</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id volume amet.</p></div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                <FontAwesomeIcon icon={faSearch} color="#472D7F" className="h1" />                    
                <h3 className="py-3">Research</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id volume amet.</p></div>
            </div>
        </div>
    </Fragment>
    )
}

export default Services;