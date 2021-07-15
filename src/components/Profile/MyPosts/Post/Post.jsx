import s from './Post.module.css';

function Post(props) {
    return (
        <div className={s.item}>
            <img src={'https://i.ebayimg.com/thumbs/images/g/BHAAAOSwZgFgxu94/s-l300.jpg'}/>
            {props.message}
            <div>
                <span>like</span>
                { props.likesCount }
            </div>

        </div>
    );
}

export default Post;