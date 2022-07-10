import React from 'react';
import Header from '../components/Header';
import CardsGrid from '../components/CardsGrid';
import { useTranslation } from 'react-i18next';

function HealthPage() {
    const { t } = useTranslation();

    const cards = [
        {
            id: 1,
            title: 'Media',
            subtitle: '',
            icon: 'media.png',
            onClick: () => {
                console.log('clicked gov');
            }
        },
        {
            id: 2,
            title: 'ReMèDe',
            subtitle: '',
            icon: 'remede.png',
            onClick: () => {
                window.open('http://192.168.100.1:8099/en/learn/#/topics/t/12535ec378184bf18c8272618ebbc91b/folders?last=HOME', '_blank');
            }
        }
    ];

    return (
        <>
            <Header pageTitle={t('health_page')} />
            <main className="health-page">
                <CardsGrid cards={cards} />
            </main>
        </>
    )
}

export default HealthPage