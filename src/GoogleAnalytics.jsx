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
<<<<<<< HEAD
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
=======
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
>>>>>>> a18d7eed27d13aa94ac6fc4cc657303fa4d205d3
  }, [location]);

  return null;
};

export default GoogleAnalytics;
