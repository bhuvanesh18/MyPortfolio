import React from 'react';

function ProjectCard(props) {

    let fontend =  props.frontend?<li className="list-group-item"><b>Frontend: </b>{props.frontend}</li> : '';
    let backend =  props.backend?<li className="list-group-item"><b>Backend: </b>{props.backend}</li> : '';
    let developed_on = props.developed_on?<li className="list-group-item"><b>Developed On: </b>{props.developed_on}</li> : '';

    let companydetails = props.companyname ? 
    <React.Fragment>
        <li className="list-group-item"><b>Company Name: </b>{props.companyname}</li>
        <li className="list-group-item"><b>Location: </b>{props.companylocation}</li>
        <li className="list-group-item"><b>Official Website: </b><a href={props.companylink} target="_blank" rel="noopener noreferrer">{props.companylink}</a></li> 
    </React.Fragment>: '';
    
    const {image_name,project_name,link,year,modal_id} = props;
    let target_modal_id = '#'+modal_id;
    
    return (
            <div className="col mb-4">
                <div className="card h-100">
                    <a href={link} target="_blank" rel="noopener noreferrer" ><img src={require(`./../../img/website_pic/${image_name}.jpg`)} className="card-img-top" alt={project_name} /></a>
                    <div className="card-body">
                        <h5 className="card-title">{project_name}</h5>
                        <div className="card-text">
                            <ul className="list-group list-group-flush">
                                {fontend}
                                {backend}
                                {developed_on}
                                {companydetails}
                            </ul>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="button" className="btn btn-success btn-sm" title="For link and description" data-toggle="modal" data-target={target_modal_id}>View Details</button>
                        </div>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Developed in {year}</small>
                    </div>
                </div>
            </div>
    )
}

export default ProjectCard
