import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './store/Layout'
import Home from './pages/Home'
import Project from './pages/Project'
import About from './pages/About'
import Contact from './pages/Contact'



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
           <Route path='/' element={<Home />} />
           <Route path='/about' element={<About />}/>
           <Route path='/project' element={<Project />} />
           <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
