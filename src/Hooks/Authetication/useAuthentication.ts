// import { db } from "../../../Firebase/config"
import { useState, useEffect } from "react"
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
    const auth = getAuth()

    function checkIsCancelled(){
        if(cancelled){
            return
        }
    }

    const createUser = async (data: {
        email: string,
        password: string,
        displayName: string,
        name: string
    }) => {
        checkIsCancelled()
        setError(false)
        setLoading(true)
        try {
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            await updateProfile(user,{
                displayName: data.name
            })
            setLoading(false)
            return{
                createUser,
                auth,
                error: false,
                loading: false
            }
        } catch (authError) {
            window.alert('LOGIN ERROR')
            return{
                createUser,
                auth,
                error: true,
                loading: false
            }
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