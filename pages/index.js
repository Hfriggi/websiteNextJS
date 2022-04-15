import { Html } from 'next/document'
import Head from 'next/head'

function Home(){
    return (
    <div>
    <head>
        <meta charSet='UTF-8'></meta>
        <title>HenriqueFriggi</title>
        <link rel='stylesheet' href='styles.css'></link>
    </head>
    <body>
    <h1>Henrique Friggi Website</h1>
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
    </body>
    </div>
)}

export default Home