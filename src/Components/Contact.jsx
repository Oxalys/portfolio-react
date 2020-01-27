import React from 'react';

const Contact = () => {

    return (
        <div id="contact">
            <h1 className="text-center py-4 display-4 text-light">- Contact -</h1>
            <form className="d-flex container">
                <div class="row container justify-content-center">
                    <div class="form-group col-6">
                        <label className="h4">Name</label>
                        <input type="text" class="form-control input-lg" />
                    </div>
                    <div class="form-group col-6">
                        <label className="h4">Email</label>
                        <input type="text" class="form-control input-lg" />
                    </div>
                </div>
                <div class="row container justify-content-center">
                    <div class="form-group col-6">
                        <label className="h4">Phone Number</label>
                        <input type="text" class="form-control input-lg" />
                    </div>
                    <div class="form-group col">
                        <label className="h4">Sujet</label>
                        <input type="text" class="form-control input-lg" />
                    </div>
                </div>
                <div className="row container">
                    <div class="form-group col-12">
                        <label className="h4">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Contact;