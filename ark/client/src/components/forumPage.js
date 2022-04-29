//This function needs to be called Forums for the navbar to link to it.
//Forums as I think Forum might already be a react function.
import axios from "axios";
import { useState, useEffect } from "react";

const Forums = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");

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
        // setData(data.data);
        setData(<p>Forum Page</p>);
      } catch (error) {
        console.log(error);
        localStorage.removeItem("authToken");
        setError("Not authorized, please login");
      }
    };

    fetchPrivateData();
  });

  return error ? error : <div>{data}</div>;
};

export default Forums;
