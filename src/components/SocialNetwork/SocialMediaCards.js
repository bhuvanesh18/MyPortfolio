import React from 'react';
import Card from './../mini_components/Card';

function SocialMediaCards() {
    return (
        <React.Fragment>
            <Card image_dir='social_media_icons/linkedin.png' link='https://www.linkedin.com/in/bhuvaneshwaran-m-4a50751a0/' tip="LinkedIn"/>
            <Card image_dir='social_media_icons/github.png' link='https://github.com/bhuvanesh18/' tip="Github"/>
            <Card image_dir='social_media_icons/facebook.png' link='https://www.facebook.com/bhuvanesh.bhuvanesh.9847' tip="Facebook"/>
            <Card image_dir='social_media_icons/instagram.jpg' link='https://www.instagram.com/_i_m_bhuvi_/' tip="Instagram"/>
            <Card image_dir='social_media_icons/whatsapp.png' link='https://wa.me/9500352849' tip="Whatsapp"/>
        </React.Fragment>
    )
}

export default SocialMediaCards
