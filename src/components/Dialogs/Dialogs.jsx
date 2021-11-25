import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import React from "react"

const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElements =
        state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>)
    let messagesElements =
        state.messages.map(message => <Message message={message.message} key={message.id}/>)

    let sendMessage = () => {
        props.sendMessage()
    }

    let onTextAreaChange = (event) => {
        let text = event.target.value
        props.updateNewMessageText(text)
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
                <textarea onChange={onTextAreaChange} value={state.newMessageText}></textarea>
                <button className = {s.sendMess} onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs
