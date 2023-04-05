
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

let mapStateToProps = (state: StateType): DialogsType => {
  return {
    dialogs: state.dialogPage.dialogs,
    messages: state.dialogPage.messages,
    newMessage: state.dialogPage.newMessage
  };
};

export const DialogsContainer = connect(mapStateToProps, {changeMessage, addMessage})(Dialogs);
