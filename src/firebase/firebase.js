import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

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

  // function to store users` info in database
export const createUserProfileDocument = async (userAuth, additionalData)=>{  
     
  if(!userAuth) return; //if user not exist, exist

    //  doc of user generated when created 
    const userRef= firestore.doc( `users/${userAuth.uid}` );

    //get infor from userRef and then saved to snapShot
    const snapShot = await userRef.get();

    console.log(snapShot); // this does work
    
//Stack overflow code
//    firebase.database().ref("users").child(user.uid).set(...)

    //if user does not exist, create Data + information 
    // in the try
    if(!snapShot.exists){
      
      const {email} = userAuth; 
      const {userName} = userAuth;
      const createdTime= new Date();
      console.log(userAuth.email); 

      try{
        await userRef.set({
          userName,
          email,
          createdTime,
          ...additionalData
        })
      }catch (error){
        console.log('error occur',error.message);
      }
    }
    // return for future use
    return userRef;
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Get the Auth service for the default app
 export const auth = firebase.auth();
 export const firestore= firebase.firestore();
 export default firebase;