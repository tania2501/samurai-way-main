
import { connect } from "react-redux";
import { DialogType } from "../../App";
import { MessageType } from "../../App";
import { addMessage, changeMessage } from "../../mainRedux/dialog-reducer";
import { StateType } from "../../mainRedux/store-redux";

import { Dialogs } from "./Dialogs";

export type DialogsType = {
  dialogs: DialogType[];
  messages: MessageType[];
  newMessage: string;
};

let mapStateToProps = (state: StateType): DialogsType & {auth: boolean} => {
  return {
    dialogs: state.dialogPage.dialogs,
    messages: state.dialogPage.messages,
    newMessage: state.dialogPage.newMessage,
    auth: state.auth.isAuth
  };
};

export const DialogsContainer = connect(mapStateToProps, {changeMessage, addMessage})(Dialogs);
