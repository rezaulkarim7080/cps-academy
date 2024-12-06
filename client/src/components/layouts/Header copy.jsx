import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { toast } from "react-toastify";

const Header = () => {
  const [nav, setNav] = useState(false);

  const [auth, setAuth] = useAuth();

  // State to track hover for Course Details submenu
  const [showSubheader, setShowSubheader] = useState(false);

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  const handlenav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div
      className="flex justify-between items-center h-20 max-w-[100%] 
   mx-auto px-5 text-slate-100 brounded-lg bg-white bg-opacity-10 backdrop-filter"
    >
      <Link to={"/"} onClick={closeNav}>
        <h1 className="width-full text-4xl font-bold text-white">
          CPS Academy
        </h1>
      </Link>

      <ul className="hidden md:flex items-center text-lg relative">
        <Link to={"/"} onClick={closeNav}>
          <li className="p-4 pl-10 hover:text-green-600">Home</li>
        </Link>
        <li
          className="p-4 hover:text-green-600 relative"
          onMouseEnter={() => setShowSubheader(true)}
          onMouseLeave={() => setShowSubheader(false)}
        >
          Course Details
          {showSubheader && (
            <ul className="absolute top-full left-0 w-48 bg-white text-black shadow-md rounded-lg z-10">
              <Link to={"/module-1"} onClick={closeNav}>
                <li className="p-2 hover:bg-gray-100">Module-1</li>
              </Link>
              <Link to={"/module-2"} onClick={closeNav}>
                <li className="p-2 hover:bg-gray-100">Module-2 (L-1)</li>
              </Link>
              <Link to={"/module-3"} onClick={closeNav}>
                <li className="p-2 hover:bg-gray-100">Module-3 (L-1)</li>
              </Link>
              <Link to={"/level-2"} onClick={closeNav}>
                <li className="p-2 hover:bg-gray-100">Level-2</li>
              </Link>
              <Link to={"/level-3"} onClick={closeNav}>
                <li className="p-2 hover:bg-gray-100">Level-3</li>
              </Link>
            </ul>
          )}
        </li>

        <Link to={"/course-syllabus"} onClick={closeNav}>
          <li className="p-4 hover:text-green-600">Course Syllabus</li>
        </Link>

        {/* Authentication Links */}
        {!auth.user ? (
          <>
            <Link to="/register" className="btn">
              Login
            </Link>
          </>
        ) : auth.user.role === 0 ? (
          <>
            <div className="flex justify-around items-center gap-4">
              <Link to="" onClick={closeNav}>
                <img
                  src={auth.user.userImage}
                  alt={auth.user.name}
                  className="w-[50px] rounded-full"
                />
              </Link>
              <Link to="/user-dashboard" className="btn" onClick={closeNav}>
                Dashboard
              </Link>
              <Link to="/" onClick={handleLogout}>
                <button className="btn">Logout</button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-around items-center gap-4">
              <Link to="" onClick={closeNav}>
                <img
                  src={auth.user.userImage}
                  alt={auth.user.name}
                  className="w-[55px] h-[55px] rounded-full"
                />
              </Link>
              <Link to="/admin-dashboard" className="btn" onClick={closeNav}>
                Dashboard
              </Link>
              <Link to="/" onClick={handleLogout}>
                <button className="btn">Logout</button>
              </Link>
            </div>
          </>
        )}
      </ul>

      {/* Responsive Navigation */}
      <div onClick={handlenav} className="block md:hidden">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[80%] z-50 h-full bg-slate-800 ease-out duration-500"
            : "fixed left-[-100%] z-50"
        }
      >
        {/* Responsive menu goes here */}
      </div>
    </div>
  );
};

export default Header;
