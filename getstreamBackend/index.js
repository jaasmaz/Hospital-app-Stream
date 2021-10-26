//stream-chat is npm package, offically developed by getstream
const StreamChat = require('stream-chat').StreamChat
//api key and api_secret are done when we create an app in our dashboard of getstream
const api_key = 'vnmma92f34su'
const api_secret =
  'pdj24ursq6d3uaumc87bgrmkazkz3kykneht7fxhjc3uh9f45ku34u6tnh5m7jyb'
//we must create our user and get token till line #15, its step 1
// const user_id = 'jasim'

// // Initialize a Server Client
const serverClient = StreamChat.getInstance(api_key, api_secret)
// // Create User Token
// const token = serverClient.createToken(user_id)

// console.log(token)

//we should create some dummy users so we can add them to channels (frontend)
// const updateResponse = serverClient.upsertUsers([
//   { id: 'userID1', role: 'admin', book: 'dr#!' },
//   { id: 'userID2', role: 'user', book: 'Dr2' },
//   { id: 'userID3', role: 'admin', book: 'dr2' }
// ])

// let res = updateResponse.then(res => console.log(res))
// console.log(res)
