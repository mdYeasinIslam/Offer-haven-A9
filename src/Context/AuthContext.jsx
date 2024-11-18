import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../Firebase/firebase.init";


// eslint-disable-next-line react-refresh/only-export-components
export const AuthProvider = createContext(null)
const googleProvider = new GoogleAuthProvider()

// eslint-disable-next-line react/prop-types
const AuthContext = ({children}) => {
    const [userInfo, setUserInfo] = useState(null)
    const [loading, setLoading] = useState(true)
    const [count,setCount] = useState(0)
    //Create user 
    const createUserAuth = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //signIn user
    const signInUserAuth = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signOutAuth = () => {
        setLoading(true)
        return signOut(auth)
    }
   
    const googleAuth = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const updateUserInfo = (profile) => {
        return updateProfile(auth.currentUser,profile)
    }

    const passwordResetAuth = (email) => {
        return sendPasswordResetEmail(auth,email)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUserInfo(currentUser)
            setLoading(false)
            setCount(count*0)
            
        })
        return () => unSubscribe()
    },[count])

    const info = { userInfo, createUserAuth, signInUserAuth, signOutAuth, googleAuth, loading, updateUserInfo, passwordResetAuth, count, setCount }
    return (
        <AuthProvider.Provider value={info}>
          {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;