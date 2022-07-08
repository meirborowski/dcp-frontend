import React from 'react';
import Header from '../components/Header';
import { useTranslation } from 'react-i18next';

function EducationPage() {
    const { t } = useTranslation();

    return (
        <>
            <Header pageTitle="Education" />
            <main className="education-page">
            </main>
        </>
    )
}

export default EducationPage;