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
    <Header/>
    <head>
        <meta charSet='UTF-8'></meta>
        <title>Henrique Friggi WebSite</title>
        <link rel='stylesheet' href='styles.css'></link>
    </head>
    <body className='HomeBody'>
        <center>
        <div className='projects'>
            <div className='container'>
                <div className='image'>
                    <img src='/images/perfil.jpg'/>
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
                                My first experience codding was in my university. Since there i look every day i can to improve 
                                my skills to get better.</p>
                            <a href='/about'>Read More In About</a>
                        </div>
                    </div>
                </div>
            </div>
        </center>
    </body>
    <Footer />
    </Fragment>
)
}

export default Home;