import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../store/actions';

class SignupForm extends Component {
    state = {
        username: '',
        email: '',
        password: ''  
    };

onChange = e => {
  this.setState({ 
        ...this.state,
        [e.target.name]: e.target.value 
   });
};

createUser = e => {
  e.preventDefault();
  this.props
  .createUser(this.state)
  this.setState({
    username: '',
    email: '',
    password: ''
  })
};

  render() {
    return (
      <div>
          <form onSubmit={this.createUser}>
            <h2>Sign Up</h2>
              <label>Username: 
                <input 
                   type='text' 
                   value={this.state.username}
                   onChange={this.onChange}
                   name='username'
                   placeholder='Choose your Username'
                 />
                </label>
                <label>Email:  
                <input 
                   type='email' 
                   value={this.state.email}
                   onChange={this.onChange}
                   name='email'
                   placeholder='ex@email.com'
                 />
                </label>
                <label>Password: 
                  <input 
                    type='password'
                    value={this.state.password} 
                    onChange={this.onChange}
                    name='password'
                    placeholder='Create your password'
                 />
                </label>
            <button className='signup-btn btn-large'>Sign Up</button>
          </form>
      </div>
  )
 }
}
    
const mapStateToProps = state => ({
  username: state.username,
  email: state.email,
  password: state.password
});

export default connect(
  mapStateToProps,
  { createUser }
)(SignupForm);