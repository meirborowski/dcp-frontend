import React from 'react';
import Header from '../components/Header';
import MediaNav from '../components/MediaNav';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



function MediaPage({ categories })
{
    const { t } = useTranslation();
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <>
            <Header Title={t('header_title')} pageTitle={t('media_card_title')} />
            <main className="media-page">
                {(pathname.includes('live') || pathname.includes('films')) && <MediaNav categories={categories} />}
                <Outlet />
            </main>
        </>
    )
}

export default MediaPage;