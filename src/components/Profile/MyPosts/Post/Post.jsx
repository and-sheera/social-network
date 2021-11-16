import s from './Post.module.css';

function Post(props) {
    return (
        <div className={s.item}>
            <div className={s.line}>
                <img src={'https://i.ebayimg.com/thumbs/images/g/BHAAAOSwZgFgxu94/s-l300.jpg'}/>
                <div className={s.message}>
                    {props.message}
                </div>
            </div>
            <div className={s.like}>
                <span>likes: </span>
                { props.likesCount }
            </div>

        </div>
    );
}

export default Post;
