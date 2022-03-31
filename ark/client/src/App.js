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

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ margin: 20 }}>
      <Routes>
        <Route exact path="/" element={<RecordList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        <Route path="/bossPage" element={<Boss />} />

        <Route exact path="/" element={<BossCard />} />

        <Route path="/createUser" element={<CreateUser />} />
        <Route exact path="/" element={<RecordUserList />} />
        <Route path="/editUser/:id" element={<EditUser />} />
        
      </Routes>
      </div>
    </div>
  );
};

export default App;
