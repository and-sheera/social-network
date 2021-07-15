import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, subscribe} from "./redux/state";
import {updateNewPostText} from './redux/state';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state";

let reRenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

reRenderEntireTree(state);

subscribe(reRenderEntireTree);

reportWebVitals();
