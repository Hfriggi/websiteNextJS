import {Footer} from '../components/Footer';
import { Header } from '../components/Header';
import React, { Fragment } from 'react';

function Home(){
    return (
        <Fragment>
        <Header/>
        <body className='aboutBody'>
            <div className='aboutMain'>
                <div className='aboutBox'>
                    <div className='aboutText'>
                        <center>
                        <h1>Let me introduce myself</h1>
                        </center>
                        <p> <br/>Hi Everyone! I am Henrique Friggi from Indaial - Brasil. I am a Junior
                        developer, undergraduated in Sistems Develpment and Analisys. <br/> I fell in
                        love with codding when i get in university, since there i have learn more about every day.
                        <br/><br/>
                        I am most experience in <a>C, C++ and Python</a>. <br />
                        I am learning <a>HTML, CSS and JavaScript</a>.
                        <br/><br/>
                        My main Interests areas are <a>Web Technologies and Products, Mobile Development and Control Sistems</a>. 
                        <br/><br/>
                        For now, i am applying my passion studing <a>modern JavaScript's libraries and Frameworks</a> like  
                        <a> ReactJS and NextJS</a>.
                        </p>
                    </div>
                </div>
            </div>
                <div className='aboutMain'> 
                    <img classname= 'aboutImg' src='/images/about.png' height={300}></img>
                </div>
        </body>
        <Footer />
        </Fragment>
)
}

export default Home;