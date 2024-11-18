import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { register,handleSubmit,formState: { errors },reset,
  } = useForm();
  const redirect = useNavigate();
  const { id } = useParams();

  async function show() {
    const res = await axios.get(
      `https://6704ec68031fd46a830dea0d.mockapi.io/Crude-ope/${id}`
    );
    reset(res.data);
  }
  useEffect(() => {
    show();
  }, []);

  async function editUser(data) {
    try {
      await axios
        .put(`https://6704ec68031fd46a830dea0d.mockapi.io/Crude-ope/${id}`, data)
        .then((res) => {
          console.log(res);
          redirect("/view");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <>
      <form onSubmit={handleSubmit(editUser)}className="col-md-6 mx-auto p-5 shadow-lg rounded bg-light my-5" >
        <h2 className="text-center mb-4">Update User</h2>
        <div className="form-group mt-4">
          <input
            type="text" placeholder="Enter Username"className="form-control p-3"
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
                value: 10,
                message: "Enter max 10 characters",
              },
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Enter only characters",
              },
            })}
          />
          <p className="text-danger">{errors?.name?.message}</p>
        </div>

        <div className="form-group mt-4">
          <input type="text"
            placeholder="Enter Email"className="form-control p-3"
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

        <div className="form-group mt-4">
          <input
            type="text" placeholder="Enter Mobile"className="form-control p-3"{...register("mobile", {
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

        <button type="submit" className="btn btn-warning mt-4 w-100">
          Update
        </button>
      </form>
    </>
  );
};

export default Update;
