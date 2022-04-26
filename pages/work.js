import {Footer} from '../components/Footer';
import { Header } from '../components/Header';
import React, { Fragment } from 'react';

function Home(){
    return (
        <Fragment>
        <Header/>
        <script src="mobileButton.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        
        <Footer />
        </Fragment>
)
}

export default Home;