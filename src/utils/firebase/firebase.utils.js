// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//--------------------
import {
  getAuth,
  // signInWithRedirect, //sign in with redirect
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfnFYbK-2SC2nS4MT9S_U7fPcECdx32kw",
  authDomain: "crown-clothing-db-d3605.firebaseapp.com",
  projectId: "crown-clothing-db-d3605",
  storageBucket: "crown-clothing-db-d3605.appspot.com",
  messagingSenderId: "592679616674",
  appId: "1:592679616674:web:8e024092ac59a70162d7fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// its provider for google authentication
const provider = new GoogleAuthProvider();

// provider for facebook
// const providerFacebook = new FacebookAuthProvider();
// providerFacebook.setCustomParameters({
//   prompt: "select_account",
// });

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

// this is for google account authentication
export const signInWithGooglePopup = () => signInWithPopup(auth, provider); // here is provider for google

// now we need sign with redirect
// export const signInWithGooogleRedirect = () =>
//   signInWithRedirect(auth, provider);

//sign in with facebook
// export const signInWithFacebook = () => signInWithPopup(auth, providerFacebook);

export const db = getFirestore();

// we can call it from signIn page and Pass user from there
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  // console.log(userDocRef);
  // consoling the user details
  console.log(userAuth);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  //if user data does not exists

  // displaName and email is in userAuth variable passed in main function
  if (!userSnapshot.exists()) {
    // if user does not exist it will store it in the firestore database
    // then we can login again
    const { displayName, email } = userAuth;
    const createdAt = new Date(); // its i date when we create that document

    console.log("user does not exists now logi again with the same account");

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error, "Error in Try catch block");
    }
  }

  // if user exists

  // return userDocRef
  console.log(userDocRef);
  return userDocRef;
};
