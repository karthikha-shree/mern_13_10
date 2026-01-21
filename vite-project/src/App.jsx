import { Routes, Route } from 'react-router-dom'
import Nav from './components/navbar'
import Home from './pages/home'
import Contact from './pages/Contact'
import About from './pages/about'
import State from './hooks/state'
function App() {

  return (
    <>
      <Nav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/State' element={<State />} />
        <Route path='/home/State' element={<State />} />
      </Routes>
    </>
  )
}

export default App