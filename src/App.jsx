// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Home from './pages/Home';
import "./App.css";
import {Routes,Route} from 'react-router-dom'
import NavBar from './pages/NavBar';
import Projects from './pages/Projects';
import Illustrations from './pages/Illustrations';
import Blogs from './pages/Blogs';

function App() {
  return <div>
    <div>
      <NavBar/>
      <main className='main-content'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Projects' element={<Projects />}/>
            <Route path='/Illustrations' element={<Illustrations />}/>
            <Route path='/Blogs' element={<Blogs />}/>
          </Routes>
          <div className='Copyright'>© Aman Verma 2025</div>
        </main>
      </div>
  </div>

}

export default App
