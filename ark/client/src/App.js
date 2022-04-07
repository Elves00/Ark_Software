import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import CreateUser from "./components/createUser";
import RecordUserList from "./components/recordUserList";
import EditUser from "./components/editUser";
import Boss from "./components/bossPage";
import BossCard from "./components/bossCard";
import Raid from "./components/raidPage";
import Forums from "./components/forumPage";
import Chat from "./components/chatPage";
import Account from "./components/accountPage";
import NotFound from "./components/notFoundPage";
import HomePage from "./components/homePage";
import Profile from "./components/profilePage";

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ margin: 20 }}>
        <Routes>
          {/*First as Not found*/}
          <Route path='*' element={<NotFound />} />
          <Route exact path="/" element={<HomePage />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/create" element={<Create />} />
          <Route path="/bossPage" element={<Boss />} />
          <Route path="/raidPage" element={<Raid />} />
          <Route path="/forumPage" element={<Forums />} />
          <Route path="/chatPage" element={<Chat />} />
          <Route path="/accountPage" element={<Account />} />
          <Route path="/accountPage/profilePage" element={<Profile />} />

          <Route path="/createUser" element={<CreateUser />} />
  
          <Route path="/editUser/:id" element={<EditUser />} />

        </Routes >
      </div >
    </div >
  );
};

export default App;
