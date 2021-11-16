const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: "It's my first post!", likesCount: 30}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Sergey', imgPath: 'https://static.turbosquid.com/Preview/2018/11/08__02_24_32/Lego_Woman_Generic_Person_thumbnail_Square_0000.jpg12441F86-76B5-4049-A406-8B8BD3A12CACLarge.jpg'},
                {id: 2, name: 'Lena', imgPath: 'https://static.turbosquid.com/Preview/2018/11/08__04_33_06/Lego_Woman_Scientist_thumbnail_Square_0000.jpgDD95F158-3E47-4B9B-8A58-EA6DFCC68FADLarge.jpg'},
                {id: 3, name: 'Gena', imgPath: 'https://static.turbosquid.com/Preview/2018/11/08__02_24_32/Lego_Man_Astronaut_02_thumbnail_Square_0000.jpgE94CFAF8-D6FE-4EB1-A55D-7A696518E29CLarge.jpg'}
            ]
        }
    },
    _callSubscriber (){},

    getState() {
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: this._state.profilePage.posts[this._state.profilePage.posts.length - 1].id + 1,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.unshift(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id: this._state.dialogsPage.messages[this._state.dialogsPage.messages.length - 1].id + 1,
                message: this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }

}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })

export default store;
