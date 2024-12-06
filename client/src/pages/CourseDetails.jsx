import React from "react";
import { Link } from "react-router-dom";

const CourseDetails = () => {
  return (
    <div className="px-5 my-5">
      {/* /////////////---------- */}

      {/* /////////////---------- */}

      <div className=" brounded-lg bg-white bg-opacity-10 backdrop-filter p-5">
        <div className="flex flex-col justify-center items-center text-center my-auto mx-auto rounded-xl">
          <h1 className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
            Course Details for the Registered Students
          </h1>
        </div>
      </div>
      {/* /////////////---------- */}

      {/* ///----- */}
      <div className="flex gap-3 justify-center items-center py-5">
        <Link to={"/module-1"} className="customBtn">
          Module-1
        </Link>
        <Link to={"/module-2"} className="customBtn">
          Module-2(L-1)
        </Link>
        <Link to={"/module-3"} className="customBtn">
          Module-3(L-1)
        </Link>
        <Link to={"/level-2"} className="customBtn">
          Level-2
        </Link>
        <Link to={"/level-3"} className="customBtn">
          {" "}
          Level-3
        </Link>
      </div>

      {/* /////--- */}
    </div>
  );
};

export default CourseDetails;
