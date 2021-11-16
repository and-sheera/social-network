import s from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';

function MyPosts(props) {
    let postsElements =
        props.state.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.state.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    );
}

export default MyPosts;
