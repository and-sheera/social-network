import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {

    let dialogsElements =
        props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements =
        props.state.messages.map(message => <Message message={message.message}/>);

    let newMessage = React.createRef();

    let sendMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea ref={newMessage}></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default Dialogs;