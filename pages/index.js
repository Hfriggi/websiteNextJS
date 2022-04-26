import { Html } from 'next/document'
import Image from 'next/image';
import React, { Fragment } from 'react';
import Head from 'next/head'
import react from 'react'
import {Footer} from '../components/Footer';
import { Header } from '../components/Header';


function Home(){
    return (
    <Fragment>
    <body className='HomeBody'>
    <Header/>
    <script src="mobileButton.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <center>
        <div className='projects'>
            <div className='container'>
                <div className='image'>
                    <img className='perfilImage' src='/images/perfil.jpg'/>
                </div>
                <div className='firstText'>
                    <h1>Hey! Welcome to my WebSite!</h1>
                </div>
                <div className='boxProjects'>
                    <span></span>
                        <div className='content'>
                            <h2>A Short Introduction</h2>
                            <p>Graduating in Control and Automation Engineering and front-end developer in training. 
                                Amateur astronomer. Self-taught, motivated and fascinated by technology. 
                                My first experience codding was in my university. Since there i look to improve 
                                my skills to get better.</p>
                            <a href='/about'>Read More In About</a>
                        </div>
                    </div>
                </div>
            </div>
        </center>
        <script src="mobile-navbar.js"></script>
        <head>
        <meta charSet='UTF-8'></meta>
        <title>Henrique Friggi WebSite</title>
        <link rel='stylesheet' href='styles.css'></link>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.10.1/devicon.min.css"></link>
    </head>
    </body>
    <Footer />
    </Fragment>
)
}

export default Home;