import React from './node_modules/react';
import { Link } from './node_modules/react-router-dom';
import App from '../../App';

function NavBar() {
    return (
        <nav>
        <div className='nav-wrapper'>
            <span>Tipsease</span>
              <Link to='/login' className='login-btn btn right'>Login</Link>  
              <Link to='/signup' className='login-btn btn right'>Sign Up</Link>
        </div>
        </nav>
    )
}

export default NavBar