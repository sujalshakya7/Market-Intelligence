import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'

import Navbar from './components/Navbar'
import Blog from './components/Blog'
import Industries from './components/Industries'
import Pricing from './components/Pricing'
import Solutions from './components/Solutions'
import Tourism from './components/Industries/Tourism'
import { Navigate } from 'react-router-dom'
import TrekkingReport from './components/Industries/TrekkingReport'
import { Data } from './components/Industries/Data'

const App = () => {
  return (
  <>
  <BrowserRouter>
 <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/solutions" element={<Solutions/>}/>
        <Route path="/industries" element={<Navigate to="/tourism" replace />}/>
        <Route path="/tourism" element={<Tourism/>}/>
        <Route path="/trekking-reports" element={<TrekkingReport/>}/>
        <Route path="/data" element={<Data/>}/>


      </Routes>
  </BrowserRouter>
  </>
  )
}

export default App