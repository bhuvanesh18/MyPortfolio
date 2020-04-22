import React from 'react';
import Modal from './../mini_components/Modal';

function ProjectModals() {
    return (
        <React.Fragment>
            <Modal modal_id="discipline_modal"  project_name="Discipline Managemet" link="https://discipline.mkce.ac.in" description="This website is used as my college's official discipline management website."/>
            <Modal modal_id="survey_modal"  project_name="Anonymous Survey" link="https://mkce.ac.in/survey" description="This website is used as my college's official anonymous survey analysis website."/>
            <Modal modal_id="friends_modal"  project_name="Friends Polling System" link="https://friendsaward.000webhostapp.com" description="This website has email authentication(using otp verification) and is used as a award polling system."/>
            <Modal modal_id="intrameet_modal"  project_name="Cse Department Intrameet" link="https://cseintrameet.epizy.com" description="This website is used by my department's official intrameet registration website."/>
            <Modal modal_id="sparkle_modal" project_name="Sparkle Team Website" link="https://sparkle-best6.epizy.com" description="This website is created for my sparkle team, to motivate my team members to got the third price."/>
            <Modal modal_id="tuvalabs_style_modal" project_name="Tuvalabs UI Style Framework" link="https://github.com/bhuvanesh18/Intern-Tuva-Styles" description="This is my Intern work in Tuvalabs company. I created the UI Style framework for the tuvalabs company using Sass."/>
            <Modal modal_id="twitter_modal" project_name="Tweet Tweet Analysis" link="https://twitter-tweet-analysis.herokuapp.com/" description="This website is my first ML project. I created this website for my team in ML training program conducted by my department in this third year. This is developed on python Django framework."/>
            <Modal modal_id="tuvalabs_style_react_doc_modal" project_name="Tuvalabs Style-React Document" link="http://tuvalabs-style.netlify.app/" description="This is my Intern work in Tuvalabs company.This website is used as the documentation for the created UI style of the Tuvalabs company. This is my first ReactJs project."/>
        </React.Fragment>
    )
}

export default ProjectModals
