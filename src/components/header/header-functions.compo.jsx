import React from 'react';
import {ReactComponent as Logo} from '../../Logo/star-wars.svg';
import {Link} from "react-router-dom";
import './header-function.style.scss';

const Header= () =>(
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
                <Link className='option' to='/register'>
                    Account
                </Link>
            </div>
    </div>
)
export default Header;
