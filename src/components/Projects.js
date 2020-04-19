import React from 'react';
import Discipline from './../img/website_pic/discipline.jpg';
import Survey from './../img/website_pic/survey.jpg';
import Friends from './../img/website_pic/friends.jpg';
import Intrameet from './../img/website_pic/intrameet.jpg';

function Projects() {
    return (
        <div className="container pt-5" id="my-projects">
            <h1 className="text-warning py-4 display-4">My Projects</h1>
            <div className="row row-cols-1 row-cols-md-3">
                <div className="col mb-4">
                    <div className="card h-100">
                        <img src={Discipline} className="card-img-top" alt="discipline_website" />
                        <div className="card-body">
                            <h5 className="card-title">Discipline Management</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card h-100">
                        <img src={Survey} className="card-img-top" alt="discipline_website" />
                        <div className="card-body">
                            <h5 className="card-title">Anonymous Survey</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card h-100">
                        <img src={Friends} className="card-img-top" alt="discipline_website" />
                        <div className="card-body">
                            <h5 className="card-title">Friends Polling System</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card h-100">
                        <img src={Intrameet} className="card-img-top" alt="discipline_website" />
                        <div className="card-body">
                            <h5 className="card-title">Cse Department Intrameet</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
