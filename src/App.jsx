import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Search from './pages/Search';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Courses" element={<Courses />}></Route>
        <Route path="/Search" element={<Search />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;