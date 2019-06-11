import React from 'react';

function SignupForm() {
    return (
        <div>
            <form>
              <h2>Sign Up</h2>
              <label>Full Name: <input type='text' placeholder='First Name' /><input type='text' placeholder='Last Name' /></label>
              <label>E-mail: <input type='email' placeholder='ex: email@yahoo.com' /></label>
              <label>Address: <input type='text' placeholder='Street Address' /><input type='text' placeholder='Street Address Line 2' />
              <input type='text' placeholder='City' /><input type='text' placeholder='State / Province' /><input type='number' placeholder='Postal / Zip Code' /></label>
              <button className='btn-large'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignupForm;