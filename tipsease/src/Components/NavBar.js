import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
        <div className='nav-wrapper'>
            <span className='left'>Tipsease</span>
              <Link to='/login' className='login-btn btn right'>Login</Link>  
              <Link to='/signup' className='login-btn btn right'>Sign Up</Link>
        </div>
        </nav>
    )
}

export default NavBar;