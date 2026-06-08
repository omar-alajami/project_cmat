import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Search from './pages/Search';
import About from './pages/About';
import CoursePage from './pages/CoursePage';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar></Navbar>

        <div className='content'>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Courses" element={<Courses />}></Route>
            <Route path="/Courses/:id" element={<CoursePage />}></Route>
            <Route path="/Search" element={<Search />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>

        <Footer></Footer>
      </div>
      <Analytics />
    </BrowserRouter>
  )
}

export default App;
