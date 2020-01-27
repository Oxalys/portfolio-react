import React from 'react';

const Contact = () => {

    return (
        <div id="contact">
            <h2 className="text-center py-4 mb-4 display-4 text-light">- Get in Touch -</h2>
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-6 form-group py-3">
                                <label htmlFor="" className="text-light h4">Name</label>
                                <input type="text" className="form-control text-light pt-3"/>
                                </div>
                            <div className="col-6 form-group py-3">
                                <label htmlFor="" className="text-light h4">Email</label>
                                <input type="text" className="form-control text-light pt-3"/>
                                </div>
                            <div className="col-12 form-group py-3">
                                <label htmlFor="" className="text-light h4">Sujet</label>
                                <input type="text" className="form-control text-light pt-3"/>
                                </div>
                            <div className="col-12 form-group py-3">
                                <label htmlFor="" className="text-light h4">Message</label>
                                <textarea name="" id="" cols="30" rows="10" className="form-control text-light pt-3"></textarea>
                            </div>
                            <div className="col-2 form-group mb-5 mx-auto"><button className="px-4 py-2 rounded text-center text-light h4">Submit</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;