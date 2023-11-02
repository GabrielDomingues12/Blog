import { db } from "../../../Firebase/config"
import {app} from"../../Firebase/config"
import { useState, useEffect, ReactNode } from "react"
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
  signInWithEmailAndPassword,
  signOut
} from"firebase/auth"

const useAuthentication = () => {
    const[loading, setLoading] = useState(false)
    const[error, setError] = useState(false)
    const[cancelled, setCancelled] = useState(false)
    const auth = getAuth(app)

    function checkIsCancelled(){
        if(cancelled){
            return
        }
    }

    const createUser = async (data: {
        email: string,
        password: string,
        displayName: string,
      }) => {
        checkIsCancelled();
        setError(false);
        setLoading(true);
        try {
          const { user } = await createUserWithEmailAndPassword(
            auth,
            data.email,
            data.password
          );
          await updateProfile(user, {
            displayName: data.displayName
          });
          setLoading(false);
          return {
            createUser: user,
            auth,
            error: false,
            loading: false
          };
        } catch (error) {
          const systemError = 
          console.error(systemError.message)
          setLoading(false);
          ('Failed to create user: ');
        }
      }
      
    useEffect(() => {
        return () => setCancelled(true)
    })

    const logout = () => {
        signOut(auth)
    }

    const login = async (data: {
        email: string,
        password: string
    }) => {
        checkIsCancelled()
        setLoading(true)
        setError(false)
        try {
            await signInWithEmailAndPassword(auth, data.email, data.password)
        } catch (error) {
            window.alert('erro')
        }
        setLoading(false)
        setError(true)
    }

    return{
        auth,
        createUser,
        error,
        loading,
        logout,
        login
    }
}

export default useAuthentication