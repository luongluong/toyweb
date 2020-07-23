import React from 'react';
import {ReactComponent as Logo} from '../../Logo/star-wars.svg';
import {Link} from "react-router-dom";
import {auth} from '../../firebase/firebase.js'
import './header-function.style.scss';

const Header= ({currentUser}) =>(
    <div className='header'>

        <Link className='logo-container' to='/'>
            <Logo className='logo'>
            </Logo>
        </Link>

            <div className='menu-top-options'>
                <Link className='option' to='/shop'>
                    Shop
                </Link>
                <Link className='option' to='/shop'>
                    Contact Us
                </Link>
               
                {
                    currentUser?
                    <div className='option' onClick={()=>auth.signOut()}>Sign Out</div>
                    :
                    <Link className='option' to='/register'>
                    Log In
                    </Link>
                }
            </div>
    </div>
)
export default Header;
