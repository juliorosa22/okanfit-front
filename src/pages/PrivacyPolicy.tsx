import React from 'react';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="page-content-defaults">
      <h1 className="text-4xl font-bold text-center mb-8">{t('privacy_policy_title')}</h1>
      <div className="bg-white p-8 rounded-lg shadow-md text-gray-700 space-y-4">
        <h2 className="text-2xl font-semibold">1. Introduction</h2>
        <p>{t('privacy_policy_intro')}</p>
        <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
        <p>{t('privacy_policy_collect')}</p>
        <h2 className="text-2xl font-semibold">3. How We Use Your Information</h2>
        <p>{t('privacy_policy_use')}</p>
        <h2 className="text-2xl font-semibold">4. Sharing Your Information</h2>
        <p>{t('privacy_policy_share')}</p>
        <h2 className="text-2xl font-semibold">5. Data Security</h2>
        <p>{t('privacy_policy_security')}</p>
        <h2 className="text-2xl font-semibold">6. Your Rights</h2>
        <p>{t('privacy_policy_rights')}</p>
        <h2 className="text-2xl font-semibold">7. Changes to This Policy</h2>
        <p>{t('privacy_policy_changes')}</p>
        <h2 className="text-2xl font-semibold">8. Contact</h2>
        <p>{t('privacy_policy_contact')}</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;