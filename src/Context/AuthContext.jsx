import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../Firebase/firebase.init";


// eslint-disable-next-line react-refresh/only-export-components
export const AuthProvider = createContext(null)
// eslint-disable-next-line react/prop-types
const AuthContext = ({children}) => {
    const [userInfo, setUserInfo] = useState(null)
    
    //Create user 
    const createUserAuth = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //signIn user
    const signInUserAuth = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signOutAuth = () => {
        return signOut(auth)
    }
   
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUserInfo(currentUser)
        })
        return () => unSubscribe()
    },[])

    const info = { userInfo, createUserAuth, signInUserAuth, signOutAuth }
    return (
        <AuthProvider.Provider value={info}>
          {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;