import { addPostAC, updateTextAC } from "../../../mainRedux/profile-reducer";
import { StoreContext } from "../../../StoreContext";
import MyPosts from "./MyPosts";

export const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store?.getState();
        const addPost = () => {
          store.dispatch(addPostAC());
        };
        const updateText = (text: string) => {
          store.dispatch(updateTextAC(text));
        };
        return (
          <MyPosts
            postItem={state.profilePage.posts}
            addPost={addPost}
            updateTextValue={updateText}
            textValue={state.profilePage.newTextValue}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
