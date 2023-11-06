import React, { useState } from 'react';
import useAuthentication from '../../../Hooks/Authetication/useAuthentication';
import { useNavigate } from 'react-router-dom';
import { SRegister } from './style';
import Alert from '@mui/material/Alert';

const Register = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const auth = useAuthentication();
  const { createUser } = auth;
  const navigate = useNavigate()
  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const user = {
      displayName,
      email,
      password,
      confirmPassword,
    }
    if (password.length < 6) {
      setError('The password needing 6 charcters.')
    } else if (password !== confirmPassword) {
      setError("The passwords is differents.")
    } else {
      setSuccess('sing up make success')
      const response = await createUser(user)
      console.log(response)
      navigate('/')
    }
  };

  return (
    <div>
      <SRegister>
        <form onSubmit={handleCreateUser}>
          <div className="w-500 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
              <input
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                onChange={(e) => setDisplayName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input
                className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Insert password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
              <input
                className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmPassword"
                type="password"
                placeholder="Confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Up
              </button>
              <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          {error && error ? (
            <Alert severity='error'>{error}</Alert>
          ) : success && (
            <Alert severity='success'>{success}</Alert>
          )}
        </form>
      </SRegister>
    </div>
  );
};

export default Register;
