import React from 'react'

function Skills() {
    return (
        <div className="container pt-5" id="my-skills">
            <h1 className="text-warning py-4 display-4">My Skills</h1>
                <div className="shadow rounded py-4">
                    <div className="row px-4 py-2">
                        <div className="col-4">
                            <h6 className="text-primary">Programming Languages</h6>
                        </div>
                        <div className="col-6">
                            <p>C, Python, Java</p>
                        </div>
                    </div>
                    <div className="row px-4 py-2">
                        <div className="col-4">
                            <h6 className="text-primary">Fontend</h6>
                        </div>
                        <div className="col-6">
                            <p>HTML5, JavaScript, ReactJs, Jquery</p>
                        </div>
                    </div>
                    <div className="row px-4 py-2">
                        <div className="col-4">
                            <h6 className="text-primary">Designs</h6>
                        </div>
                        <div className="col-6">
                            <p>CSS3, SASS, Bootstrap</p>
                        </div>
                    </div>
                    <div className="row px-4 py-2 py-2">
                        <div className="col-4">
                            <h6 className="text-primary">Backend</h6>
                        </div>
                        <div className="col-6">
                            <p>PHP, SOL, MySQL</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Skills
