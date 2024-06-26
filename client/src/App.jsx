import './App.css';
import {Routes, Route} from 'react-router-dom';
import NavBar from '../src/components/Navbar';
import Home from '../src/pages/Home';
import Register from '../src/pages/Register';
import Login from '../src/pages/Login';
import axios from 'axios';

//Backend URL 
axios.defaults.baseURL = 'https://localhost:8081';
axios.defaults.withCredentials = true


function App() {
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>

    </>
  )
}

export default App
