import { Html } from 'next/document'
import React, { Fragment } from 'react';
import Head from 'next/head'
import react from 'react'
import { Footer} from '../components/Footer';

function Home(){
    return (
    <Fragment>
    <div>
    <head>
        <meta charSet='UTF-8'></meta>
        <title>Henrique Friggi WebSite</title>
        <link rel='stylesheet' href='styles.css'></link>
    </head>
    <nav className='ml-auto'>
        <div className='Tittle'>
            <h1>
                Henrique 
            </h1>
        </div>
        <div className='menu'>
            <ul>
                <li>
                    <a href='#' data-text='&nbsp;Home'>&nbsp;Home</a>
                </li>
                <li>
                    <a href='#' data-text='&nbsp;About'>&nbsp;About</a>
                </li>
                <li>
                    <a href='#' data-text='&nbsp;Projects'>&nbsp;Projects</a>
                </li>
                <li>
                    <a href='#' data-text='&nbsp;Work'>&nbsp;Work</a>
                </li>
                <li>
                    <a href='#' data-text='&nbsp;Contact'>&nbsp;Contact</a>
                </li>
            </ul>
        </div>
    </nav>
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