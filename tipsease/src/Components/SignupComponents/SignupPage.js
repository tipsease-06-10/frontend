import React, { Component } from 'react';
import SignupForm from './SignupForm';
import{ connect } from 'react-redux';
import { userSignupRequest } from '../../store/actions/signupActions';

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

export default connect(null, {userSignupRequest})(SignupPage);