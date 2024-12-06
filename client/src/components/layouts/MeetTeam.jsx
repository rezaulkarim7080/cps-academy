import React from "react";
import team from "./team.png";
////
//////
////////
const MeetTeam = () => {
  return (
    <div className="py-5">
      <h1 className="text-center text-5xl font-bold pb-7">THE TEAM</h1>
      <div className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between">
          <div className="sm:w-6/12 order-last sm:order-first">
            <ul className="grid grid-cols-2 col-gap-5 row-gap-5 md:col-gap-10 md:row-gap-10">
              <li className="p-5 py-10 text-center">
                <div className="flex flex-col items-center">
                  <div className="flex-shrink-0">
                    <a href="#">
                      <img
                        className="mb-3 rounded-full mx-auto h-24 w-24"
                        src={team}
                      />
                    </a>
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg leading-6 font-semibold transition duration-500 ease-in-out">
                      <a
                        href="#"
                        className=" transition duration-500 ease-in-out"
                      >
                        Donal Trump
                      </a>
                    </h4>
                    <p className="text-sm leading-6  uppercase">co-funder</p>
                  </div>
                </div>
              </li>
              <li className=" p-5 py-10 text-center">
                <div className="flex flex-col items-center">
                  <div className="flex-shrink-0">
                    <a href="#">
                      <img
                        className="mb-3 rounded-full mx-auto h-24 w-24"
                        src={team}
                      />
                    </a>
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg leading-6 font-semibold  transition duration-500 ease-in-out">
                      <a
                        href="#"
                        className=" transition duration-500 ease-in-out"
                      >
                        Elon Mask
                      </a>
                    </h4>
                    <p className="text-sm leading-6  uppercase">CEO</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="text-left mb-10 sm:ml-10 md:ml-24 sm:w-6/12 order-first sm:order-last rounded-lg bg-white bg-opacity-10 backdrop-filter p-5">
            <h1 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight ">
              Meet Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
                Team
              </span>
            </h1>
            <p className="mt-4 text-md leading-7  font-light">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTeam;
