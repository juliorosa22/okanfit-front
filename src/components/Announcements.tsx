import { useTranslation } from 'react-i18next';
import NewsCard from './NewsCard';
import okanfitLogo from '../assets/okanfit_logo_colored.svg';

const Announcements: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="okanfit-announcements-section">
      <h2 className="okanfit-announcements-title">Announcements</h2>
      <div className="okanfit-announcements-list">
        <NewsCard
          image={okanfitLogo}
          description={t('OkanAssist_announcement')}
          to="/about"
        />
      </div>
    </section>
  );
};

export default Announcements;