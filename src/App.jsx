import './App.css'
import {BrowserRouter, Route, Routes} from"react-router-dom"
//IMPORT COMPONENTS
//IMPORT HOOKS
import useAuthentication from './Hooks/Authetication/useAuthentication'
import { onAuthStateChanged } from 'firebase/auth'
//IMPORT PAGES
import Home from"./Pages/Home/index"
import About from './Pages/About'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/register'
import Dashboard from './Pages/Dashboard'
import CreatePost from './Pages/CreatePost'
import { useEffect, useState } from 'react'

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user){
      setUser(user);
      }
    });
  }, [auth]);

return ( 
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={user && user ? <Home/> : <Login/>} />
          <Route path="/" element={<About/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element={user && user ? <Dashboard/> : <Login/>}/>
          <Route path="/create/post" element={user && user ? <CreatePost/> : <Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
