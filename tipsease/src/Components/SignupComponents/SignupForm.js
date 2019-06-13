import React from 'react';

function SignupForm() {
    return (
        <div>
            <form>
              <h2>Sign Up</h2>
              <label>Full Name: 
                  <input 
                    type='text'
                    name='first_name' 
                    placeholder='First Name' 
                    />
                    <input 
                      type='text'
                      name='last_name' 
                      placeholder='Last Name' 
                      />
                </label>
              <label>E-mail: 
                  <input 
                    type='email'
                    name='email' 
                    placeholder='ex: email@yahoo.com' 
                    />
                </label>
                <label>Username: 
                  <input 
                     type='text' 
                     name='username'
                     placeholder='Choose your Username'
                   />
                  </label>
                  <label>Password: 
                    <input 
                      type='password' 
                      name='password'
                      placeholder='Create your password'
                   />
                  </label>
              <button className='signup-btn btn-large'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignupForm;