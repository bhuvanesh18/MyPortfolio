import React from 'react';

function LoadingSpinner() {
    return (
    <div style={{display:"block" ,zIndex: 2000}}>
        <div className={`bg-dark d-flex align-items-center justify-content-center`} style={{ width:100+"%" , height:100+"vh"}}>
            <div className="spinner-grow text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-warning" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-success" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-danger" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    </div>
    )
}

export default LoadingSpinner
