import { addPostAC, updateTextAC } from "../../../mainRedux/profile-reducer";
import { ProfilePropsType } from "../Profile";
import MyPosts from "./MyPosts";




export const MyPostsContainer = (props: ProfilePropsType) => {
 
  const addPost = () => {
    props.dispatch(addPostAC())
  }
  const updateText = (text: string) => {
    props.dispatch(updateTextAC(text))
  }

  return (
    <MyPosts postItem={props.profilePage.posts} addPost={addPost} updateTextValue={updateText} textValue={props.profilePage.newTextValue}/>
  );
};
