import React from 'react'
import Section from '../mini_components/Section'
import Man from './../../img/man.png';
import SocialMediaCards from './SocialMediaCards';

function index() {
    return (
        <Section id="my-social-network" title="My Social Network">
            <div className="d-flex">
                <img src={Man} className="img-fluid" alt='Bhuvaneshwaran_png_creation'/>
                <div className="align-self-center">
                    <p  className="text-center text-primary lead py-2">Click the bellow icons to Connect with me.</p>
                    <div className="row row-cols-3 row-cols-md-6 justify-content-center">
                        <SocialMediaCards />
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default index
