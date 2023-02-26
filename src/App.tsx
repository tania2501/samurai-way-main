import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Dialogs } from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import { Music } from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import { News } from "./components/News/News";
import Profile from "./components/Profile/Profile";
import { Setting } from "./components/SettingComponent/SettingComponent";

export type MessageType ={
  id: string
  message: string
}
export type DialogType ={
  id: string
  name: string
}
export type PostType ={
  id: string
  text: string
  likesCount: number
}
type AppType = {
  state: {
    profilePage: {
      posts: PostType[]
      newTextValue: string
    }
    dialogPage: {
      messages: MessageType[]
      dialogs: DialogType[]
    }
  }
  addUser: ()=>void
  updateText: (text: string)=>void
}

function App(props: AppType) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile profilePage={props.state.profilePage} addUser={props.addUser} updateText={props.updateText}/>} />
            <Route path="/dialogs" element={<Dialogs dialogPage={props.state.dialogPage} />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
