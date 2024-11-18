import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const User = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [user, setUser] = useState([]);

  async function submitUserData(data) {
    try {
      const res = await axios.post('https://6704ec68031fd46a830dea0d.mockapi.io/Crude-ope', data);
      console.log(res);
      if (res) {
        alert("Data has been inserted successfully!");
        reset();
        showData();
      } else {
        alert("You entered wrong data...");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Error submitting data");
    }
  }

  async function showData() {
    try {
      const res = await axios.get('https://6704ec68031fd46a830dea0d.mockapi.io/Crude-ope');
      console.log(res.data);
      setUser(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  console.log(user);
  

  useEffect(() => {
    showData();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(submitUserData)}className="col-md-6 mx-auto p-5 shadow-lg rounded my-5 bg-light">
        <h2 className="text-center mb-4">Add UserData</h2>
        <div className="form-group mt-3">
          <input type="text" placeholder="Enter Username" className="form-control "
            {...register("name", {
              required: {
                value: true,
                message: "Enter name",
              },
              minLength: {
                value: 3,
                message: "Enter min 3 characters",
              },
              maxLength: {
                value: 15,
                message: "Enter max 15 characters",
              },
              pattern: {
                value: /^[A-Za-z ]+$/,
                message: "Enter only characters",
              },
            })}
          />
          <p className="text-danger">{errors?.name?.message}</p>
        </div>

        <div className="form-group mt-3">
          <input
            type="text" placeholder="Enter Email"className="form-control "
            {...register("email", {
              required: {
                value: true,
                message: "Enter email",
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Enter a valid email address",
              },
            })}
          />
          <p className="text-danger">{errors?.email?.message}</p>
        </div>

        <div className="form-group mt-3">
          <input type="text" placeholder="Enter Mobile"className="form-control"
            {...register("mobile", {
              required: {
                value: true,
                message: "Enter mobile",
              },
              minLength: {
                value: 10,
                message: "Enter exactly 10 digits",
              },
              maxLength: {
                value: 10,
                message: "Enter exactly 10 digits",
              },
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid mobile number",
              },
            })}
          />
          <p className="text-danger">{errors?.mobile?.message}</p>
        </div>

        <button type="submit" className="btn btn-success mt-4 w-100">
          Submit
        </button>
      </form>
    </>
  );
};

export default User;
