
import { connect } from "react-redux";
import { addPostAC, updateTextAC } from "../../../mainRedux/profile-reducer";
import { AppDispatch, StateType } from "../../../mainRedux/store-redux";
import { ProfilePageType } from "../Profile";

import MyPosts from "./MyPosts";

let mapStateToProps = (state: StateType): ProfilePageType => {
  return {
    posts: state.profilePage.posts,
    newTextValue: state.profilePage.newTextValue
  }
};
let mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    addPost: ()=> {
      dispatch(addPostAC())
    },
    updateTextValue: (text: string)=> {
      dispatch(updateTextAC(text))
    }
  }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
