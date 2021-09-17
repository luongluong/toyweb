import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };

  // function to store users` info in database
export const createUserProfileDocument = async (userAuth)=>{  
     console.log("entered the db saving ");
  if(!userAuth) return; //if user not exist, exist
  
    console.log("userAuth is allowed and we are saving to the db ");
    //  doc of user generated when created 
    const userRef= firestore.doc( `users/${userAuth.uid}` );

    //get infor from userRef and then saved to snapShot
    // checks if the user exists allready in the database 
    const snapShot = await userRef.get();

    console.log(); // this does work
    
//Stack overflow code
//    firebase.database().ref("users").child(user.uid).set(...)

    //if user does not exist, create Data + information 
    // in the try
    if(!snapShot.exists){
      const {email} = userAuth; 
      const {userName} = userAuth;
      const createdTime= new Date();
      console.log(userName);

      try{
        await userRef.set({
          userName,
          email,
          createdTime,
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
