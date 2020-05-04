import React from 'react';

function SideNavMenus() {
    return (
        <ul className="nav flex-column pl-5 my-4">
            <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
            </li>
            {/*
            <li className="nav-item">
                <a className="nav-link" href="#my-skills">My Skills</a>
            </li>
            */}
            <li className="nav-item my-2">
                <a className="nav-link d-inline" href="#my-projects">My Projects</a>
                <span className="badge badge-dark">9</span>
            </li>
            <li className="nav-item my-2">
                <a className="nav-link d-inline" href="#my-intern-works">My Intern Works</a>
                <span className="badge badge-dark">2</span>
            </li>
            <li className="nav-item my-2">
                <a className="nav-link d-inline" href="#my-certificates">My Certificates</a>
                <span className="badge badge-dark">8</span>
            </li>
            {/*
            <li className="nav-item">
                <a className="nav-link" href="#my-resume">My Resume</a>
            </li>
            */}
            <li className="nav-item">
                <a className="nav-link" href="#my-social-network">My Social Network</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#contact-me">Contact Me</a>
            </li>
        </ul>
    )
}

export default SideNavMenus
