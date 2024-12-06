import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
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

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  // Common Links for All
  const commonLinks = (
    <>
      <Link to={"/"} onClick={closeNav}>
        <li className="p-4 hover:text-green-600">Home</li>
      </Link>
      <Link to={"/course-syllabus"} onClick={closeNav}>
        <li className="p-4 hover:text-green-600">Course Syllabus</li>
      </Link>
    </>
  );

  // Student-Specific Links
  const studentLinks = (
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
  );

  // Authentication Links
  const authLinks = auth.user ? (
    auth.user.role === 2 ? (
      <>
        {/* Student Links */}
        {studentLinks}
        <div className="flex items-center gap-4">
          <Link to="">
            <img
              src={auth.user.userImage}
              alt={auth.user.name}
              className="w-[50px] h-[50px] rounded-full"
              onClick={closeNav}
            />
          </Link>
          <Link to="/student-dashboard" className="btn" onClick={closeNav}>
            Student Dashboard
          </Link>
          <Link to="/" onClick={handleLogout}>
            <button className="btn">Logout</button>
          </Link>
        </div>
      </>
    ) : auth.user.role === 1 ? (
      <>
        {/* Admin Links */}
        {/* Student Links */}
        {studentLinks}
        <div className="flex items-center gap-4">
          <Link to="">
            <img
              src={auth.user.userImage}
              alt={auth.user.name}
              className="w-[55px] h-[55px] rounded-full"
              onClick={closeNav}
            />
          </Link>
          <Link to="/admin-dashboard" className="btn" onClick={closeNav}>
            Admin Dashboard
          </Link>
          <Link to="/" onClick={handleLogout}>
            <button className="btn">Logout</button>
          </Link>
        </div>
      </>
    ) : (
      <>
        {/* Regular User Links */}
        <div className="flex items-center gap-4">
          <Link to="">
            <img
              src={auth.user.userImage}
              alt={auth.user.name}
              className="w-[50px] h-[50px] rounded-full"
              onClick={closeNav}
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
    )
  ) : (
    <>
      <Link to="/login" className="btn">
        Login
      </Link>
    </>
  );

  return (
    <div className="flex justify-between items-center h-20 max-w-[100%] mx-auto px-5 text-slate-100 rounded-lg bg-white bg-opacity-10 backdrop-filter">
      {/* Logo */}
      <Link to={"/"} onClick={closeNav}>
        <h1 className="text-4xl font-bold text-white">CPS Academy</h1>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center text-lg relative">
        {commonLinks}
        {authLinks}
      </ul>

      {/* Mobile Navigation */}
      <div onClick={toggleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      {nav && (
        <div className="fixed left-0 top-0 w-[80%] z-50 h-full bg-slate-800 ease-out duration-500">
          <ul className="p-4 text-white">
            {commonLinks}
            {authLinks}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
