import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const authcontext = createContext();
const auth = getAuth(app);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("ashraful islam");
  const [Loading, setLoading] = useState(false);
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userProfileUpdate = (userupdatedinfo) => {
    return updateProfile(auth.currentUser, userupdatedinfo);
  };
  const logout = () => signOut(auth);
  useEffect(() => {
    setLoading(true);
    const unsuscribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsuscribed();
  }, []);
  const authinfo = {
    user,
    createNewUser,
    loginUser,
    Loading,
    setLoading,
    logout,
    userProfileUpdate,
  };
  return (
    <authcontext.Provider value={authinfo}>{children}</authcontext.Provider>
  );
};

export default AuthContextProvider;
