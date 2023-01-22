import React, { useEffect } from "react"; //useEffect for getting result for signIn Redirect
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGooogleRedirect,
} from "../../utils/firebase/firebase.utils";

function SignIn() {
  useEffect(async () => {
    const response = await getRedirectResult(auth); // here we getting a full user credential Doc where user exists i.e we have to pass response.user
    console.log(response);
    if (response) {
      const userDocRef = createUserDocumentFromAuth(response.user);
    }
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup(); // here we are getting directly user info
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGooogleRedirect();
    console.log(user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <button onClick={logGoogleRedirectUser}>
        Sign in with Google Redirect
      </button>
    </div>
  );
}

export default SignIn;
