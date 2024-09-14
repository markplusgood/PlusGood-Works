import React from 'react';
import { useEffect } from 'react';
import ReactGA from 'react-ga';

const Analytics = () => {
  useEffect(() => {
    ReactGA.initialize('G-PHBMXCD0E6');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return null;
};

export default Analytics;