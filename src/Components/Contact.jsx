import React, { useState } from 'react';

const Contact = () => {

    // creer un state, stock la maj du click, si click sur input ca devient vrai, vrai va faire un affichage conditionnel sur la className (ternaire)

    const [slide1, setSlide1] = useState("text-light h4");
    const [slide2, setSlide2] = useState("text-light h4");
    const [slide3, setSlide3] = useState("text-light h4");
    const [slide4, setSlide4] = useState("text-light h4");

    return (
        <div id="contact">
            <h2 className="text-center py-4 mb-4 display-4 text-light">- Get in Touch -</h2>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-xs-12 mx-auto">
                        <div className="row">
                            <div className="col-sm-6 col-xs-12 form-group py-3">
                                <label className={slide1}>Name</label>
                                <input type="text" onFocus={() => setSlide1("text-ligth h4 top")} onBlur={() => setSlide1("text-light h4")} className="form-control text-light pt-3" />
                            </div>
                            <div className="col-sm-6 col-xs-12 form-group py-3">
                                <label htmlFor="" className={slide2}>Email</label>
                                <input type="text" onFocus={() => setSlide2("text-ligth h4 top")} onBlur={() => setSlide2("text-light h4")} className="form-control text-light pt-3" />
                            </div>
                            <div className="col-12 form-group py-3">
                                <label htmlFor="" className={slide3}>Sujet</label>
                                <input type="text" onFocus={() => setSlide3("text-ligth h4 top")} onBlur={() => setSlide3("text-light h4")} className="form-control text-light pt-3" />
                            </div>
                            <div className="col-12 form-group py-3">
                                <label htmlFor="" className={slide4}>Message</label>
                                <textarea name="" onFocus={() => setSlide4("text-ligth h4 top")} onBlur={() => setSlide4("text-light h4")} id="" cols="30" rows="10" className="form-control text-light pt-3"></textarea>
                            </div>
                            <div className="col-12 text-center form-group mb-5"><button className="px-4 py-2 rounded text-center text-light h4">Submit</button></div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-xs-12 mx-auto my-5 text-light">
                        <div className="pl-5">
                            <h5 className="my-3 infos"><p>Email : <br/>
                            <span className="pl-3">s.yonte.montero@gmail.com</span></p>
                            <p>Phone : <br/> <span className="pl-3">+32 476 60 68 70</span></p>
                            <p>Adress : <br/> <span className="pl-3">Brussels 1050, Belgium</span></p>
                            <p>Website : <br/> <span className="pl-3">This one, lmfao</span></p></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;