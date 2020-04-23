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
            console.log('Share Button Clicked!');
            const title = window.document.title;
            const url = window.document.location.href;

            if(navigator.share){
                console.log('Navigator Works');
                navigator.share({
                    title : `${title}`,
                    url : `${url}`
                }).then( () => {
                    console.log('Thanks for sharing!!!');
                })
                .catch(console.error);
            }else{
                console.log('Nagivator Not Working!!');
            }

        })
    } 

    render() {
        return (
            <React.Fragment>
                <div className="fixed-bottom mb-3">
                    <div className="d-flex justify-content-end mr-2">
                        <img src={ShareLogo} alt="Share Logo" className="btn" role="button" type="button" id="sharebutton" width="80px" height="70px"/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default index
