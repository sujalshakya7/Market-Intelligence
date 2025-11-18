import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import Home from "../pages/Home/Home";
import Industries from "../pages/Industries/Industries"
import Tourism from "../pages/Industries/Tourism"
import TrekkingReport from "../pages/Industries/TrekkingReport"
import Pricing from "../pages/Pricing/Pricing"
import Solutions from "../pages/Solutions/Solutions"
import Navbar from "../components/Navigation/Navbar"
import Footer from "../components/Navigation/Footer"
import Blog from "../pages/Blog/Blog"
import Data from "../pages/Industries/Data";
import { Navigate } from "react-router-dom";
const AppRoutes = () => {
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
  )
}

export default AppRoutes


