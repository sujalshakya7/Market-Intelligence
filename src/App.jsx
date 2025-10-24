import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Industries from "./components/Industries";
import Pricing from "./components/Pricing";
import Solutions from "./components/Solutions";
import Tourism from "./components/Industries/Tourism";
import { Navigate } from "react-router-dom";
import TrekkingReport from "./components/Industries/TrekkingReport";
import { Data } from "./components/Industries/Data";

import Lenis from "@studio-freight/lenis";

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
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/industries" element={<Industries />} />

          <Route path="/tourism" element={<Tourism />} />
          <Route path="/trekking-reports" element={<TrekkingReport />} />
          <Route path="/data" element={<Data />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
