import React from "react"
import s from './Users.module.css'

let Users = (props) => {
    debugger
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                id: 1,
                photoUrl: 'https://www.meme-arsenal.com/memes/0b16b9836c9c357d5d009dcf4f2e1652.jpg',
                fullName: 'Dmitry',
                status: 'yellow!!',
                location: {
                    city: 'Minsk',
                    country: 'Belarus'
                },
                followed: false,
                },
                {
                id: 2,
                photoUrl: 'https://static.turbosquid.com/Preview/001206/750/LQ/3D-lego-character_600.jpg',
                fullName: 'Sahsha',
                status: 'LOL',
                location: {
                    city: 'Moscow',
                    country: 'Russia'
                },
                followed: true,
                },
                {
                id: 3,
                photoUrl: 'https://cdn.shopify.com/s/files/1/0223/5446/0736/products/10th-doc-yellow_large.jpg?v=1618316600',
                fullName: 'Andrew',
                status: 'nice lego',
                location: {
                    city: 'Kiev',
                    country: 'Ukraine'
                },
                followed: false,
                },
            ]
        )
    }

    return <div className={s.usersContainer}>
        {
            props.users.map(user => <div key={user.id} className={s.userItem}>
                <div className={s.leftPart}>
                    <div>
                        <img src={user.photoUrl} className={s.ava} alt="" />
                    </div>
                    <div>
                        {user.followed ?
                            <button className={s.unfollow} onClick={() => { props.unfollow(user.id) }}> Unfollow </button>
                            : <button className={s.follow} onClick={() => { props.follow(user.id) }}> Follow </button>}
                    </div>
                </div>
                <div className={s.mainPart}>
                    <div className={s.about}>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </div>
                    <div className={s.location}>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </div>
                </div>
            </div>)
        }
    </div>
}

export default Users
