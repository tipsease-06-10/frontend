import React, { Component } from 'react';
import SignupForm from './SignupForm';

class SignupContainer extends Component {
//Sign Up Form logic will go here


    render() {
        return (
            <div className='signup-container container'>
                <SignupForm />
            </div>
        )
    }
}

export default SignupContainer;