import { DialogType } from "../../App";
import { MessageType } from "../../App";
import { addMessageAC, newMessageAC } from "../../mainRedux/dialog-reducer";
import { ActionsTypes } from "../../mainRedux/store-redux";
import { Dialogs } from "./Dialogs";

export type DialogsType = {
  dialogs: DialogType[]
  messages: MessageType[]
  newMessage: string
}
type DialogsPropsType ={
  dialogPage: DialogsType
  dispatch: (action: ActionsTypes)=>void
}
export const DialogsContainer = (props: DialogsPropsType) => {

  const changeMessage = (text: string) => {
    props.dispatch(newMessageAC(text))
  }
  const addNewMessage = () => {
    props.dispatch(addMessageAC())
  }
  return (
   <Dialogs dialogs={props.dialogPage.dialogs} message={props.dialogPage.messages} changeMessage={changeMessage} addMessage={addNewMessage} value={props.dialogPage.newMessage}/>
  );
  
}