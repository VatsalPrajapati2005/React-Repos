import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleUser = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  async function show() {
    const res = await axios.get(
      `https://6704ec68031fd46a830dea0d.mockapi.io/Crude-ope/${id}`
    );
    setUser(res.data);
  }

  useEffect(() => {
    show();
  }, []);

  return (
    <div className="container my-5">
      <div className="col-md-6 mx-auto">
        <div className="card shadow-lg">
          <div className="card-header text-center bg-dark text-white">
            <h3 className="mb-0">User Details</h3>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Name: </strong> {user.name}
              </li>
              <li className="list-group-item">
                <strong>Email: </strong> {user.email}
              </li>
              <li className="list-group-item">
                <strong>Mobile: </strong> {user.mobile}
              </li>
            </ul>
          </div>
          <div className="card-footer text-muted text-center">
            <small>User ID: {id}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
