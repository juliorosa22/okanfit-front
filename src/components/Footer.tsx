import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="okanfit-footer">
      <nav className="okanfit-footer-nav">
        <div className="okanfit-footer-links">
          <Link to="/privacy-policy" className="okanfit-footer-link">
            Privacy Policy
          </Link>
          <span className="okanfit-footer-sep">|</span>
          <Link to="/terms-of-service" className="okanfit-footer-link">
            Terms of Service
          </Link>
          <span className="okanfit-footer-sep">|</span>
          <Link to="/data-deletion" className="okanfit-footer-link">
            {t('dataDeletion')}
          </Link>
        </div>
        <div className="okanfit-footer-copy">
          &copy; {new Date().getFullYear()} OkanFit. All rights reserved.
        </div>
      </nav>
    </footer>
  );
};

export default Footer;