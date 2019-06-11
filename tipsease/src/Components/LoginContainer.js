import React, { Component } from 'react';
import LoginForm from './LoginForm';

class LoginContianer extends Component {
// Login Form logic will go here


    render() {
        return (
            <div className='login-container container'>
                <LoginForm />
            </div>
        )
    }
}

export default LoginContianer;