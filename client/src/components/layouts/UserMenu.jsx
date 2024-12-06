import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <div className="">
      <h1 className="text-2xl font-medium text-center py-5">User Dashboard</h1>
      <div className="text-center">
        <div className="flex flex-col gap-2">
          <NavLink
            to="/user-dashboard"
            end
            className={({ isActive }) =>
              `font-semibold text-2xl border-[1px] rounded-lg border-white p-3 hover:shadow-2xl ${
                isActive
                  ? "text-slate-100 bg-white bg-opacity-10 backdrop-filter"
                  : ""
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/user-dashboard/user/profile"
            className={({ isActive }) =>
              `font-semibold text-2xl border-[1px] rounded-lg border-white p-3 hover:shadow-2xl ${
                isActive
                  ? "text-slate-100 bg-white bg-opacity-10 backdrop-filter"
                  : ""
              }`
            }
          >
            Profile
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
