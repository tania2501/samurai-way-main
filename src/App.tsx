import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
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

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer")) 
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
        <div className="containerMobile">
          <div className="app-wrapper-content">
            <Routes>
              <Route path="/samurai-way-main/" element={<ProfileContainer />} />
              <Route path="/samurai-way-main/profile" element={<ProfileContainer />} />
              <Route path="/samurai-way-main/profile/:userId" element={<ProfileContainer />} />
              <Route path="/samurai-way-main/dialogs" element={<React.Suspense fallback={<Preloader isFetching={true}/>}><DialogsContainer /></React.Suspense>} />
              <Route path="/samurai-way-main/users" element={<UsersContainer />} />
              <Route path="/samurai-way-main/news" element={<News />} />
              <Route path="/samurai-way-main/music" element={<Music />} />
              <Route path="/samurai-way-main/settings" element={<Setting />} />
              <Route path="/samurai-way-main/login" element={<Login />} />
            </Routes>
          </div>
        </div>
        <div className="container">
          <Navbar />
          <div className="app-wrapper-content">
            <Routes>
              <Route path="/samurai-way-main" element={<ProfileContainer />} />
              <Route path="/samurai-way-main/profile" element={<ProfileContainer />} />
              <Route path="/samurai-way-main/profile/:userId" element={<ProfileContainer />} />
              <Route path="/samurai-way-main/dialogs" element={<React.Suspense fallback={<Preloader isFetching={true}/>}><DialogsContainer /></React.Suspense>} />
              <Route path="/samurai-way-main/users" element={<UsersContainer />} />
              <Route path="/samurai-way-main/news" element={<News />} />
              <Route path="/samurai-way-main/music" element={<Music />} />
              <Route path="/samurai-way-main/settings" element={<Setting />} />
              <Route path="/samurai-way-main/login" element={<Login />} />
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
