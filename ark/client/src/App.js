import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import CreateUser from "./components/createUser";
import Boss from "./components/bossPage";
import Raid from "./components/raidPage";
import Forums from "./components/forumPage";
import Chat from "./components/chatPage";
import Account from "./components/accountPage";
import NotFound from "./components/notFoundPage";
import HomePage from "./components/homePage";
import Profile from "./components/profilePage";
import Login from "./components/login";
import Register from "./components/register";
<<<<<<< HEAD
// import Private from "./components/routing/auth";
import EditProfile from "./components/editProfile";
import Logout from "./components/logout";
import Footer from "./components/footer/footer";
import "./App.css"
=======
import Private from "./components/routing/auth";
import EditProfile from "./components/editProfile";
import Logout from "./components/logout";
>>>>>>> f59a00e32abd760004f6cb6918f705be63a67ce0

const App = () => {
  return (
    <div>
<<<<<<< HEAD
      <div className="content">
        <Navbar />
        <div style={{ margin: 20 }}>
          <Routes>
            {/*First as Not found*/}
            <Route path='*' element={<NotFound />} />
            <Route exact path="/" element={<HomePage />} />
            <Route path="/bossPage" element={<Boss />} />
            <Route path="/raidPage" element={<Raid />} />
            {/* <Route exact path="/forumPage" element={<Private />}> */}
            <Route exact path="/forumPage" element={<Forums />} />
            {/* </Route> */}
            <Route path="/chatPage" element={<Chat />} />
            <Route path="/accountPage" element={<Account />} />
            <Route path="/profilePage" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/createUser" element={<CreateUser />} />
            <Route path="/editProfile" element={<EditProfile />} />
            <Route path="/logout" element={<Logout />} />
            {/* <Route path="/editUser/:id" element={<EditUser />} /> */}
          </Routes>
        </div>

      </div>
      <Footer />
=======
      <Navbar />
      <div style={{ margin: 20 }}>
        <Routes>
          {/*First as Not found*/}
          <Route path='*' element={<NotFound />} />
          <Route exact path="/" element={<HomePage />} />
          <Route path="/bossPage" element={<Boss />} />
          <Route path="/raidPage" element={<Raid />} />
          <Route exact path="/forumPage" element={<Private />}>
            <Route exact path="/forumPage" element={<Forums />} />
          </Route>
          <Route path="/chatPage" element={<Chat />} />
          <Route path="/accountPage" element={<Account />} />
          <Route path="/profilePage" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/createUser" element={<CreateUser />} />
          <Route path="/editProfile" element={<EditProfile />} />
          <Route path="/logout" element={<Logout />} />
          {/* <Route path="/editUser/:id" element={<EditUser />} /> */}
        </Routes>
      </div>
>>>>>>> f59a00e32abd760004f6cb6918f705be63a67ce0
    </div>
  );
};

export default App;
