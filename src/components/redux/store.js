import dialogsReducer from "./dialods-reducer"
import pofileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi how are you?", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 10 },
        { id: 3, message: "Blabla", likesCount: 10 },
        { id: 4, message: "Dada", likesCount: 10 },
      ],
      newPostText: 'it-kamasutra',
    },
    dialogsPage: {
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' },
      ],
      newMessageText: 'YoYoYo',
      dialogs: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Andriy' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' },
      ],
    },
    sidebar: {
      friends: [
        { id: 1, name: 'Andriy' },
        { id: 2, name: 'Sveta' },
        { id: 3, name: 'Sasha' },
      ],
    },
  },
  _callSubscriber() {
    console.log('state chenged')
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  addPost() {
    let newPost = {
      id: 6,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    }
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },

  dispatch(action) {

    this._state.profilePage = pofileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)
    this._callSubscriber(this._state);
    
  }
}



export default store
window.store = store