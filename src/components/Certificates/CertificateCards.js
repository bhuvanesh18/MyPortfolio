import React from 'react';
import Card from './../mini_components/Card';

function CertificateCards() {
    return (
        <React.Fragment>
            <Card title="Sololearn - HTML" image_dir='certificates/sololearn-html.jpg' link='/img/certificates/sololearn-html.jpg'/>
            <Card title="Sololearn - PHP" image_dir='certificates/sololearn-php.jpg' link='/img/certificates/sololearn-php.jpg'/>
            <Card title="Sololearn - C" image_dir='certificates/sololearn-c.jpg' link='/img/certificates/sololearn-c.jpg'/>
            <Card title="Sololearn - Python" image_dir='certificates/sololearn-python.jpg' link='/img/certificates/sololearn-python.jpg'/>
            <Card title="Guvi - Python" image_dir='certificates/guvi.jpg' link='/img/certificates/guvi.jpg'/>
            <Card title="Skillrack - Python" image_dir='certificates/skillrack.jpg' link='/img/certificates/skillrack.jpg'/>
            <Card title="Tcs-ion" image_dir='certificates/tcs-ion.jpg' link='/img/certificates/tcs-ion.jpg'/>
        </React.Fragment>
    )
}

export default CertificateCards
