import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Add this declaration to tell TypeScript about window.gtag
declare global {
  interface Window {
    gtag?: (
      command: 'config',
      targetId: string,
      config?: { [key: string]: any }
    ) => void;
  }
}

// This function sends a page_view event to Google Analytics
const sendPageView = (path: string) => {
  if (window.gtag) {
    window.gtag('config', 'G-G-TNCP2LBQFX', { // <-- Replace with your ID
      page_path: path,
    });
  }
};

const AnalyticsTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Send a page view on initial load and on every route change
    sendPageView(location.pathname + location.search);
  }, [location]);

  return null; // This component does not render anything
};

export default AnalyticsTracker;