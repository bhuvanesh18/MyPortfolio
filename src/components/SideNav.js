import React from 'react'

function SideNav() {
    return (
        <nav className="myside-nav shadow">
            <div className="pl-5 py-5 container bg-primary">
                <div className="pl-3 mx-auto">
                    <div className="media">
                        <img src="./3.jpg" className="rounded-lg shadow-lg" alt="Profile" width="70%"/>
                    </div>
                </div>
            </div>
            <ul className="nav flex-column pl-5 my-4">
                <li className="nav-item">
                    <a className="nav-link text-warning" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-warning" href="#my-skills">My Skills</a>
                </li>
                <li className="nav-item my-2">
                    <a className="nav-link text-warning d-inline" href="#my-projects">My Projects</a>
                    <span className="badge badge-light">10</span>
                </li>
                <li className="nav-item my-2">
                    <a className="nav-link text-warning d-inline" href="#my-intern-works">My Intern Works</a>
                    <span className="badge badge-light">2</span>
                </li>
                <li className="nav-item my-2">
                    <a className="nav-link text-warning d-inline" href="#my-certificates">My Certificates</a>
                    <span className="badge badge-light">10</span>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-warning" href="#my-resume">My Resume</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-warning" href="#my-social-network">My Social Network</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-warning" href="#contact-me">Contact Me</a>
                </li>
            </ul>
      </nav>
    )
}

export default SideNav
