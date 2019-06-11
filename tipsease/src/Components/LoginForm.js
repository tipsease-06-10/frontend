import React from 'react';
import { Link } from 'react-router-dom';

function LoginForm() {
    return (
    <div>
        <form>
            <h1>Login</h1>
            <input type='text' placeholder='Enter your username...' />
            <input type='password' placeholder='Enter your password...' />
            <Link to='/login' className='form-btn btn-large'>Login</Link>
            <Link to='/signup' className='form-btn btn-large'>Don't have an account? Sign up here!</Link>
        </form>
    </div>
    )
}

export default LoginForm