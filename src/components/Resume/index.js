import React from 'react'
import Section from './../mini_components/Section'

function index() {
    return (
        <Section id="my-resume" title="My Resume">
            <div className="d-none d-md-block d-lg-block d-xl-block">
                <div className="d-flex justify-content-center">
                    <embed src={require(`./../../resume/M_Bhuvaneshwaran_Resume.pdf`)+'#toolbar=0'} width="80%" height="450px"></embed>
                </div>
            </div>
            <div className="alert alert-danger d-block d-md-none d-lg-none d-xl-none" role="alert">
                Resume preview does not support on mobile devices! So please use the View or Download button to view my resume.
            </div>
            <div className="d-flex justify-content-around my-4">
                <a href="/resume/M_Bhuvaneshwaran_Resume.pdf" type="application/pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View My Resume</a>
                <a href="/resume/M_Bhuvaneshwaran_Resume.pdf" download="MBhuvaneshwaran-resume" className="btn btn-success">Download My Resume</a>
            </div>
        </Section>
    )
}

export default index
