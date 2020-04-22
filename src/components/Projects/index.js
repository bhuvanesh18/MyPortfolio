import React from 'react';
import Section from './../mini_components/Section';
import ProjectModal from './ProjectModals';
import ProjectCard from './ProjectCards';

function index() {
    return (
        <Section id="my-projects" title="My Projects" >
            <ProjectModal />
            <div className="row row-cols-1 row-cols-md-3">
                <ProjectCard />
            </div>
        </Section>
    )
}

export default index
