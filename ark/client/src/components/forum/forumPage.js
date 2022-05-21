//This function needs to be called Forums for the navbar to link to it.
//Forums as I think Forum might already be a react function.
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Posts from "./post";
import "./forum.css";

const Forums = () => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [post, setPosts] = useState([]);

  //Content in create a post
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [raiting, SetRaiting] = useState(0);

  const navigate = useNavigate();

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  };

  useEffect(() => {
    const fetchPrivateData = async () => {
      try {
        const { data } = await axios.get("/profilePage", config);
        //Success loged in user can set data
        setUser(data.data);

      } catch (error) {
        localStorage.removeItem("authToken");
        setError("Not authorized, please login, redirecting to login page...");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
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
        <Posts props={res} />

      );
    });
  }

  function createPost(head) {

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    //How to use user id to link to the show an acocount page
    let user_id = user._id;
    let name = user.username;
    let date = new Date;
    console.log("Launching launching ");
    try {
      const { data } = axios.post(
        "http://localhost:5000/createPost",
        { title, date, name, user_id, content, raiting },
        config
      );
      alert("Post!");
      localStorage.setItem("authToken", data.token);
      navigate("/");
    } catch (error) {
      // console.log(error.response.data);
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 1000);
    }

  }

  return error ? (
    error
  ) : (
    <div>
      <h1>{user._id}</h1>
      <h1 className="head">Forum</h1>
      <button onClick={createPost}>Share a post</button>
      <form onSubmit={createPost}>
        <div className="forumPageNewPost">
          <label>Title</label>
          <input
            type="text"
            id="username"
            // Value={username}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label for="textArea">Content</label>
          <textarea id="textArea" placeholder="..."
            onChange={(e) => setContent(e.target.value)}>
          </textarea>

          <input
            type="submit"
            value="Post"
          ></input>
          <button className="forumPageClose" type="reset"></button>
        </div>

      </form>

      <div className="forum">
        <div className="subForum">
          {mapPosts()}
        </div>
      </div>

    </div >
  );
};

export default Forums;
