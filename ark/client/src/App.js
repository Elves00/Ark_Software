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
import NotFound from "./components/notFoundPage";
import HomePage from "./components/homePage";
import Profile from "./components/profilePage";
import Login from "./components/login";
import Register from "./components/register";
import Private from "./components/routing/auth";
import EditProfile from "./components/editProfile";
import Logout from "./components/logout";
import Footer from "./components/footer/footer";
import BossInfo from "./components/boss-information/demon-beast-canyon";
import NecromancersOrigin from "./components/boss-information/necromancer's-origin";
import HallOfTheTwist from "./components/boss-information/hall-of-the-twisted";
import Follow from "./components/follow";

import "./App.css";

const App = () => {
  return (
    <div>
      <div className="content">
        <Navbar />
        <div style={{ margin: 20 }}>
          <Routes>
            {/*First as Not found*/}
            <Route path="*" element={<NotFound />} />
            <Route exact path="/" element={<HomePage />} />
            <Route path="/bossPage" element={<Boss />} />
            <Route path="/raidPage" element={<Raid />} />
            <Route exact path="/forumPage" element={<Private />}>
              <Route exact path="/forumPage" element={<Forums />} />
            </Route>
            <Route path="/chatPage" element={<Chat />} />
            <Route exact path="/profilePage" element={<Private />}>
              <Route path="/profilePage" element={<Profile />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/demon-beast-canyon" element={<BossInfo />} />
            <Route path="/hall-of-the-twisted" element={<HallOfTheTwist />} />
            <Route
              path="/necromancer's-origin"
              element={<NecromancersOrigin />}
            />
            <Route path="/createUser" element={<CreateUser />} />
            <Route exact path="/editProfile" element={<Private />}>
              <Route path="/editProfile" element={<EditProfile />} />
            </Route>
            <Route path="/logout" element={<Logout />} />
            <Route exact path="/follow" element={<Private />}>
              <Route path="/follow" element={<Follow />} />
            </Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
