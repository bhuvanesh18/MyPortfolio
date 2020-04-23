import React from 'react';
import ProfilePic from './../img/6.jpg';

function Home() {
    return (
        <div className="wrapper pt-5" id="home">
            <div className="container pt-5">
                <div className="py-5">
                    <div className="row">
                        <div className="col-9 align-self-center">
                            <h2 className="display-3 d-none d-sm-block d-md-block d-lg-block d-xl-block">M Bhuvaneshwaran</h2>
                            <h2 className="d-block d-sm-none d-md-none d-lg-none d-xl-none">M Bhuvaneshwaran</h2>
                            <h6 className="text-warning">B.E Computer science and engineering</h6>
                            <h6><span>Mail ID : </span><a href="mailto:bhuvaneshwaranmurugesh@gmail.com" target="_target">bhuvaneshwaranmurugesh@gmail.com</a></h6>
                            <h6><span>Phone : </span><a href="tel:+919500352849">9500352849</a></h6>
                        </div>
                        <div className="col-3">
                            <div className="media">
                                <img src={ProfilePic} className="rounded-lg shadow" alt='Bhuvaneshwaran' width="80%"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
