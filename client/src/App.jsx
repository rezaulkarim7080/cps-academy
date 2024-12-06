import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import CourseSyllabus from "./pages/CourseSyllabus";
import Module1 from "./components/allModule/Module1";
import Module2 from "./components/allModule/Module2";
import Level2 from "./components/allModule/Level2";
import Module3 from "./components/allModule/Module3";
import Level3 from "./components/allModule/Level3";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import ForgotPasssword from "./pages/Auth/ForgotPasssword";
import PrivateRoute from "./components/Routes/Private";

import Profile from "./pages/user/Profile";

import StudentDashboard from "./pages/student/StudentDashboard";
import StudentProfile from "./pages/student/StudentProfile";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Users from "./pages/Admin/Users";
import UpdateUser from "./pages/Admin/UpdateUser";
import Dashboard from "./pages/user/Dashboard";
import Header from "./components/layouts/Header";
import Student from "./components/Routes/StudentRoute";
import Footer from "./components/layouts/Footer";
import Enroll from "./components/layouts/Enroll";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer position="top-center" autoClose={1000} />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* ////////// */}
          <Route path="/course-syllabus" element={<CourseSyllabus />} />
          <Route path="/module-1" element={<Module1 />} />
          <Route path="/module-2" element={<Module2 />} />
          <Route path="/module-3" element={<Module3 />} />
          <Route path="/level-2" element={<Level2 />} />
          <Route path="/level-3" element={<Level3 />} />
          <Route path="/enroll" element={<Enroll />} />

          {/* // */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPasssword />} />

          {/* //user  */}
          <Route element={<PrivateRoute />}>
            <Route path="/user-dashboard" element={<Dashboard />} />
            <Route path="/user-dashboard/user/profile" element={<Profile />} />
          </Route>

          {/* //Student  */}
          <Route element={<Student />}>
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            <Route
              path="/student-dashboard/profile"
              element={<StudentProfile />}
            />
          </Route>

          {/* //admin  */}
          <Route element={<AdminRoute />}>
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="admin-dashboard/users" element={<Users />} />
            <Route path="user/:_id" element={<UpdateUser />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
