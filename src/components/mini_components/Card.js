import React from 'react';

function ProjectCard(props) {

    const {image_dir,title,link,year,modal_id,frontend,backend,developed_on,companyname,companylocation,companylink ,tip} = props;
    
    let frontend_render =  frontend?<li className="list-group-item"><b>Frontend: </b>{frontend}</li> : '';
    let backend_render =  backend?<li className="list-group-item"><b>Backend: </b>{backend}</li> : '';
    let developed_on_render = developed_on?<li className="list-group-item"><b>Developed On: </b>{developed_on}</li> : '';
    
    let companydetails = companyname ? 
    <React.Fragment>
        <li className="list-group-item"><b>Company Name: </b>{companyname}</li>
        <li className="list-group-item"><b>Location: </b>{companylocation}</li>
        <li className="list-group-item"><b>Official Website: </b><a href={companylink} target="_blank" rel="noopener noreferrer">{companylink}</a></li> 
    </React.Fragment>: '';

    let should_render_list;
    if(frontend_render!=='' || backend_render!=='' || developed_on_render!=='' || companyname!==''){
        should_render_list=true;
    }else{
        should_render_list=false;
    }

    let list_area = should_render_list ?
    <div className="card-text">
        <ul className="list-group list-group-flush">
            {frontend_render}
            {backend_render}
            {developed_on_render}
            {companydetails}
        </ul>
    </div> : '';
    
    let target_modal_id = modal_id ? '#'+modal_id : '';

    let should_render_button;
    if(target_modal_id!==''){
        should_render_button=true;
    }else{
        should_render_button=false;
    }

    let button_for_modal = should_render_button ?
    <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-success btn-sm" title="For link and description" data-toggle="modal" data-target={target_modal_id}>View Details</button>
    </div> : '';

    let footer_area = year ?
    <div className="card-footer">
        <small className="text-muted">Developed in {year}</small>
    </div> : '';

    let card_body = title ?
    <React.Fragment>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            {list_area}
            {button_for_modal}
        </div>
        {footer_area}
    </React.Fragment> : '';


    return (
            <div className="col mb-4">
                <div className="card h-100" data-toggle="tooltip" data-placement="top" title={tip}>
                    <a href={link} target="_blank" rel="noopener noreferrer" ><img src={require(`./../../img/${image_dir}`)} className="card-img-top" alt={title} /></a>
                    {card_body}
                </div>
            </div>
    )
}

export default ProjectCard
