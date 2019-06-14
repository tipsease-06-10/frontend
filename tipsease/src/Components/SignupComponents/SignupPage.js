import React, { Component } from 'react';
import SignupForm from './SignupForm';
import{ connect } from 'react-redux';


class SignupPage extends Component {
    render() {
        const { userSignupRequest } = this.props;
        return (
            <div className='signup-container container'>
                <SignupForm userSignupRequest={userSignupRequest} />
            </div>
        )
    }
}

export default SignupPage