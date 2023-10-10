import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.config";

export const AuthContext = createContext();

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
  
    const googleSingIn = () => {
      setLoading(true);
      return signInWithPopup(auth, provider);
    };
  
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const singInUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const updateUserProfile = (name, image) => {
      console.log(name, image);
      setLoading(true);
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: image,
      });
    };
  
    const logout = () => {
      setLoading(true);
      return signOut(auth);
    };
  
    useEffect(() => {
      const unSubcribe = onAuthStateChanged(auth, (currunetUser) => {
        setUser(currunetUser);
        setLoading(false);
      });
      return () => {
        unSubcribe();
      };
    }, []);
    const authInfo = {
      user,
      loading,
      googleSingIn,
      createUser,
      singInUser,
      logout,
      updateUserProfile,
    };
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
  };
  
  export default AuthProvider;