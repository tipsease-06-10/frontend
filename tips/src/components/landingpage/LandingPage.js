import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import hero from '../imgs/tip.jpg';
import './LandingPage.css';
//components
import LogIn from '../login/LogIn';
// change to landing page
class LandingPage extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <header className="header-menu">
                        <div className="ui container">
                            <h1>TipSease</h1>
                            <div className="btn">
                                {/* <Link  to="/login" className="log-in" component={ LogIn }>Log in</Link> */}
                                {/* <Link to="/sign-up" className="sign-up">Sign up</Link> */}
                                <button className="log-in">Log in</button>
                                <button className="sign-up">Sign up</button>
                            </div>
                        </div>
                    </header>
                    <img className="hero" src={hero} alt="tipjar"/>
                </Fragment>
            </Router>
        )
    }
}

export default LandingPage;
