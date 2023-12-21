import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Mars from './pages/Mars'
import Europa from './pages/Europa'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination/*' element={<Destination />} />
        <Route path='/destination/mars' element={<Mars />} />
        <Route path='/destination/europa' element={<Europa />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App