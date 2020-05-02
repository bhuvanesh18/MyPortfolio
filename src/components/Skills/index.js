import React from 'react'
import Section from '../mini_components/Section'

function index() {
    return (
        <Section id="my-skills" title="My Skills">
            <div className="shadow rounded py-4">
                <div className="row px-4 py-2">
                    <div className="col-5">
                        <h6 className="text-primary">Programming Languages</h6>
                    </div>
                    <div className="col-6">
                        <p>C, Python, Java</p>
                    </div>
                </div>
                <div className="row px-4 py-2">
                    <div className="col-5">
                        <h6 className="text-primary">Fontend</h6>
                    </div>
                    <div className="col-6">
                        <p>HTML5, JavaScript, ReactJs, Jquery</p>
                    </div>
                </div>
                <div className="row px-4 py-2">
                    <div className="col-5">
                        <h6 className="text-primary">Designs</h6>
                    </div>
                    <div className="col-6">
                        <p>CSS3, SASS, Bootstrap</p>
                    </div>
                </div>
                <div className="row px-4 py-2 py-2">
                    <div className="col-5">
                        <h6 className="text-primary">Backend</h6>
                    </div>
                    <div className="col-6">
                        <p>PHP, SQL, MySQL</p>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default index
