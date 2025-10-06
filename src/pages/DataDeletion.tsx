import React from 'react';
import { useTranslation } from 'react-i18next';

const DataDeletion: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="page-content-defaults">
      <h1 className="text-4xl font-bold text-center mb-8">{t('data_deletion_title')}</h1>
      <div className="bg-white p-8 rounded-lg shadow-md text-gray-700 space-y-6">
        
        <p>{t('data_deletion_intro')}</p>

        <section>
          <h2 className="text-2xl font-semibold mb-2">{t('data_deletion_steps_title')}</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>{t('data_deletion_step_1')}</li>
            <li>{t('data_deletion_step_2')}</li>
            <li>{t('data_deletion_step_3')}</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">{t('data_deletion_deleted_title')}</h2>
          <p>{t('data_deletion_deleted_body')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">{t('data_deletion_retained_title')}</h2>
          <p>{t('data_deletion_retained_body')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">{t('data_deletion_confirmation_title')}</h2>
          <p>{t('data_deletion_confirmation_body')}</p>
        </section>

      </div>
    </div>
  );
};

export default DataDeletion;