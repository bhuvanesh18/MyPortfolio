import React from 'react';
import Modal from './../mini_components/Modal';

function ProjectModals() {
    return (
        <React.Fragment>
            <Modal modal_id="tuvalabs_style_modal" project_name="Tuvalabs UI Style Framework" link="https://github.com/bhuvanesh18/Intern-Tuva-Styles" description="This is my Intern work in Tuvalabs company. I created the UI Style framework for the tuvalabs company using Sass."/>
            <Modal modal_id="tuvalabs_style_react_doc_modal" project_name="Tuvalabs Style-React Document" link="http://tuvalabs-style.netlify.app/" description="This is my Intern work in Tuvalabs company.This website is used as the documentation for the created UI style of the Tuvalabs company. This is my first ReactJs project."/>
        </React.Fragment>
    )
}

export default ProjectModals
