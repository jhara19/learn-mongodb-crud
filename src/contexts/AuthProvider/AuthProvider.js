import React, { createContext, useEffect, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup} from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    //this function helps us to know whether we are logged in or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currenUser => {
            console.log(currenUser);
            setUser(currenUser);
        });

        return () => {
           return unsubscribe();
        }
    },[]);

//GOOGLE SIGN IN
const googleSignIn = ( provider) => {
    return signInWithPopup(auth, provider)
}



   const authInfo = {
     user,
     loading,
     createUser,
     googleSignIn
      
   }


    return (
       <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;