
import { connect } from "react-redux";
import { addPost, updateTextValue } from "../../../mainRedux/profile-reducer";
import { StateType } from "../../../mainRedux/store-redux";
import MyPosts from "./MyPosts";
import { ProfileUserType } from "../ProfileContainer";
import { PostType } from "../../../App";
type PostProfileType = {
  posts: PostType[]
  newTextValue: string
  profile: ProfileUserType
}
let mapStateToProps = (state: StateType): PostProfileType => {
  return {
    posts: state.profilePage.posts,
    newTextValue: state.profilePage.newTextValue,
    profile: state.profilePage.profile
  }
};

export const MyPostsContainer = connect(mapStateToProps, {addPost, updateTextValue})(MyPosts)
