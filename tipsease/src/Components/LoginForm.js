import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../actions';
import { connect } from 'react-redux';

class LoginForm extends Component {
    state = {
        creds: {
            username: '',
            password: ''
        }
    };

    handleChanges = e => {
        this.setState({
            creds: {
                ...this.state.creds,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
      e.preventDefault();
       this.props
         .login(this.state.creds);
    };

    render() {
      return (
        <div>
          <form onSubmit={this.login} className='user-login'>
            <h2>User Login</h2>
             <input
                type='text'
                name='username' 
                placeholder='Enter your username...'
                value={this.state.creds.username}
                onChange={this.handleChanges} 
                />
             <input 
                type='password'
                name='password' 
                placeholder='Enter your password...'
                value={this.state.creds.password}
                onChange={this.handleChanges} 
                />
                    <Link to='/login' className='form-btn btn-large'>Login</Link>
                    <Link to='/signup' className='form-btn btn-large'>Don't have an account? Sign up here!</Link>
                </form>
                <form onSubmit={this.login} className='worker-login'>
                  <h2>Service Worker Login</h2>
                    <input 
                       type='text' 
                       placeholder='Enter your username...'
                       value={this.state.creds.username}
                       onChange={this.handleChanges} 
                       />
                    <input 
                       type='password' 
                       placeholder='Enter your password...'
                       value={this.state.creds.password} 
                       onChange={this.handleChanges}
                       />
                    <Link to='/login' className='form-btn btn-large'>Login</Link>
                    <Link to='/signup' className='form-btn btn-large'>Don't have an account? Sign up here!</Link>
                </form>
            </div>
            )
        }
        
    }

    const mapStateToProps = ({ isLoggedIn }) => ({
        isLoggedIn
    });
    
export default connect(
    mapStateToProps,
    { login }
)(LoginForm);