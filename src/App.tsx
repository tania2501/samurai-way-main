import React, { Dispatch } from "react";
import { Route, Routes } from "react-router-dom";
import { StateType } from ".";
import "./App.css";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import Header from "./components/Header/Header";
import { Music } from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import { News } from "./components/News/News";
import Profile from "./components/Profile/Profile";
import { Setting } from "./components/SettingComponent/SettingComponent";
import { ActionsTypes } from "./mainRedux/store-redux";

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
export type AppType = {
  state: StateType;
  dispatch: Dispatch<ActionsTypes>;
};

function App(props: AppType) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route
            path="/dialogs"
            element={
              <DialogsContainer
                dialogPage={props.state.dialogPage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
