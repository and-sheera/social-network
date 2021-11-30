const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
  dialogs: [
    {id: 1, name: 'Andrew'},
    {id: 2, name: 'Svetlana'},
    {id: 3, name: 'Roman'}
  ],
  messages: [
      {id: 1, message: 'Hi!'},
      {id: 2, message: 'How a u?'},
      {id: 3, message: 'Fuck u!!!!'},
      {id: 4, message: 'YoYo'}
  ],
  newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
  let stateCopy

  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: state.messages[state.messages.length - 1].id + 1,
        message: state.newMessageText,
      }
      return {
        ...state,
        newMessageText: '',
        messages: [...state.messages, newMessage]
      }
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText
      }
    default:
      return state
  }
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })

export default dialogsReducer
