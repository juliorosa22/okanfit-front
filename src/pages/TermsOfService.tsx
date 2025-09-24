import React from 'react';
import { useTranslation } from 'react-i18next';

const TermsOfService: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="page-content-defaults">
      <h1 className="text-4xl font-bold text-center mb-8">{t('terms_title')}</h1>
      <div className="bg-white p-8 rounded-lg shadow-md text-gray-700 space-y-4">
        <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
        <p>{t('terms_accept')}</p>
        <h2 className="text-2xl font-semibold">2. Use of Service</h2>
        <p>{t('terms_use')}</p>
        <h2 className="text-2xl font-semibold">3. Subscriptions & Payments</h2>
        <p>{t('terms_subscriptions')}</p>
        <h2 className="text-2xl font-semibold">4. Account Security</h2>
        <p>{t('terms_security')}</p>
        <h2 className="text-2xl font-semibold">5. Termination</h2>
        <p>{t('terms_termination')}</p>
        <h2 className="text-2xl font-semibold">6. Changes to Terms</h2>
        <p>{t('terms_changes')}</p>
        <h2 className="text-2xl font-semibold">7. Contact</h2>
        <p>{t('terms_contact')}</p>
      </div>
    </div>
  );
};

export default TermsOfService;