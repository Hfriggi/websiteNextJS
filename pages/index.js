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
    <div>
    <head>
        <meta charSet='UTF-8'></meta>
        <title>Henrique Friggi WebSite</title>
        <link rel='stylesheet' href='styles.css'></link>
    </head>
    <body>
        <center>
            <h1>
                teste
            </h1>
        </center>
    </body>
    </div>
    <Footer />
    </Fragment>
)
}

export default Home;