/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import app from "../../Ulities/firebase/firebase.init";
import {getAuth,createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader,setLoader] =useState(true);
  const googleProvider = new GoogleAuthProvider();
console.log(user);
//create user
const createUser = (email,password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth,email,password);
}

const updateName = (currentUser,name) => {
    return updateProfile(currentUser,{
        displayName:name
    })
}

//login user
const loginUser = (email,password) => {
    setLoader(true)
    console.log(email,password);
    return signInWithEmailAndPassword(auth,email,password)
}

//reset password
const forgetPass = (email) => {
    return sendPasswordResetEmail(auth,email)

}


//getUser

useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth,(currentUser) => {
        setUser(currentUser)
        setLoader(false)
    })
    return () => unSubscribe();
},[])

// log out
const logOut = () => {
    return signOut(auth);
}
//googlewith signin
const googleSignIn = () => {
    return signInWithPopup(auth,googleProvider)
}

  const authInfo = {
    user,
    createUser,
    updateName,
    loginUser,
    forgetPass,
    logOut,
    googleSignIn,
    loader
  };
  return <AuthContext.Provider  value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
