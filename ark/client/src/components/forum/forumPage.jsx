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


  const navigate = useNavigate();

  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };

  const autherizationConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  };

  useEffect(() => {
    const fetchPrivateData = async () => {
      try {
        const { data } = await axios.get("/profilePage", autherizationConfig);
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


  //Function to display posts on screen
  function displayPosts() {

    try {
      axios.post("http://localhost:5000/getPosts",
        //The name is used to identify the page to increments
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

  //Create post is used to send the details from the form and details of the current user to the backend in order
  //to create a new post requiring a (title,data,name,user_id,content,raiting)
  function createPost() {

    //Takes the currents users id and name 
    let user_id = user._id;
    let name = user.username;
    let date = new Date;
    let raiting = 1;
    let vote = { user_id: user_id, rait: 1 };

    try {
      const { data } = axios.post(
        "http://localhost:5000/createPost",
        { title, date, name, user_id, content, raiting, vote },
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

  function mapPosts() {
    //Creates all posts stored in the post const.
    return post.map((res) => {

      //Current UserID is sent to check if they have upvoted any post.
      return (

        <Posts props={res} userId={user._id} />

      );
    });
  }

  return error ? (
    error
  ) : (
    <div>

      <h1 className="head">Forum</h1>
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
          {user ? mapPosts() : <h1>Loading posts</h1>}
        </div>
      </div>

    </div >
  );
};

export default Forums;
