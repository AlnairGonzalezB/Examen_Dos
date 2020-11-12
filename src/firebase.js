import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAORYHMDwtbN60FRjmmuU3lW8IYs20XXbk",
    authDomain: "libreriapingu.firebaseapp.com",
    databaseURL: "https://libreriapingu.firebaseio.com",
    projectId: "libreriapingu",
    storageBucket: "libreriapingu.appspot.com",
    messagingSenderId: "314395379062",
    appId: "1:314395379062:web:b75a8f433f3c3a8f542657",
    measurementId: "G-0N5LHK1FJ3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore();