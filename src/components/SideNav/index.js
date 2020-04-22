import React, { Component } from 'react'
import DarkTheme from './DarkTheme';
import SideNavMenus from './SideNavMenus';
import SideNavProfile from './SideNavProfile';

class index extends Component {

    render() {
        return (
            <nav id="drag-side-nav"  className="myside-nav shadow">
                <SideNavProfile />
                <SideNavMenus />
                <DarkTheme />
                <hr/>
                <p className="text-center text-muted">Version - 1.0</p>
            </nav>
        )
    }
}

export default index
