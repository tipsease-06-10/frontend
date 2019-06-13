import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../store/actions';
import { connect } from 'react-redux';

class LoginForm extends Component {
    state = {
        creds: {
          username: '',
          password: ''
        }
    };

    handleChange = e => {
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
         .login(this.state.creds)
         .then(() => this.props.history.push('/workers'))
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
                onChange={this.handleChange} 
                />
             <input 
                type='password'
                name='password' 
                placeholder='Enter your password...'
                value={this.state.creds.password}
                onChange={this.handleChange} 
                />
                    <p><button className='form-btn btn-large'>Login</button></p>
                    <p><Link to='/signup' className='form-btn btn-large'>Don't have an account? Sign up here!</Link></p>
                </form>
                <form onSubmit={this.login} className='worker-login'>
                  <h2>Service Worker Login</h2>
                    <input 
                       type='text' 
                       placeholder='Enter your username...'
                       value={this.state.creds.username}
                       onChange={this.handleChange} 
                       />
                    <input 
                       type='password' 
                       placeholder='Enter your password...'
                       value={this.state.creds.password} 
                       onChange={this.handleChange}
                       />
                    <p><button className='form-btn btn-large'>Login</button></p>
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