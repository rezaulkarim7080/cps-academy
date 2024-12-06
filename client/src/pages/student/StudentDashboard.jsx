import React from "react";
import { useAuth } from "../../context/auth";
import StudentMenu from "../../components/layouts/StudentMenu";

const StudentDashboard = () => {
  const [auth] = useAuth();
  return (
    <div className="h-screen">
      <div className="md:grid grid-cols-12 gap-10">
        <div className="col-span-5">
          <StudentMenu />
        </div>

        <div className="col-span-7 mt-[100px] md:w-[600px] text-center items-center flex flex-col justify-center">
          <img
            src={auth?.user?.userImage}
            alt={auth?.user?.name}
            className="w-[200px] rounded-full"
          />
          <h3 className="text-xl font-medium py-2">
            Name : {auth?.user?.name}
          </h3>
          <h3 className="text-xl font-medium py-2">
            Email : {auth?.user?.email}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
