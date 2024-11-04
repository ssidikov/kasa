import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Property from './pages/Property'
import Error from './pages/Error'
import Header from './components/Header'
import Footer from './components/Footer'
import './styles/styles.sass'
import { HashRouter } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <div className='app-container'>
        <Header />
        <main className='content-wrapper'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/property/:id' element={<Property />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
