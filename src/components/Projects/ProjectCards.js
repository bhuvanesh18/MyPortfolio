import React from 'react';
import Card from './../mini_components/Card';

function ProjectCards() {
    return (
        <React.Fragment>
            <Card modal_id="discipline_modal" image_name="discipline" project_name="Discipline Managemet" link="https://discipline.mkce.ac.in" frontend="HTML5, CSS3, Jquery" backend="PHP, SQL, MySQL" year="2019"/>
            <Card modal_id="survey_modal" image_name="survey" project_name="Anonymous Survey" link="https://mkce.ac.in/survey" frontend="HTML5, CSS3, Bootstrap, JavaScript" backend="PHP, SQL, MySQL" year="2019"/>
            <Card modal_id="friends_modal" image_name="friends" project_name="Friends Polling System" link="https://friendsaward.000webhostapp.com" frontend="HTML5, CSS3, Bootstrap, JavaScript" backend="PHP, SQL, MySQL" year="2019"/>
            <Card modal_id="intrameet_modal" image_name="intrameet" project_name="Cse Department Intrameet" link="https://cseintrameet.epizy.com" frontend="HTML5, CSS3, Bootstrap" backend="PHP, SQL, MySQL" year="2019"/>
            <Card modal_id="sparkle_modal" image_name="sparkle" project_name="Sparkle Team Website" link="https://sparkle-best6.epizy.com" frontend="HTML5, CSS3, Bootstrap" year="2019"/>
            <Card modal_id="tuvalabs_style_modal" image_name="tuvalabs-style" project_name="Tuvalabs UI Style Framework" link="https://github.com/bhuvanesh18/Intern-Tuva-Styles" developed_on="SASS, CSS" year="2019"/>
            <Card modal_id="twitter_modal" image_name="twitter-tweet-analysis" project_name="Tweet Tweet Analysis" link="https://twitter-tweet-analysis.herokuapp.com/" frontend="HTML5, CSS3, Bootstrap" developed_on="Python, Django Framework" year="2020"/>
            <Card modal_id="tuvalabs_style_react_doc_modal" image_name="tuvalabs-style-react-doc" project_name="Tuvalabs Style-React Document" link="http://tuvalabs-style.netlify.app/" frontend="HTML5, CSS3" developed_on="ReactJs" year="2020"/>
        </React.Fragment>
    )
}

export default ProjectCards