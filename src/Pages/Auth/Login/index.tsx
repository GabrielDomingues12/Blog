import { SLogin, ButtonForm } from "./style"
import { SInput } from "../../../Components/input/style"
import React, { useState } from "react"
import useAuthentication from "../../../Hooks/Authetication/useAuthentication"
import { useNavigate } from "react-router-dom"
const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const {login} = useAuthentication()
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const user = { 
      email,
      password  
    }
    const response = await login(user)
    console.log(response)
    setLoading(false)
  }
  return (
    <>
      <SLogin>
      <div>
            <div className="w-500">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <SInput required placeholder="email@example" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <SInput type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="flex items-center justify-between">
                        <ButtonForm type="submit">
                            Sign In
                        </ButtonForm>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2023 Blog. All rights reserved.
                </p>
            </div>
        </div>
      </SLogin>
    </>
  )
}

export default Login