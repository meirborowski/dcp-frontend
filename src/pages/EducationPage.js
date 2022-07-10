import React from 'react';
import Header from '../components/Header';
import { useTranslation } from 'react-i18next';
import CardsGrid from '../components/CardsGrid';

function EducationPage() {
    const { t } = useTranslation();

    const cards = [
        {
            id: 1,
            title: 'Smile & Learn',
            subtitle: '',
            icon: 'seal.png',
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
            id: 2,
            title: 'Écoles local',
            subtitle: '',
            icon: 'bird.png',
            onClick: () => {
                window.open('http://192.168.100.1:8099/en/learn/#/topics/t/12535ec378184bf18c8272618ebbc91b/folders?last=HOME', '_blank');
            }
        },
        {
            id: 3,
            title: 'Agriculture',
            subtitle: '',
            icon: 'bird.png',
            onClick: () => {
                window.open('http://192.168.100.1:8099/en/learn/#/topics/t/6365a01beeac4b659211d25261ac0e92/folders?last=HOME', '_blank');
            }
        },
        {
            id: 4,
            title: 'Hygiene',
            subtitle: '',
            icon: 'bird.png',
            onClick: () => {
                window.open('http://192.168.100.1:8099/en/learn/#/topics/t/6365a01beeac4b659211d25261ac0e92/folders?last=HOME', '_blank');
            }
        }
    ];

    return (
        <>
            <Header pageTitle="Education" />
            <main className="education-page">
                <CardsGrid cards={cards} />
            </main>
        </>
    )
}

export default EducationPage;