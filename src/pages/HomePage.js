import React from 'react';
import Header from '../components/Header';
import { useTranslation } from 'react-i18next';

function HomePage() {
    const { t } = useTranslation();

    return (
        <>
            <Header Title={t('header_title')} pageTitle="Home" withLogo />
            <main className="home-page">
            </main>
        </>
    )
}

export default HomePage;