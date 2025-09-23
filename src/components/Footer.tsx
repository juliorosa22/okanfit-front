import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
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
      </div>
      <div className="okanfit-footer-copy">
        &copy; {new Date().getFullYear()} OkanFit. All rights reserved.
      </div>
    </nav>
  </footer>
);

export default Footer;