import React from 'react';
import "./Header.css";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineSearch } from 'react-icons/ai';

function Header({ pageTitle, Title, withLogo = false }) {
    return (
        <header className={withLogo ? 'header-with-logo' : 'header'}>
            {/* show only if with logo is true */}
            {withLogo &&
                (<div className='header-top'>
                    <div className='logo'>
                        <img src='../images/logowithtagline_white.png' alt='spacecom logo' />
                    </div>
                </div>
                )}

            <div className='header-bottom'>
                <div className='header-bottom-left'>
                    <GiHamburgerMenu size={20} />
                    <h2 className='page-title'>{pageTitle}</h2>
                </div>
                <div className='header-bottom-middle'>
                    <h1 className='header-title'>
                        {Title}
                    </h1>
                </div>
                <div className='header-bottom-right'>
                    <div></div>
                    <AiOutlineSearch size={20} />
                </div>
            </div>
        </header>
    )
}

export default Header