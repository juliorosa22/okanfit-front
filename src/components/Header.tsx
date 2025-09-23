import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import okanfitIcon from '../assets/icon_okanfit_nobg.png';
import { useState, useRef, useEffect } from 'react';

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'pt', label: 'PT' },
];

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);
  const [currentLang, setCurrentLang] = useState(i18n.language);

  // Update currentLang when i18n.language changes (for async language loading)
  useEffect(() => {
    setCurrentLang(i18n.language);
  }, [i18n.language]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        switcherRef.current &&
        !switcherRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  // Normalize language code for matching (e.g., 'en-US' -> 'en')
  const normalizedLang = LANGUAGES.find(l => currentLang.startsWith(l.code))?.code || 'en';

  return (
    <header className="okanfit-header">
      <nav className="okanfit-nav">
        {/* Logo on the left */}
        <Link to="/" className="okanfit-logo-link">
          <img
            src={okanfitIcon}
            alt="OkanFit Logo"
            className="okanfit-header-logo"
          />
          <span className="okanfit-header-title">
            OkanFit
          </span>
        </Link>
        {/* Navigation links */}
        <div className="okanfit-nav-links">
          <Link to="/" className="okanfit-nav-link">{t('home')}</Link>
          <Link to="/about" className="okanfit-nav-link">{t('about')}</Link>
          <Link to="/news" className="okanfit-nav-link">{t('news')}</Link>
          {/* <Link to="/privacy-policy" className="okanfit-nav-link">{t('privacyPolicy')}</Link> */}
          {/* <Link to="/terms-of-service" className="okanfit-nav-link">{t('termsOfService')}</Link> */}
          {/* Language Switcher Dropdown */}
          <div
            className={`okanfit-lang-switcher${open ? ' open' : ''}`}
            ref={switcherRef}
          >
            <button
              className="okanfit-lang-btn"
              onClick={() => setOpen((v) => !v)}
              aria-haspopup="listbox"
              aria-expanded={open}
              aria-label={t('changeLanguage') || 'Change language'}
              type="button"
            >
              {LANGUAGES.find(l => l.code === normalizedLang)?.label || 'EN'}
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M6 8l4 4 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="okanfit-lang-dropdown" role="listbox">
              {LANGUAGES.map(lang => (
                <button
                  key={lang.code}
                  className={`okanfit-lang-option${normalizedLang === lang.code ? ' selected' : ''}`}
                  onClick={() => {
                    i18n.changeLanguage(lang.code);
                    setOpen(false);
                  }}
                  role="option"
                  aria-selected={normalizedLang === lang.code}
                  type="button"
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;