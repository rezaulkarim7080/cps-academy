import React from "react";
import Hero1 from "../components/layouts/Hero1";
import { Link } from "react-router-dom";
import MeetTeam from "../components/layouts/MeetTeam";
import Review from "../components/layouts/Review";

const Home = () => {
  return (
    <div>
      <Hero1 />
      <div className="px-5 py-10">
        {/* ///----- */}
        <div className=" text-center py-5">
          <h1 className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 py-5">
            What you will learn_ from this course?
          </h1>
          <div className=" grid md:grid-cols-3 grid-cols-1 gap-5 py-10">
            <div className="rounded-lg bg-white bg-opacity-10 backdrop-filter p-5">
              <span className="font-medium text-xl">
                Live class 70টি (৯ মাস), Duration 150 hour 200+ Problem-solving
                12 Programming Contest Content সব শেষ করতে তোমার লাগবে ১.৫ বছর
                ইন শা আল্লাহ্‌।
              </span>
            </div>
            <div className="flex flex-col justify-center items-center rounded-lg bg-white bg-opacity-10 backdrop-filter p-5">
              <span className="font-medium  text-xl">
                8 Specialist ( 1400 Rated ) <br /> 17 Pupils (1200 Rated )
              </span>
              <br />
            </div>
            <div className="rounded-lg bg-white bg-opacity-10 backdrop-filter p-5">
              <span className="font-medium text-2xl">
                40 Live Classes
                <br />
                8 Programming Contest <br /> 200+ Problems
              </span>
            </div>
          </div>
        </div>
        {/* //////---------------- */}
      </div>
      {/* ///--- Courses  */}
      <h1 className="text-5xl font-semibold text-center py-10">Courses</h1>
      <div className="px-5 py-10">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
          {/* ///--- card-1 ---//// */}
          <div className="rounded-lg bg-white bg-opacity-10 backdrop-filter p-5">
            <div className="w-full max-w-2xl mx-auto">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/b5LW_j6meC0?si=MBVULmVp5a7_WRb1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <h1 className="text-xl font-semibold ">Level-1</h1>
              <h1 className="">
                Basic C and C++ ( if-else, loop, array, string, function)
                complexity analysis brouteforce, greedy, constructive built-in
                functions of C/C++
              </h1>
              <Link to={"/"} className="btn">
                Enroll now
              </Link>
            </div>
          </div>
          {/* ///--- card-2---//// */}
          <div className="rounded-lg bg-white bg-opacity-10 backdrop-filter p-5">
            <div className="w-full max-w-2xl mx-auto">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/b5LW_j6meC0?si=MBVULmVp5a7_WRb1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <h1 className="text-xl font-semibold ">Level-2</h1>
              <h1 className="">
                Basic C and C++ ( if-else, loop, array, string, function)
                complexity analysis brouteforce, greedy, constructive built-in
                functions of C/C++
              </h1>{" "}
              <Link to={"/"} className="btn">
                Enroll now
              </Link>
            </div>
          </div>
          {/* ///--- card--3 ---//// */}
          <div className="rounded-lg bg-white bg-opacity-10 backdrop-filter p-5">
            <div className="w-full max-w-2xl mx-auto">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/b5LW_j6meC0?si=MBVULmVp5a7_WRb1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <h1 className="text-xl font-semibold ">Level-3</h1>
              <h1 className="">
                Basic C and C++ ( if-else, loop, array, string, function)
                complexity analysis brouteforce, greedy, constructive built-in
                functions of C/C++
              </h1>{" "}
              <Link to={"/"} className="btn">
                Enroll now
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* //----- MEET-TEAM----// */}
      <MeetTeam />
      <Review />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
