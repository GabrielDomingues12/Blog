import useAuthentication from "../../../Hooks/Authetication/useAuthentication"
import Form from "../../../Components/Form/Form"
import { useState } from "react"
const Register = () => {
  const auth = useAuthentication()
  const[displayNama, setDisplayName] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState(false)
  const{createUser, error: authError} = auth

  const handleCreateUser = async (e) => {
    e.preventDeafult()
    const user = {
      email: '',
      displayNama: '', 
      password: ''
    }
    if(password.length < 6){
      window.alert('the password need six characters')
    }else if(password != confirmPassword){
      window.alert('The passwords is diffrent')
    }else{
      const response = await createUser(user)
      return response
    }

  }
  return (
    <>
    
      <Form/>
    </>
  )
}

export default Register