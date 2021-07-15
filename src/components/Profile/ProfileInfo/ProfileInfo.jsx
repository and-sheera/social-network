import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.image}>
                <img src='http://sun9-34.userapi.com/c845522/v845522685/100fc0/NJoIMgK4xo0.jpg' />
            </div>
            <div className={s.descriptionBlock}> Ava + description </div>
        </div>
    );
}

export default ProfileInfo;