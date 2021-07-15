import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsItem from "./FriendsItem/FriendsItem";

function Navbar(props) {

    let friendsElements = props.state.friends.map( friend => <FriendsItem imgPath={friend.imgPath} name={friend.name} />)

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>

            <div className={s.friends}>
                <div className={s.friendsBlockTitle}>
                    My friends
                </div>
                <div className={s.friendsBlock}>
                    {friendsElements}
                </div>
            </div>

        </nav>
    );
}

export default Navbar;