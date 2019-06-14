import React, { Component } from 'react';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '' 
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

onChange(e) {
  this.setState({ [e.target.name]: e.target.value });
}

onSubmit(e) {
  e.preventDefault();
  this.props.userSignupRequest(this.state);
}

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
                <label>Password Confirmation: 
                  <input 
                    type='password' 
                    value={this.state.passwordConfirm}
                    onChange={this.onChange}
                    name='passwordConfirm'
                    placeholder='Confirm your password'
                 />
                </label>
            <button className='signup-btn btn-large'>Sign Up</button>
          </form>
      </div>
  )
 }
}
    
export default SignupForm;