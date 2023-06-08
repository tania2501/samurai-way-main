import { connect } from "react-redux";
import { DialogType } from "../../App";
import { MessageType } from "../../App";
import { addMessage, changeMessage } from "../../mainRedux/dialog-reducer";
import { StateType } from "../../mainRedux/store-redux";

import { Dialogs} from "./Dialogs";
import { WithAuthComponent } from "../hoc/withAuthComponent";
import { compose } from "redux";

export type DialogsType = {
  dialogs: DialogType[];
  messages: MessageType[];
  newMessage: string;
};

let mapStateToProps = (state: StateType): DialogsType => {
  return {
    dialogs: state.dialogPage.dialogs,
    messages: state.dialogPage.messages,
    newMessage: state.dialogPage.newMessage,
  };
};

const DialogsContainer = 
compose<React.ComponentType>(
  connect(mapStateToProps, {changeMessage, addMessage}),
  WithAuthComponent
   )(Dialogs)
export default DialogsContainer;