import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <h4 className="font-bold text-3xl text-center">Admin Panel</h4>
        <div className="flex flex-col gap-2">
          <NavLink
            to="/admin-dashboard"
            end
            className={({ isActive }) =>
              `font-semibold text-2xl border-[1px] rounded-lg border-black p-3 hover:shadow-md ${
                isActive
                  ? "text-slate-100 bg-white bg-opacity-10 backdrop-filter"
                  : ""
              }`
            }
          >
            Admin
          </NavLink>

          <NavLink
            to="/admin-dashboard/users"
            className={({ isActive }) =>
              `font-semibold text-2xl border-[1px] rounded-lg border-black p-3 hover:shadow-md ${
                isActive
                  ? "text-slate-100 bg-white bg-opacity-10 backdrop-filter"
                  : ""
              }`
            }
          >
            Users
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
