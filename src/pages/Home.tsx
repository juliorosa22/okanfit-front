import { Helmet } from "@dr.pogodin/react-helmet";
import HeroSection from '../components/HeroSection';
import Announcements from '../components/Announcements';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>OkanFit - Fitting AI to Meet Your Needs</title>
        <meta name="description" content="Welcome to OkanFit. We specialize in creating custom AI solutions like OkanAssist to solve specific problems and meet your needs." />
      </Helmet>
      <HeroSection />
      <Announcements />
    </>
  );
};

export default Home;