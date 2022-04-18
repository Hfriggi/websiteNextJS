import {Footer} from '../components/Footer';
import { Header } from '../components/Header';
import React, { Fragment } from 'react';

function Home(){
    return (
        <Fragment>
        <Header/>
    <body className='projects'>
        <div className='container'>
            <div className='boxProjects'>
                <span></span>
                    <div className='content'>
                    <center>
                        <h2>Twitter bot</h2>
                        <p>In this project, i made a script in python who gets the AstroPhotography Of the Day (APOD) 
                            from NASA and Astrobin, 2 of the most famous astronomy sites, 
                            and post in a twitter account using Twitter API. Next step is deploy in AWS.</p>
                        <a href='https://github.com/Hfriggi/AstroBot'>Read More</a>
                    </center>
                    </div>
                </div>
            <div className='boxProjects'>
                <span></span>
                    <div className='content'>
                        <center>
                        <h2>Portfolio WebSite NextJS</h2>
                        <p>I found about NextJS in my front-end course, i became surprise how easy and fast is 
                            deploy a website with this framework. So i decide to test it out, using a template to 
                            make my fist portfolio, so here we are!</p>
                        <a href='https://github.com/Hfriggi/websiteNextJS'>Read More</a>
                        </center>
                    </div>
                </div>
            <div className='boxProjects'>
                <span></span>
                    <div className='content'>
                        <center>
                        <h2>Equatorial Mount - Astrophotography</h2>
                        <p>I'm developing a robotic arm that guides a telescope across the sky with 
                            enough precision to do long exposure photography. This equipment is controlled 
                            by Arduino microcontrollers with OnStep open source software, which should be 
                            modified to meet my mechanical specifications.</p>
                        <a href='#'>Read More</a>
                        </center>
                    </div>
                </div>
            </div>
        </body>
        <Footer />
        </Fragment>
)
}

export default Home;