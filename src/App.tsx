import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { Music } from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import { News } from "./components/News/News";
import { Setting } from "./components/SettingComponent/SettingComponent";
import { UsersContainer } from "./components/users/UsersContainer";
import { ProfileContainer } from "./components/Profile/ProfileContainer";
import  HeaderContainer  from "./components/Header/HeaderContainer";
import { Login } from "./components/login/login";

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
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile" element={<ProfileContainer/>}/>
          <Route path="/profile/:userId" element={<ProfileContainer/>}/>
          <Route path="/dialogs" element={<DialogsContainer/>}/>
          <Route path="/users" element={<UsersContainer/>} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/setting" element={<Setting />}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
