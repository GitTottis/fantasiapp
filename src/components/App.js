import React from 'react'
import NavBar from './NavBar'
import FantasInfo from './Fantasinfo'
import Stats from './Stats'
import Account from './Account'

import { Routes, Route } from "react-router-dom";

import './styles/App.css'

function App() {
  
  return(
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<FantasInfo/>} />
        <Route path="/account" element={<Account/>} />
        <Route path="/fantasinfo" element={<FantasInfo/>} />
        <Route path="/stats" element={<Stats/>} />
      </Routes>
    </>
  )
}

export default App;
