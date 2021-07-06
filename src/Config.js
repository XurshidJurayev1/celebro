import firebase from 'firebase'
const DB_CONFIG = {
    apiKey: "AIzaSyDY_wm-5AXkh_PtWGaObF3HbuXVYCLltx0",
    authDomain: "data-celebro.firebaseapp.com",
    projectId: "data-celebro",
    storageBucket: "data-celebro.appspot.com",
    messagingSenderId: "540355206276",
    appId: "1:540355206276:web:667981ece6cf610f8a76d1",
    measurementId: "G-8FYCX68RYW"
}

firebase.initializeApp(DB_CONFIG)

export default firebase