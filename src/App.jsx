import React from 'react'
// import { Routes, Route } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
// import About from './pages/About'
// import Property from './pages/Property'
// import Error from './pages/Error'
import Header from './components/Header'
// import Footer from './components/Footer'
import './styles/styles.sass'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/about' element={<About />} />
        <Route path='/property/:id' element={<Property />} />
        <Route path='*' element={<Error />} /> */}
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App
