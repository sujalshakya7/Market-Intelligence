import React from "react";
import { Link } from "react-router-dom";
function Coming() {
  return (
    <div className="wrapper2 font-general-sans h-screen flex flex-col justify-center items-center text-center px-4 bg-[linear-gradient(135deg,oklch(0.75_0.15_280)_0%,oklch(0.6209_0.1802_257.04)_50%,oklch(0.55_0.20_240)_100%)]">
      <div className=" flex flex-col  items-center  max-w-lg w-full">
        <h1 className="text-5xl font-medium mb-6 text-slate-200">
          Coming Soon
        </h1>
        <p className="text-lg text-slate-50 mb-8">
          Sorry, this page is under construction. <br></br>Leave your email
          below to get notified when it's ready.
        </p>
        <div className="w-full max-w-md flex gap-2 border border-white/40 bg-gradient-to-br from-white/15 to-white/30 backdrop-blur-lg rounded-full p-2 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]">
          <input
            type="email"
            className="flex-1 rounded-full px-4 py-3 outline-none border border-none  text-blue-950 placeholder-slate-200"
            placeholder="Email address"
          />
          <button className="bg-primary text-white rounded-full px-6 py-3 hover:bg-blue-700 transition-colors">
            Notify Me
          </button>
        </div>
        <div className="mt-8 text-slate-200">
          
          In the meantime, we invite you to explore our{" "}
          <Link
            to="/tourism"
            className="text-white hover:text-blue-300 underline font-medium transition-colors"
          >
            Tourism Reports
          </Link>{" "}
       
        </div>
      </div>
    </div>
  );
}

export default Coming;
