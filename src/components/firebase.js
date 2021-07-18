import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const app = firebase.initializeApp({
    apiKey: "AIzaSyAQGy1lYYqanRcf6k1FK7VyC5vwNx4g3uY",
    authDomain: "auth-dev-2214c.firebaseapp.com",
    projectId: "auth-dev-2214c",
    storageBucket: "auth-dev-2214c.appspot.com",
    messagingSenderId: "492799381077",
    appId: "1:492799381077:web:b494860e9e0473dc598edc"
})

export const auth = app.auth()
export const database = app.database()

export default app