import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
        <div className='nav-wrapper'>
            <ul>
                <NavLink><li>Home</li></NavLink>
                <NavLink><li>About</li></NavLink>
                <NavLink><li>Contact</li></NavLink>
            </ul>
            <button className='login-btn btn right'>Login/Signup</button>
        </div>
        </nav>
    )
}

export default NavBar