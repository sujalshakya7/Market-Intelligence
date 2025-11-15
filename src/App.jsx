import React, { useEffect } from "react";

import Lenis from "@studio-freight/lenis";
import AppRoutes from "./routes/AppRoutes";


const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      smooth: true,
      direction: "vertical", // vertical, horizontal
      smoodthTouch: false,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
     <AppRoutes/>
    </>
  );
};

export default App;
