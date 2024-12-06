import { Select } from "antd";
import { Option } from "antd/es/mentions";
import React from "react";

const CustomUserForm = ({
  handleSubmit,
  name,
  setName,
  email,
  setEmail,
  role,
  setRole,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="w-[80%] p-3 bg-slate-50"
            placeholder="Enter new name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="w-[80%] p-3 bg-slate-50"
            placeholder="Enter new email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <Select
            placeholder="Select Role"
            size="large"
            className="form-select mb-3"
            onChange={(value) => setRole(value)}
            value={role}
          >
            <Option value="0">User</Option>
            <Option value="1">Admin</Option>
            <Option value="2">Student</Option>
          </Select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default CustomUserForm;
