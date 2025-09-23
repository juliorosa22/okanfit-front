import okanfitLogo from '../assets/okanfit_hero_logo_nbg.png';

const HeroSection: React.FC = () => (
  <section className="okanfit-hero-section">
    <div className="okanfit-hero-content">
      <div className="okanfit-hero-text">
        <h1 className="okanfit-hero-title">Fitting AI to meet your needs</h1>
        {/* <p className="okanfit-hero-subtitle">"Fitting AI to solve specific problems"</p> */}
      </div>
      <img
        src={okanfitLogo}
        alt="OkanFit Logo"
        className="okanfit-hero-logo"
      />
    </div>
  </section>
);

export default HeroSection;