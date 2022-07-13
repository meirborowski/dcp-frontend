import React from 'react';
import Header from '../components/Header';
import CardsGrid from '../components/CardsGrid';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function AgriculturePage() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const cards = [
        {
            id: 1,
            title: 'Media',
            subtitle: '',
            icon: 'media.png',
            onClick: () => {
                navigate('/media/agriculture');
            }
        },
        {
            id: 2,
            title: 'Booster',
            subtitle: 'vos cultures',
            icon: 'supplant.png',
            onClick: () => {
                console.log('clicked gov');
            }
        },
        {
            id: 3,
            title: 'Protégez',
            subtitle: 'vos cultures',
            icon: 'agrio.png',
            onClick: () => {
                console.log('clicked gov');
            }
        }
    ];

    return (
        <>
            <Header pageTitle={t('agriculture_page')} />
            <main className="agriculture-page">
                <CardsGrid cards={cards} />
            </main>
        </>
    )
}

export default AgriculturePage;