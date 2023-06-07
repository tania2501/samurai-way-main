import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { Music } from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import { News } from "./components/News/News";
import { Setting } from "./components/SettingComponent/SettingComponent";
import { UsersContainer } from "./components/users/UsersContainer";
import { ProfileContainer } from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/login/login";
import { Provider, connect } from "react-redux";
import { initializationApp } from "./mainRedux/app-reducer";
import { StateType, store } from "./mainRedux/store-redux";
import { Preloader } from "./components/common/Preloader";

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
type AppPropsType = {
  initializationApp: () => void;
  initialization: boolean;
};
class App extends React.Component<AppPropsType> {
  componentDidMount() {
    this.props.initializationApp();
  }
  render() {
    if (!this.props.initialization) {
      return <Preloader isFetching={true} />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <div className="container">
          <Navbar />
          <div className="app-wrapper-content">
            <Routes>
              <Route path="/profile" element={<ProfileContainer />} />
              <Route path="/profile/:userId" element={<ProfileContainer />} />
              <Route path="/dialogs" element={<DialogsContainer />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Setting />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: StateType): { initialization: boolean } => {
  return {
    initialization: state.app.initialization,
  };
};

let AppContainer = connect(mapStateToProps, { initializationApp })(App);
export const SamuraiApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};
