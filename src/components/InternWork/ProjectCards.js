import React from 'react';
import Card from './../mini_components/Card';

function ProjectCards() {
    return (
        <React.Fragment>
            <Card modal_id="tuvalabs_style_modal" image_name="tuvalabs-style" project_name="Tuvalabs UI Style Framework" link="https://github.com/bhuvanesh18/Intern-Tuva-Styles" developed_on="SASS, CSS" year="2019" companyname="Tuvalabs" companylocation="Newyork" companylink="https://tuvalabs.com/"/>
            <Card modal_id="tuvalabs_style_react_doc_modal" image_name="tuvalabs-style-react-doc" project_name="Tuvalabs Style-React Document" link="http://tuvalabs-style.netlify.app/" frontend="HTML5, CSS3" developed_on="ReactJs" year="2020" companyname="Tuvalabs" companylocation="Newyork" companylink="https://tuvalabs.com/"/>
        </React.Fragment>
    )
}

export default ProjectCards