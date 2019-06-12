import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../actions';
import { connect } from 'react-redux';

class LoginForm extends Component {
    state = {
            username: '',
            password: ''    
    };

    handleChange = e => {
        this.setState({
                [e.target.name]: e.target.value
            });
         };

    login = e => {
      e.preventDefault();
       this.props
         .login({
             username: this.state.username,
             password: this.state.password
         });
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
                value={this.state.username}
                onChange={this.handleChange} 
                />
             <input 
                type='password'
                name='password' 
                placeholder='Enter your password...'
                value={this.state.password}
                onChange={this.handleChange} 
                />
                    <p><Link to='/login' className='form-btn btn-large'>Login</Link></p>
                    <p><Link to='/signup' className='form-btn btn-large'>Don't have an account? Sign up here!</Link></p>
                </form>
                <form onSubmit={this.login} className='worker-login'>
                  <h2>Service Worker Login</h2>
                    <input 
                       type='text' 
                       placeholder='Enter your username...'
                       value={this.state.username}
                       onChange={this.handleChange} 
                       />
                    <input 
                       type='password' 
                       placeholder='Enter your password...'
                       value={this.state.password} 
                       onChange={this.handleChange}
                       />
                    <p><Link to='/login' className='form-btn btn-large'>Login</Link></p>
                    <p><Link to='/signup' className='form-btn btn-large'>Don't have an account? Sign up here!</Link></p>
                </form>
            </div>
            )
        }  
    }

    const mapStateToProps = state => ({
        username: state.username,
        password: state.password
    });
    
export default connect(
    mapStateToProps,
    { login }
)(LoginForm);