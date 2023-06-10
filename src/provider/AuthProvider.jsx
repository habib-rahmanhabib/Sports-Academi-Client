import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import axios from 'axios';
import { app } from '../firebase/firebase.config';



export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = (email, password) => {
        setLoading(true);
        return signOut(auth);
    }
    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                setUser(loggedInUser);

            })
            .catch(error => console.log(error.message))
    }

    // Github sign in function 

    const gitHubProvider = new GithubAuthProvider()
    const githubLogin = () => {
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                setUser(loggedInUser);
            })
            .catch(error => console.log(error.message))
    }


    // useEffect( () => {
    //    const unsubscribe = onAuthStateChanged( auth,  loggedUser => {
    //         // console.log('Logged in user inside auth', loggedUser)
    //         setUser(loggedUser);
    //         setLoading(false);

    //     })

    //     return () => {
    //         unsubscribe();
    //     }
    // }, [])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            // console.log('Logged in user inside auth', loggedUser)
            setUser(loggedUser);
            if (loggedUser) {
                axios.post('http://localhost:5000/jwt', { email: loggedUser.email })
                    .then(data => {
                        // console.log(data.data.token)
                        localStorage.setItem('access-token', data.data.token)
                        setLoading(false);
                    })
            }
            else {
                localStorage.removeItem('access-token')
            }

        });

        return () => {
            unsubscribe();
        };
    }, []);






    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleLogin,
        githubLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;