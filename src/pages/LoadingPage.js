import React, { useEffect } from 'react';
import './css/LoadingPage.css';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function LoadingPage()
{
    const { t } = useTranslation();
    const navigate = useNavigate();

    useEffect(() =>
    {
        setTimeout(() =>
        {
            navigate('/home');
        }, 3000);
    }, [navigate]);

    return (
        <div className="loading-page">
            <div className="loading-page-content">
                <div className="loading-page-row">
                    <img src="../images/logowithtagline_white.png" alt="spacecom logo" />
                </div>
                <div className="loading-page-row">
                    <h2>DCP</h2>
                </div>
                <div className="loading-page-row">
                    <h1>{t('header_title')}</h1>
                </div>
                <div className="loading-page-row">
                    <img className='loading-page-col' src="../images/logo-ITU-loader.png" alt="ITU logo" />
                    <img className='loading-page-col' src="../images/logo-ansi-loader.png" alt="ANSI logo" />
                </div>
                <div className="loading-page-row">
                    <img src='../images/Logo-EN-FIVI-ANSI.png' alt="EN FIVI ANSI logo" />
                </div>
            </div>
        </div>
    )
}

export default LoadingPage;