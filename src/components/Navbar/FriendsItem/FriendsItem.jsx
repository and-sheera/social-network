import s from "./FriendsItem.module.css";

const FriendsItem = (props) => {
    return (
        <div className={s.friend}>
            <div className={s.image}>
                <img src={'https://static.turbosquid.com/Preview/2018/11/08__02_24_32/Lego_Woman_Generic_Person_thumbnail_Square_0000.jpg12441F86-76B5-4049-A406-8B8BD3A12CACLarge.jpg'}/>
            </div>
            <div>
                {props.name}
            </div>
        </div>
    );
}

export default FriendsItem;