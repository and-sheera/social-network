const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
  users: []
  // users: [
  //   {
  //     id: 1,
  //     photoUrl: 'https://www.meme-arsenal.com/memes/0b16b9836c9c357d5d009dcf4f2e1652.jpg',
  //     fullName: 'Dmitry',
  //     status: 'yellow!!',
  //     location: {
  //       city: 'Minsk',
  //       country: 'Belarus'
  //     },
  //     followed: false,
  //   },
  //   {
  //     id: 2,
  //     photoUrl: 'https://static.turbosquid.com/Preview/001206/750/LQ/3D-lego-character_600.jpg',
  //     fullName: 'Sahsha',
  //     status: 'LOL',
  //     location: {
  //       city: 'Moscow',
  //       country: 'Russia'
  //     },
  //     followed: true,
  //   },
  //   {
  //     id: 3,
  //     photoUrl: 'https://cdn.shopify.com/s/files/1/0223/5446/0736/products/10th-doc-yellow_large.jpg?v=1618316600',
  //     fullName: 'Andrew',
  //     status: 'nice lego',
  //     location: {
  //       city: 'Kiev',
  //       country: 'Ukraine'
  //     },
  //     followed: false,
  //   },
  // ],
}
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        // users: state.users.map(user => {
        //   if (user.id === action.userId) {
        //     return {...user, followed: true}
        //   } else {
        //     return user
        //   }
        // })
        users: state.users.map(user => user.id === action.userId ? {...user, followed: true} : user )
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => user.id === action.userId ? {...user, followed: false} : user )
      }
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      }
    default:
      return state
  }
}
export const followAC = (followUserId) => ({
  type: FOLLOW,
  userId: followUserId
})
export const unfollowAC = (unfollowUserId) => ({
  type: UNFOLLOW,
  userId: unfollowUserId
})
export const setUsersAC = (usersData) => ({
  type: SET_USERS,
  users: usersData
})
export default usersReducer
