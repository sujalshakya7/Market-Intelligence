import React from "react";
import { BsStars } from "react-icons/bs";
import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const cards = [
  {
    img: "/cardimg1.png",
    title: "Market Intelligence Dashboard",
    description:
      "View real-time market insights in one place. Track trends, uncover opportunities, and make smarter decisions with a customizable, data-rich dashboard.",
    tag: "For Strategy Teams",
  },
  {
    img: "/cardimg2.png",
    title: "Brand Performance Analytics",
    description:
      "Measure your brand’s position and growth in the market. Track visibility, sentiment, and engagement across channels to see how your brand stacks up.",
    tag: "For Marketing Teams",
  },
  {
    img: "/cardimg3.png",
    title: "On Demand Data Collection",
    description:
      "We collect and analyze the exact data you need — tailored to your research goals, verified for accuracy, and ready to use.",
    tag: "For Growth Managers",
  },
];

const blog = [
  {
    no: "01",
    img: "/cardimg1.png",
    title: "Market Intelligence Dashboard",
    description:
      "View real-time market insights in one place. Track trends, uncover opportunities, and make smarter decisions with a customizable, data-rich dashboard.",
    date: "October 21, 2025",
  },
  {
    no: "02",
    img: "/cardimg2.png",
    title: "Brand Performance Analytics",
    description:
      "Measure your brand’s position and growth in the market. Track visibility, sentiment, and engagement across channels to see how your brand stacks up.",
    date: "October 21, 2025",
  },
  {
    no: "03",
    img: "/cardimg3.png",
    title: "On Demand Data Collection",
    description:
      "We collect and analyze the exact data you need — tailored to your research goals, verified for accuracy, and ready to use.",
    date: "October 21, 2025",
  },
];

const Home = () => {
  return (
    <div className=" wrapper  font-general-sans overflow-hidden ">
      <div className="relative w-full h-screen">
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
          <h1 className="text-4xl  lg:text-6xl font-medium text-neutral leading-tight">
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
        <h1 className=" text-4xl font-medium mb-4">Helping You Decide</h1>
        <p className="  lg:text-xl">
          We provide easy-to-understand market insights and researched data to
          help you make smarter, more reliable decisions. Today, we focus on
          trekking and tourism trends, and in the future, we’ll expand into new
          industries and emerging fields like AI research. Our goal is to give
          you the information you need — quickly, clearly, and reliably.
        </p>
      </div>

      {/* -------------------------------------- Smart Market Solution --------------------------------------------------- */}
      <section className=" mt-52">
        <h1 className=" text-4xl font-medium mb-4 ">
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
              />

              {/* Overlaying Card */}
              <div className="absolute inset-0 flex flex-col justify-between p-5  z-10 bg-gradient-to-b  from-[var(--color-primary)]/30 to-blue-500/10 h-full  w-full">
                <div>
                  <h1 className="  text-3xl font-medium ">{card.title}</h1>
                  <p className=" xs:text-[1.2rem] lg:text-[1rem] mt-5 lg:w-[18rem]  text-normal xs:leading-6 ">
                    {card.description}
                  </p>
                </div>

                <div className="flex items-end justify-between  mt-4">
                  <p className="font-light p-3 bg-white rounded-full text-[0.8rem] italic text-black">
                    {card.tag}
                  </p>
                  <button className="flex items-center bg-primary p-2 text-sm rounded-full text-white gap-2 z-20 hover:bg-blue-700 transition">
                    <GoArrowUpRight className="w-8 h-8" />
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
          <div className="absolute  inset-0 flex gap-2 justify-between items-end p-5 bg-gradient-to-b  from-[var(--color-primary)]/30 to-blue-500/10  h-full w-full ">
            <p className="w-[80%] ">
              NVIDIA leads the tech sector this month with a 12% revenue
              increase, reflecting strong AI and gaming market growth.
            </p>
            <p>Recent Data</p>
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
      <div className="mt-52 min-h-[28rem]">
        <h1 className="h1 ">Latest Market Intelligence Blog</h1>

        <div className=" flex flex-col md:flex-row gap-5 ">
          {blog.map((item, index) => (
            <div
              key={index}
              className="relative w-full sm:h-[25rem] h-full rounded-md overflow-hidden group hover:-translate-y-2 transform transition-all duration-300"
            >
              {/* Background Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover rounded-md blur-sm group-hover:blur-none opacity-25 shadow-md hover:shadow-2xl transition-all duration-300"
              />

              {/* Overlaying Card */}
              <div className="absolute inset-0 flex flex-col px-4 justify-end pb-6 z-10 bg-gradient-to-b from-[var(--color-primary)]/30 to-blue-500/10 h-full w-full">
                <div className="flex flex-col justify-between h-60">
                  <p className="absolute top-4 left-4 font-light text-6xl z-50">
                    {item.no}
                  </p>
                  <div>
                    <h1 className="text-3xl font-medium">{item.title}</h1>
                    <p className="mt-2 text-normal leading-5">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex items-end justify-between mt-4">
                    <p className="flex items-center gap-2 font-light text-[0.8rem] text-slate-800 bg-white p-3 rounded-full">
                      <MdOutlineCalendarMonth /> {item.date}
                    </p>
                    <button className="flex items-center bg-primary p-3 text-sm rounded-full text-white gap-2 z-20 hover:bg-blue-700 transition">
                      <GoArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="w-full overflow-hidden mt-20 mb-32 bg-primary px-6 py-10 text-white rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-10 md:gap-14">
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
        <div className="sm:w-1/2 w-full flex flex-col justify-center items-center sm:items-end sm:ml-auto">
          <p className="text-sm md:text-base mb-2">Stay up to date</p>

          <div className="bg-white rounded-full flex flex-wrap items-center justify-between w-full max-w-md p-1.5">
            <input
              type="email"
              placeholder="Enter your email"
              className="pl-4 py-3 text-slate-600 rounded-full focus:outline-none flex-1 min-w-[150px] text-sm md:text-base"
            />
            <button className="bg-primary rounded-full px-5 py-3 flex items-center gap-2 hover:bg-primary/90 transition whitespace-nowrap">
              <span className="text-sm md:text-base">Subscribe</span>
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
