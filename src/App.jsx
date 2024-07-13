import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.pages';
import Project from './pages/projects/Project.pages'
import Contact from './pages/contact/Contact.pages';
import Services from './pages/services/Services.pages';
import About from './pages/about/About.pages';
import Navigation from './pages/navigation/Navigation.pages';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='projects' element={<Project />} />
        <Route path='contact' element={<Contact />} />
        <Route path='services' element={<Services />} />
        <Route path='about' element={<About />} />
      </Route>
    </Routes>
  )
}

export default App;
