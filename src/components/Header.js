import React from 'react'
import Logo from './../img/favicon.jpg'

function Header() {
    return (
      <div>
       <nav id="nav-header" className="navbar fixed-top bg-primary shadow-lg">
       <a className="pl-lg-5 navbar-brand media" id="logo" href="#home">
            <img src={Logo} width="70" height="" className="mr-3 d-inline-block align-top rounded-circle" alt="logo" />
            <div className="mt-2">
                <h4 className="text-light">Bhuvi</h4>
                <h6 className="text-body">Portfolio Website</h6>
            </div>
        </a>
        <label className="btn btn-light ssm-toggle-nav mr-lg-5 mr-sm-2"><i className="fas fa-bars"></i></label>
        </nav>
      </div>
    )
}

export default Header
