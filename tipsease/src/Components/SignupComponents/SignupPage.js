import React, { Component } from 'react';
import SignupForm from './SignupForm';

class SignupPage extends Component {
    render() {
        return (
            <div className='signup-container container'>
                <SignupForm />
            </div>
        )
    }
}

export default SignupPage;