let initialState = {
  friends: [{
    id: 1,
    name: 'Sergey',
    imgPath: 'https://static.turbosquid.com/Preview/2018/11/08__02_24_32/Lego_Woman_Generic_Person_thumbnail_Square_0000.jpg12441F86-76B5-4049-A406-8B8BD3A12CACLarge.jpg'
  }, {
    id: 2,
    name: 'Lena',
    imgPath: 'https://static.turbosquid.com/Preview/2018/11/08__04_33_06/Lego_Woman_Scientist_thumbnail_Square_0000.jpgDD95F158-3E47-4B9B-8A58-EA6DFCC68FADLarge.jpg'
  }, {
    id: 3,
    name: 'Gena',
    imgPath: 'https://static.turbosquid.com/Preview/2018/11/08__02_24_32/Lego_Man_Astronaut_02_thumbnail_Square_0000.jpgE94CFAF8-D6FE-4EB1-A55D-7A696518E29CLarge.jpg'
  }]
}

const sidebarReducer = (state = initialState, action) => {
  let stateCopy = {...state}
  return stateCopy
}
export default sidebarReducer
