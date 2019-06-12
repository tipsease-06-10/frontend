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
              <label>Address: 
                  <input 
                    type='text'
                    name='address' 
                    placeholder='Street Address' 
                    />
                    <input 
                      type='text' 
                      name='address_2'
                      placeholder='Street Address Line 2' 
                      />
                    <input 
                      type='text'
                      name='city' 
                      placeholder='City' 
                      />
                    <input 
                      type='text' 
                      name='state'
                      placeholder='State / Province' 
                      />
                    <input 
                      type='number'
                      name='zip' 
                      placeholder='Postal / Zip Code' 
                      />
                      </label>
              <button className='btn-large'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignupForm;