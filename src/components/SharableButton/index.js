import React, { Component } from 'react';
import $ from 'jquery';
import ShareLogo from './../../img/social_media_icons/sharelogo.png';

class index extends Component {

    constructor(props) {
        super(props)
        this._shareClickHandler = this._shareClickHandler.bind(this);
    }

    componentDidMount(){
        this._shareClickHandler();
    }

    _shareClickHandler(){
        $('#sharebutton').on('click',function(){
            const title = 'Bhuvaneshwaran | Portfolio Website';
            const text = 'See all My Internship works, Projects, Certificates and My Resume in the website. If you have any query, feel free to contact me and I am glad to answer.\n\nWebsite Link:\n';
            const url = 'https://bhuvaneshwaran.netlify.app';
            if(navigator.share){
                console.log('Navigator Works');
                navigator.share({
                    title: `${title}`,
                    text: `${text}`,
                    url: `${url}`
                }).then( () => {
                    console.log('Thanks for sharing!');
                    alert('Thanks for sharing!');
                })
                .catch(console.error);
            }else{
                console.log('Nagivator Not Working!');
                alert(`Sorry, Sharing Does Not Support In This Browser!\n\nNote:\n      Use the chrome or firefox browser to open this website or you can manualy copy the website link which is given bellow for sharing!\n\nWebsite Name - ${title}\n\nWebsite Link - ${url}`);
            }

        })
    } 

    render() {
        return (
            <React.Fragment>
                <div className="fixed-bottom mb-3">
                    <div className="d-flex justify-content-end mr-2">
                        <img src={ShareLogo} alt="Share Logo" id="sharebutton" width="50px" height="50px"/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default index
