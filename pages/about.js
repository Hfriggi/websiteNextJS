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
                </div>
                <div className='aboutText'>
                        <center>
                        <h1>Let me introduce myself</h1>
                        </center>
                        <p> <br/>Hi Everyone! I am Henrique Friggi from Indaial - Brasil. I am a Junior
                        developer, undergraduated in Sistems Develpment and Analisys. <br/> I fall in
                        love with codding when i get in university, since there i have learn more about every day.
                        <br/><br/>
                        I am most experience in <a>C, C++ and Python</a>. <br />
                        I am learning <a>HTML, CSS and JavaScript</a>.
                        <br/><br/>
                        My main Interests areas are <a>Web Technologies and Products, Mobile Development and Control Sistems</a>. 
                        <br/><br/>
                        For now, i am applying my passion studing <a>modern JavaScript's libraries and Frameworks</a> like  
                        <a> ReactJS and NextJS</a>.
                        <br/><br/>
                        Apart codding, some other activitys i love to do:
                        <br/> Play games.
                        <br/> Astrophotography.
                        <br/> Read books.
                        </p>
                    </div>
                <div className='skillsetBox'>
                    <center>
                        <h1>
                             My Skillset
                        <br/><br/>
                        </h1>
                        <div className='icons'>
                            <i class="devicon-javascript-plain"></i>
                            <i class="devicon-html5-plain-wordmark"></i>
                            <i class="devicon-css3-plain-wordmark"></i>
                            <i class="devicon-c-plain-wordmark"></i>
                            <i class="devicon-cplusplus-line-wordmark"></i>
                            <i class="devicon-python-plain-wordmark"></i>
                            <i class="devicon-react-original-wordmark"></i>
                            <i class="devicon-nextjs-original-wordmark"></i>
                            <h1>
                             Tools I use
                            </h1>
                            <br/><br/>
                            <i class="devicon-vscode-plain-wordmark"></i>
                            <i class="devicon-git-plain"></i>
                            <i class="devicon-github-original-wordmark"></i>
                            <i class="devicon-amazonwebservices-plain-wordmark"></i>
                        </div>
                    </center>
                </div>
            </div>
        </body>
        <Footer />
        </Fragment>
)
}

export default Home;