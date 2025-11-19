import React from "react";
import { BsStars } from "react-icons/bs";
import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { PiChartBarHorizontal } from "react-icons/pi";
import { BiTachometer } from "react-icons/bi";
import { HiOutlineUserGroup } from "react-icons/hi";

const cards = [
  {
    icon: <PiChartBarHorizontal className=" text-blue-600  w-10 h-10 " />,
    img: "/cardimg1.png",
    title: "Market Intelligence Dashboard",
    description:
      "View real-time market insights in one place. Track trends, uncover opportunities, and make smarter decisions with a customizable, data-rich dashboard.",
    tag: "For Strategy Teams",
  },
  {
    icon: <BiTachometer className=" text-blue-600  w-10 h-10" />,
    img: "/cardimg2.png",
    title: "Brand Performance Analytics",
    description:
      "Measure your brand’s position and growth in the market. Track visibility, sentiment, and engagement across channels to see how your brand stacks up.",
    tag: "For Marketing Teams",
  },
  {
    icon: <HiOutlineUserGroup className=" text-blue-600  w-10 h-10" />,
    img: "/cardimg3.png",
    title: "On Demand Data Collection",
    description:
      "We collect and analyze the exact data you need — tailored to your research goals, verified for accuracy, and ready to use.",
    tag: "For Growth Managers",
  },
];

const blog = [
  {
    img: "/cardimg2.png",
    title: "Market Intelligence Dashboard",
    description:
      "View real-time market insights in one place. Track trends, uncover opportunities, and make smarter decisions with a customizable, data-rich dashboard.",
    date: "October 21, 2025",
  },
  {
    img: "/cardimg2.png",
    title: "Brand Performance Analytics",
    description:
      "Measure your brand’s position and growth in the market. Track visibility, sentiment, and engagement across channels to see how your brand stacks up.",
    date: "October 21, 2025",
  },
  {
    img: "/cardimg3.png",
    title: "On Demand Data Collection",
    description:
      "We collect and analyze the exact data you need — tailored to your research goals, verified for accuracy, and ready to use.",
    date: "October 21, 2025",
  },
];

