import { DialogType } from "../../App";
import { MessageType } from "../../App";
import { addMessageAC, newMessageAC } from "../../mainRedux/dialog-reducer";
import { StoreContext } from "../../StoreContext";
import { Dialogs } from "./Dialogs";

export type DialogsType = {
  dialogs: DialogType[];
  messages: MessageType[];
  newMessage: string;
};

export const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        const changeMessage = (text: string) => {
          store.dispatch(newMessageAC(text));
        };
        const addNewMessage = () => {
          store.dispatch(addMessageAC());
        };
        return (
          <Dialogs
            dialogs={state.dialogPage.dialogs}
            message={state.dialogPage.messages}
            changeMessage={changeMessage}
            addMessage={addNewMessage}
            value={state.dialogPage.newMessage}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
