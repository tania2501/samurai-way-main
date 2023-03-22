
import { connect } from "react-redux";
import { addPostAC, updateTextAC } from "../../../mainRedux/profile-reducer";
import { AppDispatch, StateType } from "../../../mainRedux/store-redux";
import { ProfilePageType } from "../Profile";

import MyPosts from "./MyPosts";

// export const MyPostsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store?.getState();
//         const addPost = () => {
//           store.dispatch(addPostAC());
//         };
//         const updateText = (text: string) => {
//           store.dispatch(updateTextAC(text));
//         };
//         return (
//           <MyPosts
//             postItem={state.profilePage.posts}
//             addPost={addPost}
//             updateTextValue={updateText}
//             textValue={state.profilePage.newTextValue}
//           />
//         );
//       }}my
//     </StoreContext.Consumer>
//   );
// };
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
