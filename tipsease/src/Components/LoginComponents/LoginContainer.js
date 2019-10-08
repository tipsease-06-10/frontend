import React, { Component } from 'react';
import LoginForm from './LoginForm';

class LoginContianer extends Component {
    render() {
        return (
            <div className='login-container container'>
                <LoginForm history={this.props.history} />
            </div>
        )
    }
}

export default LoginContianer;