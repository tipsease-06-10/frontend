import React, { Component } from 'react';

class SignupForm extends Component {
  state = {
    creds: {
      username: '',
      email: '',
      password: '',
    }
  };


onChange = e => {
  this.setState({ 
    creds: {
      ...this.state.creds,
      [e.target.name]: e.target.value 
    }
  });
};

signup = e => {
  e.preventDefault();
  this.props
  .signup(this.state.creds)
  .then(() => this.props.history.push('/workers'))
};

  render() {
    return (
      <div>
          <form onSubmit={this.onSubmit}>
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
    
export default SignupForm;