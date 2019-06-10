import React from 'react';

function LoginForm() {
    return (
    <div>
        <form>
            <h1>Login</h1>
            <input type='text' placeholder='Enter your username...' />
            <input type='password' placeholder='Enter your password...' />
            <button className='btn-large'>Login</button>
            <button className='btn-large'>Don't have an account? Sign up here!</button>
        </form>
    </div>
    )
}

export default LoginForm