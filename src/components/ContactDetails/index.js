import React from 'react'
import Section from '../mini_components/Section'

function index() {
    return (
        <Section id="contact-me" title="Contact Me">
            <div className="container">
                <div className="text-center py-2">
                    <h6>Name :<span className="lead">M Bhuvaneshwaran</span></h6>
                    <h6>Location : <span className="lead">Dindigul, TamilNadu, India</span></h6>
                    <h6><span>Phone : </span><a href="tel:+919500352849" className="lead">9500352849</a></h6>
                    <h6><span>Mail ID : </span><a href="mailto:bhuvaneshwaranmurugesh@gmail.com" target="_target" className="lead">bhuvaneshwaranmurugesh@gmail.com</a></h6>
                    <div className="d-flex justify-content-center my-4">
                    <a href="tel:+919500352849" className="btn btn-primary mx-4" role="button">Call Me</a>
                    <a href="mailto:bhuvaneshwaranmurugesh@gmail.com" target="_target" className="btn btn-success mx-4" role="button">Mail Me</a>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default index
