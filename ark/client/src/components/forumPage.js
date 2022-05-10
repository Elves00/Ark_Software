//This function needs to be called Forums for the navbar to link to it.
//Forums as I think Forum might already be a react function.
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Forums = () => {
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
        const { data } = await axios.get("/forumPage", config);
        setData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("Not authorized, please login, redirecting to login page...");
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
      <p>Forum Page</p>
      {data}
    </div>
  );
};

export default Forums;
