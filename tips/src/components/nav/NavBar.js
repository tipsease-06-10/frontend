import React, { Component, Fragment } from 'react'
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <Fragment>
                <header className="header-menu">
                    <div className="ui container">
                        <h1>TipSease</h1>
                        <div className="btn">
                            <button className="log-in">Log in</button>
                            <button className="sign-up">Sign up</button>
                        </div>
                    </div>
                </header>
            </Fragment>
        )
    }
}

export default NavBar