const Home = () => {
  return (
    <div className=" wrapper2  font-general-sans overflow-hidden bg-white  ">
      <div className="relative w-full h-[45rem]">
        {/* Background Image */}
        <img
          src="/background.svg"
          alt="Background"
          className="w-full h-full object-cover"
        />

        {/* Overlay / Content */}
        <div className="absolute inset-0 flex flex-col items-start justify-end px-6 md:py-12  xs:py-34 ">
          {/* Beta Badge */}
          <div className="bg-primary/20 backdrop-blur-md rounded-full lg:px-5 lg:py-2.5 xs:px-5 xs:py-3 flex items-center gap-2 w-fit mb-4">
            <BsStars className="text-primary" />
            <p className="text-primary font-medium">We’re Live in Beta</p>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl  lg:text-6xl font-medium text-neutral leading-tight"
            role="heading"
            aria-level="1"
          >
            Access Insights for <br />
            Decisions that are{" "}
            <span className="font-serif italic">Reliable</span>
          </h1>

          {/* Subtext */}
          <p className="mt-4 text-[1.1rem] lg:text-[1.25rem] font-normal text-neutral/80 max-w-2xl leading-relaxed">
            Get easy access to market insights that help you understand trends,
            make better decisions, and stay ahead. Start with free insights and
            unlock detailed research when you need it.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <Link
              to="/industries"
              className="xs:px-28 sm:px-8 md:px-10 py-4 md:py-5 rounded-full bg-primary text-white hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
            <button className="xs:px-22 sm:px-8 md:px-10 py-4 md:py-5 rounded-full border-2 border-slate-400 text-slate-500 hover:bg-slate-100 transition">
              Explore Industries
            </button>
          </div>
        </div>
      </div>

      <hr className="border-t mt-10 border-black w-full" />

      <div className="mt-32">
        <h1 className=" h1 " role="heading" aria-level="2">
          Helping You Decide
        </h1>
        <p className="  lg:text-xl">
          We provide easy-to-understand market insights and researched data to
          help you make smarter, more reliable decisions. Today, we focus on
          trekking and tourism trends, and in the future, we’ll expand into new
          industries and emerging fields like AI research. Our goal is to give
          you the information you need — quickly, clearly, and reliably.
        </p>
      </div>

      {/* -------------------------------------- Smart Market Solution --------------------------------------------------- */}
      <section className=" mt-52" aria-labelledby="smart-solutions">
        <h1 className=" h1 " role="heading" aria-level="2">
          Smart Market Solutions
        </h1>

        <div className=" flex-wrap gap-5 grid  md:grid-cols-1 lg:grid-cols-3 xs:grid-cols-1">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative  w-full xs:h-[20rem] md:h-[25rem] xl:h-[30rem] rounded-md overflow-hidden group hover:-translate-y-2 transform transition-all duration-300"
            >
              {/* Background Image */}
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover rounded-md blur-sm group-hover:blur-none opacity-50 shadow-md hover:shadow-2xl transition-all duration-300"
                role="heading"
                aria-level="3"
              />

              {/* Overlaying Card */}
              <div className="w-full absolute inset-0 flex flex-col justify-between p-5  z-10 bg-gradient-to-b  from-[var(--color-primary)]/30 to-blue-500/10 h-full ">
                <div className="flex flex-col gap-4 ">
                  <div className="bg-white/30 border border-primary p-3 w-12 h-12  rounded-md flex justify-center items-center">
                    {card.icon}
                  </div>
                  <div className="w-full">
                    <h1 className="  text-3xl font-medium lg:w-[18rem] ">
                      {card.title}
                    </h1>
                    <p className="  xs:text-[1.2rem] lg:text-[1rem] mt-5    xs:leading-6 ">
                      {card.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-end justify-between  mt-4">
                  <p className="font-light p-3 bg-white rounded-full text-[0.8rem] italic text-black">
                    {card.tag}
                  </p>
                  <button
                    className="flex items-center bg-primary p-2 rounded-full text-white gap-2  hover:bg-blue-700 transition"
                    aria-label={`Learn more about ${card.title}`}
                  >
                    <GoArrowUpRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="w-auto lg:flex justify-between mt-52">
        <div className=" w-[40rem] pr-10 ">
          <h1 className="h1 lg:w-120  ">Industries We Serve</h1>
          <div className="  lg:flex flex-wrap gap-3 xs:hidden ">
            <button className="lg:py-3 lg:px-6  xs:p-2 rounded-full border bg-primary/80 text-white ">
              {" "}
              Technology{" "}
            </button>
            <button className="lg:py-3 lg:px-6 xs:p-2 rounded-full border ">
              {" "}
              Finance{" "}
            </button>
            <button className="lg:py-3 lg:px-6 xs:p-2 rounded-full border ">
              {" "}
              Healthcare{" "}
            </button>
            <button className="lg:py-3 lg:px-6 xs:p-2 rounded-full border ">
              {" "}
              Tourism{" "}
            </button>
            <button className="lg:py-3 lg:px-6 xs:p-2 rounded-full border ">
              {" "}
              Education{" "}
            </button>
            <button className="lg:py-3 lg:px-6 xs:p-2 rounded-full border ">
              {" "}
              Energy{" "}
            </button>
            <button className="lg:py-3 lg:px-6 xs:p-2 rounded-full border ">
              {" "}
              Media{" "}
            </button>
            <button className="lg:py-3 lg:px-6 xs:p-2 rounded-full border ">
              {" "}
              Food & Bevrage{" "}
            </button>
            <button className="lg:py-3 lg:px-6 xs:p-2 rounded-full border ">
              {" "}
              Agriculture{" "}
            </button>
            <button className="lg:py-3 lg:px-6 xs:p-2 rounded-full border ">
              {" "}
              Insurance{" "}
            </button>
            <button className="lg:py-3 lg:px-6 xs:p-2 rounded-full border ">
              {" "}
              Automobile{" "}
            </button>
          </div>
        </div>
        <div className=" h-[28rem] w-full xs:h-[20rem] lg:h-full flex relative rounded-md overflow-hidden ">
          <img
            src="News1.png"
            alt=""
            className="w-full xs:h-full md:h-[18.4rem] object-cover opacity-50 rounded-md"
          />
          <div className="absolute  inset-0 flex gap-2 justify-between items-end  bg-gradient-to-b  from-[var(--color-primary)]/30 to-blue-500/10  h-full w-full ">
            <div className="p-5 flex bg-primary/20  backdrop-blur-md ">
              {" "}
              <p className="w-[80%]  ">
                NVIDIA leads the tech sector this month with a 12% revenue
                increase, reflecting strong AI and gaming market growth.
              </p>
              <p>Recent Data</p>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-3   lg:hidden">
          <div className="flex flex-wrap gap-3 w-full  ">
            {[
              "Technology",
              "Finance",
              "Healthcare",
              "Tourism",
              "Education",
              "Energy",
              "Media",
              "Food & Beverage",
              "Agriculture",
              "Insurance",
              "Automobile",
            ].map((item, index) => (
              <button
                key={index}
                className={`min-w-[7rem] px-4 py-2 text-sm rounded-full border whitespace-nowrap ${
                  index === 0 ? "bg-primary/80 text-white" : "text-gray-800"
                }`}
              >
                {item}
              </button>
            ))}
            {/* Arrow button aligned right */}

            <button className="flex xs:w-full md:w-[2rem] mt-4 justify-center items-center bg-primary p-3 gap-3 rounded-full text-white hover:bg-blue-700 transition">
              Learn more <GoArrowUpRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <button className="md:flex xs:hidden items-center mt-4 bg-primary px-10 py-5 gap-3  rounded-fullpx-10  rounded-full  text-white  hover:bg-blue-700 transition">
        Learn More <GoArrowUpRight className="w-5 h-5" />
      </button>

      {/* blog */}
      <div className="mt-52 min-h-[28rem] ">
        <h1 className="h1 mb-8 ">Latest Market Intelligence Blog</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blog.map((item, index) => (
            <div
              key={index}
              // Added 'relative' so the overlay stays inside this box
              // Added 'hover:border-blue-900' so the border matches the background on hover
              className="group relative bg-white rounded-sm border border-slate-300 shadow-md flex flex-col h-full overflow-hidden hover:border-blue-900 transition-colors duration-300"
            >
              {/* --- OVERLAY (Hidden by default, visible on hover) --- */}
              <div className="absolute inset-0 bg-primary z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-default">
                <p className="text-white text-3xl font-semibold tracking-widest uppercase">
                  Coming Soon
                </p>
              </div>

              {/* --- ORIGINAL CONTENT --- */}
              {/* 1. Image on Top */}
              <div className="h-56 overflow-hidden relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Wrapper */}
              <div className="p-3 flex flex-col flex-1">
                {/* 2. Title */}
                <h3
                  className="text-2xl font-medium text-slate-900 mb-3"
                  role="heading"
                  aria-level="3"
                >
                  {item.title}
                </h3>

                {/* 3. Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {item.description}
                </p>

                {/* 4. Buttons / Footer */}
                <div className="mt-auto flex items-center justify-between pt-4">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-slate-500 text-sm font-medium py-2 px-1">
                    <MdOutlineCalendarMonth className="text-lg" />
                    <span>{item.date}</span>
                  </div>

                  {/* Action Button */}
                  <button className="flex items-center py-2 px-2 lg:px-4 gap-3 rounded-full bg-primary text-sm hover:bg-blue-800 transition-all duration-300 shadow-sm">
                    <p className="text-white lg:block xs:hidden">Read More</p>
                    <GoArrowUpRight className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="w-full overflow-hidden mt-20 mb-32 bg-primary px-6 py-10 text-white rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-10 md:gap-14">
        {/* Left Content */}
        <div className="sm:w-1/2 flex flex-col gap-4 text-center sm:text-left">
          <h1 className="text-2xl md:text-4xl font-semibold leading-tight">
            Subscribe to Our <br className="hidden sm:block" /> Market
            Intelligence Blog
          </h1>
          <p className="text-sm md:text-base hidden xs:block">
            Don’t miss the latest in market intelligence. Subscribe to our blog
            for updates, expert insights, and key trends to stay ahead.
          </p>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 w-full flex flex-col justify-center items-center md:items-end ">
          <p className="text-sm md:text-base mb-2">Stay up to date</p>

          <div className="bg-white rounded-full flex flex-wrap items-center justify-between w-full max-w-md p-1.5">
            <input
              type="email"
              placeholder="Enter your email"
              className="pl-4 py-3 text-slate-600 rounded-full focus:outline-none flex-1 min-w-[150px] text-sm md:text-base"
            />
            <button className="bg-primary rounded-full px-5 py-3 flex items-center gap-2 hover:bg-primary/90 transition whitespace-nowrap">
              <span
                className="text-sm md:text-base"
                aria-label="Subscribe to Market Intelligence Blog"
              >
                Subscribe
              </span>
              <GoArrowUpRight className="w-4 h-4 md:w-5 md:h-5 hidden sm:block" />
            </button>
          </div>

          <span className="text-xs mt-2 text-center sm:text-left">
            By subscribing you agree to our{" "}
            <Link to="/" className="underline underline-offset-4">
              Terms & Conditions
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
