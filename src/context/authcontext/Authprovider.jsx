import React, { useEffect, useState } from "react";
import { AuthContext } from "./Authcontext";
import { auth } from "../../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
    };
    

    const googleSignin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    const signOutuser = () => {
        setLoading(true);
        return signOut(auth)
    }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log("user in the onauthchanged ", currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signOutuser,
    googleSignin,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default Authprovider;
