import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state';

const Dialogs = (props) => {

    let dialogsElements =
        props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements =
        props.state.messages.map(message => <Message message={message.message}/>);

    let newMessage = React.createRef();

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }

    let onTextAreaChange = () => {
        let text = newMessage.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.innerChat}>
                    {messagesElements}
                </div>
                <textarea ref={newMessage} onChange={onTextAreaChange} value={props.state.newMessageText}></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default Dialogs;
