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
    <body>
        <center>
            <div className='image'>
                <img src='/images/perfil.jpg'/>
            </div>
            <div className='box'>
                <h1 className='TextTitle'>
                    A Short Introduction
                </h1>
                <a className='TextDescribe'>
                Graduating in Control and Automation Engineering and front-end developer in training. Amateur astronomer. Self-taught, motivated and fascinated by technology.
                </a>
            </div>
        </center>
    </body>
    <Footer />
    </Fragment>
)
}

export default Home;