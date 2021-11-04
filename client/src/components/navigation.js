import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {

    return (
        <nav className='main-nav'>
             <Link className='nav-links' to='/'>Home</Link>
             <Link className='nav-links' to='/songs'>Songs</Link>
        </nav>
    )   
}

export default Navigation;
