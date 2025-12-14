import React, { useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { GoArrowRight } from "react-icons/go";
// import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Replace the placeholders below with your EmailJS values
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        // success
        // You can replace with a nicer toast/notification
        alert("Message sent successfully!");
        e.target.reset();
      },
      (error) => {
        console.error(error.text);
        alert("Failed to send message. Please try again later.");
      }
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen py-20 font-general-sans">
      <div className="mt-18">
        <div className="max-w-6xl mx-auto bg-transparent">
          <div className="bg-white/90 rounded-2xl shadow-xl p-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
              {/* Left - Text & contact info */}
              <div className="md:w-1/2">
                <h2 className="text-4xl md:text-3xl font-medium text-gray-900 leading-tight mb-4">
                  Let’s Talk
                  <br />
                  Market Insights &
                  <span className="text-primary"> Intelligence Solutions</span>
                </h2>

                <p className="text-gray-600 mb-8 max-w-md">
                  Are you looking for top-quality chemical solutions tailored to
                  your needs? Reach out to us.
                </p>

                <div className="flex flex-col gap-4 mt-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-sm bg-blue-50 text-blue-600">
                      <AiOutlineMail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">E-mail</p>
                      <p className="text-sm font-regular ">
                        infographytechnologies01@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Form card */}
              <div className="md:w-1/2 flex justify-center">
                <div className="w-full max-w-md bg-white rounded-xl p-6 md:p-8">
                  <form ref={form} onSubmit={sendEmail}>
                    <input
                      type="hidden"
                      name="to_email"
                      value="infographytechnologies01@gmail.com"
                    />
                    <div className="mb-4">
                      <label htmlFor="name" className="sr-only">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Name"
                        className="w-full px-4 py-3 rounded-sm border border-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="email" className="sr-only">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-3 rounded-sm border border-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div className="mb-4 relative">
                      <label htmlFor="industry" className="sr-only">
                        Industry
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        defaultValue=""
                        className="w-full px-4 py-3 rounded-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary text-gray-500 appearance-none"
                      >
                        <option value="" disabled>
                          Select...
                        </option>
                        <option value="tourism" className="text-gray-800">
                          Tourism
                        </option>
                        <option value="logistics" className="text-gray-800">
                          Custom Logistics
                        </option>
                      </select>
                      {/* Custom arrow */}
                      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="message" className="sr-only">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Message"
                        className="w-full px-4 py-3 rounded-sm border border-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      ></textarea>
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="inline-flex w-full justify-center items-center gap-2 bg-primary text-white px-5 py-3 rounded-sm hover:bg-blue-700 transition cursor-pointer"
                      >
                        <span>Get a Solution</span>
                        <GoArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
