import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import Header from "./components/Header/Header";
import { Music } from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import { News } from "./components/News/News";
import Profile from "./components/Profile/Profile";
import { Setting } from "./components/SettingComponent/SettingComponent";
import { UsersContainer } from "./components/users/UsersContainer";

export type MessageType = {
  id: string;
  message: string;
};
export type DialogType = {
  id: string;
  name: string;
};
export type PostType = {
  id: string;
  text: string;
  likesCount: number;
};

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/dialogs" element={<DialogsContainer/>}/>
          <Route path="/users" element={<UsersContainer/>} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/setting" element={<Setting />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
