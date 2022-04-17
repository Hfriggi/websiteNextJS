import { Html } from 'next/document'
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
    <div className='body1'>
        <body>
            <center>
                <h1 className='TextTitle'>
                    A Short Introduction
                </h1>
                <a className='TextDescribe'>
                    I'm a Brazilliam Developer in formation, learning front-end and React Native!
                </a>
            </center>
        </body>
    </div>
    <Footer />
    </Fragment>
)
}

export default Home;