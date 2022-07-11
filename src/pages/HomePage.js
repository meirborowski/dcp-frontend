import React from 'react';
import Header from '../components/Header';
import { useTranslation } from 'react-i18next';
import CardsGrid from '../components/CardsGrid';
import { useNavigate } from "react-router-dom";


function HomePage() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const cards = [
        {
            id: 1,
            title: t('gouvernment_card_title'),
            subtitle: '',
            icon: 'gov.png',
            onClick: () => {
                console.log('clicked gov');
            }
        },
        {
            id: 2,
            title: t('media_card_title'),
            subtitle: '',
            icon: 'media.png',
            onClick: () => {
                navigate('/media');
            }
        },
        {
            id: 3,
            title: t('health_card_title'),
            subtitle: '',
            icon: 'health.png',
            onClick: () => {
                navigate('/health');
            }
        },
        {
            id: 4,
            title: t('agriculture_card_title'),
            subtitle: '',
            icon: 'agriculture.png',
            onClick: () => {
                navigate('/agriculture');
            }
        },
        {
            id: 5,
            title: t('education_card_title'),
            subtitle: '',
            icon: 'education.png',
            onClick: () => {
                navigate('/education');
            }
        },
        {
            id: 6,
            title: t('library_card_title'),
            subtitle: '',
            icon: 'duddal.png',
            onClick: () => {
                window.open('http://192.168.100.1:8111/', '_blank');
            }
        },
        {
            id: 7,
            title: t('khan_academy_card_title'),
            subtitle: '',
            icon: 'itu.png',
            onClick: () => {
                const url = "intent://clever.khanacademykids.org/#Intent;scheme=https;package=org.khankids.android;end";

                if (navigator.userAgent.toLowerCase().indexOf('android') > -1) {
                    window.location.href = url;
                }
                else {
                    alert("You must be using an Android device to launch the app.");
                }
            }
        },
        {
            id: 8,
            title: t('odk_collecte_card_title'),
            subtitle: '',
            icon: 'itu.png',
            onClick: () => {
                const url = "intent://clever.khanacademykids.org/#Intent;scheme=https;package=org.khankids.android;end";

                if (navigator.userAgent.toLowerCase().indexOf('android') > -1) {
                    window.location.href = url;
                }
                else {
                    alert("You must be using an Android device to launch the app.");
                }
            }
        }
    ];

    return (
        <>
            <Header Title={t('header_title')} pageTitle={t('home_page')} withLogo />
            <main className="home-page">
                <CardsGrid cards={cards} />
            </main>
        </>
    )
}

export default HomePage;