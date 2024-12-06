import React, { useEffect, useState } from "react";
import AdminMenu from "./../../components/layouts/AdminMenu";
import axios from "axios";
import { Modal } from "antd";
import { toast } from "react-toastify";
import CustomUserForm from "../../components/Form/CustomUserForm";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [userImage, setUserImage] = useState("");

  // Modal related state
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [updatedRole, setUpdatedRole] = useState("");
  const [updatedUserImage, setUpdatedUserImage] = useState("");

  // Fetch all users
  const UserController = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/users");
      if (data?.success) {
        setUsers(data?.users);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting users");
    }
  };

  useEffect(() => {
    UserController();
  }, []);

  // Update user
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `http://localhost:5000/api/user/${selected._id}`,
        {
          name: updatedName,
          email: updatedEmail,
          role: updatedRole,
          userImage: updatedUserImage,
        }
      );
      if (data?.success) {
        toast.success(`${updatedName} has been updated`);
        setSelected(null);
        setUpdatedName("");
        setUpdatedEmail("");
        setUpdatedRole("");
        setUpdatedUserImage("");
        setVisible(false);
        UserController();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Delete user
  const handleDelete = async (userId) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:5000/api/user/${userId}`
      );
      if (data.success) {
        toast.success(`User has been deleted`);
        UserController();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="h-screen">
      <div className="md:grid grid-cols-6 gap-10 p-10">
        <div className="col-span-2">
          <AdminMenu />
        </div>

        <div className="col-span-4 mt-[20px] md:w-[800px]">
          <h1 className="text-center font-semibold text-2xl py-2">All Users</h1>
          <div className="overflow-x-auto">
            <table className="w-full text-center border-collapse">
              <thead className="hidden md:table-header-group">
                <tr className="">
                  <th scope="col" className="p-2">
                    Image
                  </th>
                  <th scope="col" className="p-2">
                    Name
                  </th>
                  <th scope="col" className="p-2">
                    Email
                  </th>
                  <th scope="col" className="p-2">
                    Role
                  </th>
                  <th scope="col" className="p-2">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user) => (
                  <tr
                    key={user._id}
                    className="md:table-row flex flex-col md:flex-row items-center gap-4 p-4 border-b border-gray-400"
                  >
                    <td className="flex-shrink-0 md:table-cell">
                      <img
                        src={user.userImage}
                        alt={user.name}
                        className="w-[50px] h-[50px] rounded-full mx-auto md:mx-0"
                      />
                    </td>
                    <td className="md:table-cell text-center">{user.name}</td>
                    <td className="md:table-cell text-center">{user.email}</td>
                    <td className="md:table-cell text-center">
                      {user.role === 0 ? (
                        <span className="text-orange-600 font-medium">
                          User
                        </span>
                      ) : user.role === 1 ? (
                        <span className="text-emerald-500 font-medium">
                          Admin
                        </span>
                      ) : user.role === 2 ? (
                        <span className="text-blue-600 font-medium">
                          Student
                        </span>
                      ) : (
                        <span className="text-gray-600 font-medium">
                          Unknown
                        </span>
                      )}
                    </td>
                    <td className="flex justify-center gap-2 md:table-cell">
                      <button
                        className="btn-update text-sm md:text-base"
                        onClick={() => {
                          setVisible(true);
                          setUpdatedUserImage(user.userImage);
                          setUpdatedName(user.name);
                          setUpdatedEmail(user.email);
                          setUpdatedRole(user.role);
                          setSelected(user);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="btn-del text-sm md:text-base"
                        onClick={() => handleDelete(user._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Modal
            onCancel={() => setVisible(false)}
            footer={null}
            visible={visible}
          >
            <CustomUserForm
              name={updatedName}
              setName={setUpdatedName}
              email={updatedEmail}
              setEmail={setUpdatedEmail}
              role={updatedRole}
              setRole={setUpdatedRole}
              handleSubmit={handleUpdate}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Users;
