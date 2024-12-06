import React from "react";
// import { FaDiscord, FaSquareFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Hero1 = () => {
  return (
    <div className="mx-auto max-w-7xl pt-16 sm:pt-24">
      <div className="grid lg:grid-cols-12 lg:gap-8">
        {/* Left Content */}
        <div className="px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:flex-col lg:justify-center lg:items-start lg:text-left">
          <div>
            {/* Badge */}
            <span className="rounded-full uppercase bg-pink-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
              Hurry up guys
            </span>
            {/* Title */}
            <h1 className="text-2xl font-bold tracking-tight text-white  md:text-6xl mt-4">
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
                Competitive Programming
              </span>{" "}
              Basic to Intermediate Level Course
              <br />
            </h1>
          </div>
          <div className="py-5">
            {" "}
            <Link to={"/enroll"} className="btn">
              Enroll Now
            </Link>
          </div>
          {/* //// */}
          {/* <div>
            <FaSquareFacebook
              size={25}
              className="bg-white bg-opacity-10 backdrop-filter p-5"
            />
            <FaDiscord
              size={25}
              className="bg-white bg-opacity-10 backdrop-filter p-5"
            />
          </div> */}
        </div>

        {/* Right Content (YouTube Embed) */}
        <div className="flex items-center lg:col-span-6">
          <div className="px-6 h-96 w-full max-w-2xl mx-auto">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/b5LW_j6meC0?si=MBVULmVp5a7_WRb1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
