import firebase from './firebase/app';
import app from './firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAGtrXbRbW3G4OuwG3wmW3lFzKQw3Ylu7M",
    authDomain: "rebelsw-ee848.firebaseapp.com",
    databaseURL: "https://rebelsw-ee848.firebaseio.com",
    projectId: "rebelsw-ee848",
    storageBucket: "rebelsw-ee848.appspot.com",
    messagingSenderId: "928180662438",
    appId: "1:928180662438:web:b7857357f22629a7810467",
    measurementId: "G-ETKEY24BVN"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Get the Auth service for the default app
 export const defaultAuth = firebase.auth();
 