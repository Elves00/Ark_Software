import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPrivateData = async () => {
      //   const config = {
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      //     },
      //   };

      try {
        await localStorage.removeItem("authToken");
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    };

    fetchPrivateData();
  });

  return null;
};

export default Logout;
