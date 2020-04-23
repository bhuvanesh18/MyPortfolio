import React from 'react';
import ShareLogo from './../../img/social_media_icons/sharelogo.png';

function index() {
    return (
        <React.Fragment>
            <div className="fixed-bottom mb-3">
                <div className="d-flex justify-content-end mr-2">
                    <img src={ShareLogo} alt="Share Logo" className="btn" role="button" id="sharebutton" width="80px" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default index
