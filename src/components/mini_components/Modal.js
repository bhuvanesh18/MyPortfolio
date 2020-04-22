import React from 'react'

function ProjectModal(props) {
    const {modal_id,project_name,link,description} = props;
    let inner_modal_id="inner"+modal_id;
    return (
        <div className="modal fade" id={modal_id} tabIndex="-1" role="dialog" aria-labelledby={inner_modal_id} aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id={inner_modal_id}>{project_name}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>{description}</p>
                    <b className="text-warning clearfix">Link:</b>
                    <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
                    <a href={link} target="_blank" rel="noopener noreferrer" type="button" className="btn btn-success btn-sm">View website</a>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal
