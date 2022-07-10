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
            title: 'Gouvernement',
            subtitle: '',
            icon: 'gov.png',
            onClick: () => {
                console.log('clicked gov');
            }
        },
        {
            id: 2,
            title: 'Média',
            subtitle: '',
            icon: 'media.png',
            onClick: () => {
                window.open('http://192.168.100.1/', '_blank');
            }
        },
        {
            id: 3,
            title: 'Santé',
            subtitle: '',
            icon: 'health.png',
            onClick: () => {
                navigate('/health');
            }
        },
        {
            id: 4,
            title: 'Agriculture',
            subtitle: '',
            icon: 'agriculture.png',
            onClick: () => {
                navigate('/agriculture');
            }
        },
        {
            id: 5,
            title: 'Éducation',
            subtitle: '',
            icon: 'education.png',
            onClick: () => {
                navigate('/education');
            }
        },
        {
            id: 6,
            title: 'Bibliothèque',
            subtitle: '',
            icon: 'duddal.png',
            onClick: () => {
                window.open('http://192.168.100.1:8111/', '_blank');
            }
        },
        {
            id: 7,
            title: 'Khan Academy',
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
            title: 'ODK collecte',
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
            <Header Title={t('header_title')} pageTitle="Home" withLogo />
            <main className="home-page">
                <CardsGrid cards={cards} />
            </main>
        </>
    )
}

export default HomePage;