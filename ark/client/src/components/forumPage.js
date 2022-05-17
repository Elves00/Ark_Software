//This function needs to be called Forums for the navbar to link to it.
//Forums as I think Forum might already be a react function.
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Forums = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [post, setPosts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPrivateData = async () => {
      console.log("checking Passwords")
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },

      };

      try {

        const { data } = await axios.get("/forumPage", config);
        //Success loged in user can set data
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
    displayPosts();


  }, []);


  function displayPosts() {
    console.log("Trying to post")
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    try {
      axios.post("http://localhost:5000/getPosts",
        //The name is used to identify the page to increments
        {},
        config

      )
        .then((res) => {
          setPosts(res.data);
          console.log(res.data)
        });


    } catch (error) {
      console.log(error)
    }

  }


  function mapPosts() {
    //Map all response to new Cards
    console.log(post)
    return post.map((res) => {
      return (
        <div>
          <h1>{res.title}</h1>
          <h2>{res.date}</h2>
          <p>{res.content}</p>
        </div>
      );
    });
  }

  return error ? (
    error
  ) : (
    <div>
      <p>Forum Page</p>
      {mapPosts()}
      {data}
    </div>
  );
};

export default Forums;
