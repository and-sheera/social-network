import s from './MyPosts.module.css'
import Post from "./Post/Post"
import React from "react"

function MyPosts(props) {

    let postsElements =
        props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = (event) => {
        let text = event.target.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    )
}

export default MyPosts
