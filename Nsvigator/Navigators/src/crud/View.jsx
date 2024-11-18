import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const View = () => {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");

  async function show() {
    const res = await axios.get(
      "https://6704ec68031fd46a830dea0d.mockapi.io/Crude-ope"
    );
    setUser(res.data);
  }

  useEffect(() => {
    show();
  }, []);
  console.log(user);
  

  async function trash(id) {
    if (window.confirm("Are you sure you want to delete this user?")) {
      await axios.delete(
        `https://6704ec68031fd46a830dea0d.mockapi.io/Crude-ope/${id}`
      );
      show();  
    }
  }

  const filterData = user.filter((user) => {
    const searched = search.toUpperCase();
    const username = user.name.toUpperCase();
    const useremail = user.email.toUpperCase();

    return username.includes(searched) || useremail.includes(searched);
  });

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-8 mb-4">
          <input
            className="form-control"
            type="search"
            placeholder="Search by name or email..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <table className="table table-responsive table-striped table-hover my-3">
        <thead className="table-dark">
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
              <td>
                <NavLink to={`/SingleUser/${item.id}`}>
                  <button className="btn btn-outline-success btn-sm me-2">
                    <i className="fa-solid fa-eye"></i>
                  </button>
                </NavLink>

                <NavLink to={`/Update/${item.id}`}>
                  <button className="btn btn-outline-warning btn-sm me-2">
                    <i className="fa-solid fa-pen"></i>
                  </button>
                </NavLink>

                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => trash(item.id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filterData.length === 0 && (
        <div className="text-center text-muted">No users found.</div>
      )}
    </div>
  );
};

export default View;
