import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './i18n';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import News from './pages/News.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import TermsOfService from './pages/TermsOfService.tsx';
import DataDeletion from './pages/DataDeletion.tsx'; // Import the new page
import './App.css';
import './index.css';

import Header from './components/Header';
import Footer from './components/Footer';
import AnalyticsTracker from './components/AnalyticsTracker'; // Import the tracker

function App() {
  return (
    <Router>
      <Header />
      <AnalyticsTracker /> {/* Add the tracker here */}
      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/data-deletion" element={<DataDeletion />} /> {/* Add the new route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;