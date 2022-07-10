import React from 'react';
import "./css/Header.css";
import IconButton from './IconButton';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

function Header({ pageTitle, Title = '', withLogo = false }) {
    const navigate = useNavigate();

    const goBack = (e) => {
        e.preventDefault();
        navigate('/');
    }


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
                    {withLogo ?
                        <IconButton onClick={e => e.preventDefault()}>
                            <GiHamburgerMenu size={27} />
                        </IconButton>
                        :
                        <IconButton onClick={goBack}>
                            <IoIosArrowBack size={27} onClick={goBack} />
                        </IconButton>}
                    <h2 className='page-title'>{pageTitle}</h2>
                </div>
                <div className='header-bottom-middle'>
                    <h1 className='header-title'>
                        {Title}
                    </h1>
                </div>
                <div className='header-bottom-right'>
                    <div></div>
                    <AiOutlineSearch size={25} />
                </div>
            </div>
        </header>
    )
}

export default Header