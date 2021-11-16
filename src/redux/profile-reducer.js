const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state, action) => {
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
  }
  return state;
}
