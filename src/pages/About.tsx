import React from 'react';
import { useTranslation } from 'react-i18next';
import meImg from '../assets/me.jpg';
import { Helmet } from 'react-helmet-async';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>About OkanFit | AI Solutions</title>
        <meta name="description" content="Learn about OkanFit's mission to develop innovative AI solutions and meet the founder behind the vision." />
      </Helmet>
    
    <div className="page-content-defaults">
      <h1 className="text-4xl font-bold text-center mb-8">{t('about_title')}</h1>

      {/* Mission Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">{t('mission_title')}</h2>
        <div className="bg-white p-6 rounded-lg shadow-md text-gray-700">
          <p>
            {t('mission_statement_part1')}
            <br /><br />
            {t('mission_statement_part2')}
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Founder</h2>
        <div className="flex items-center bg-white p-6 rounded-lg shadow-md">
          <img
            src={meImg}
            alt="Julio César"
            className="okanfit-founder-img"
          />
          <div>
            <h3 className="text-xl font-bold mb-1">Julio Rosa</h3>
            <p className="text-gray-700 mb-2">
              Founder & AI Engineer
            </p>
            <p className="text-gray-600">
              {t('about_founder')}
            </p>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Contacts</h2>
        <div className="bg-white p-6 rounded-lg shadow-md text-gray-700">
          <p className="mb-2">
            Email: <a href="mailto:eng.julio.rosa01@gmail.com" className="text-blue-600 hover:underline">eng.julio.rosa01@gmail.com</a> / <a href="mailto:okanfit.ai@gmail.com" className="text-blue-600 hover:underline">okanfit.ai@gmail.com</a>
          </p>
          <p className="mb-2">
            LinkedIn: <a href="https://www.linkedin.com/in/juliorosafilho" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/juliorosafilho</a>
          </p>
          <p>
            GitHub: <a href="https://github.com/juliorosa22" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/juliorosa22</a>
          </p>
          <p>
            Instagram: <a href="https://www.instagram.com/okanfit.dev" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">instagram.com/okanfit.dev</a>
          </p>
        </div>
      </section>
    </div>
    </>
  );
};

export default About;