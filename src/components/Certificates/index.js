import React from 'react';
import Section from './../mini_components/Section';
import CertificateCards from './CertificateCards';

function index() {
    return (
        <Section id="my-certificates" title="My Certificates">
            <div className="row row-cols-2 row-cols-md-4">
                <CertificateCards />
            </div>
        </Section>
    )
}

export default index
