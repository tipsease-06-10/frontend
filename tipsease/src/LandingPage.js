import React from 'react';
import NavBar from './Components/NavBar';
import hero from './images/tip.jpg';

function LandingPage() {
    return (
        <div>
            <NavBar />
            <img src={ hero } alt='Tipjar Hero' />
        </div>
    )
}

export default LandingPage;