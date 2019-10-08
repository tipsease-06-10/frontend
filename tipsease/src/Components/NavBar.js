import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
        <div className='nav-wrapper'>
            <span className='left'>Tip$ease</span>
              <NavLink to='/login' className='login-btn waves-effect waves-red btn right'>Login</NavLink>  
              <NavLink to='/signup' className='login-btn waves-effect waves-red btn right'>Sign Up</NavLink>
        </div>
        </nav>
    )
}

export default NavBar;