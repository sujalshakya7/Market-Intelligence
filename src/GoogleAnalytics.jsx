// src/GoogleAnalytics.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = "G-N675Y99JGX"; // Replace with your GA4 ID

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize(GA_MEASUREMENT_ID);
  }, []);

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return null;
};

export default GoogleAnalytics;
