import './App.css'
import {BrowserRouter, Route, Routes} from"react-router-dom"

//IMPORT PAGES
import Home from"./Pages/Home/index"
import About from './Pages/About'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/register'
import Dashboard from './Pages/Dashboard'
import CreatePost from './Pages/CreatePost'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/create/post" element={<CreatePost/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
