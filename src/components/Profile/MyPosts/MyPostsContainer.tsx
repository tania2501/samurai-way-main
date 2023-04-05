
import { connect } from "react-redux";
import { addPost, updateTextValue } from "../../../mainRedux/profile-reducer";
import { StateType } from "../../../mainRedux/store-redux";
import { ProfilePageType } from "../Profile";

import MyPosts from "./MyPosts";

let mapStateToProps = (state: StateType): ProfilePageType => {
  return {
    posts: state.profilePage.posts,
    newTextValue: state.profilePage.newTextValue
  }
};

export const MyPostsContainer = connect(mapStateToProps, {addPost, updateTextValue})(MyPosts)
