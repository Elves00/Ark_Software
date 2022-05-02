//This function needs to be called Account for the navbar to link to it.
import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Account = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPrivateData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/accountPage", config);
        setData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("Not authorized, please login, redirecting to home page...");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    };

    fetchPrivateData();
  });

  return error ? (
    error
  ) : (
    <div>
      <p>Account Page</p>
      <div>{data.username}</div>
      <div>
        <NavLink to="/editProfile">Edit Profile</NavLink>
      </div>
    </div>
  );
};

export default Account;
