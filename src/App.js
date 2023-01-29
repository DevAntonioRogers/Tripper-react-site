import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'


// components

import Navbar from './components/Navbar/Navbar'
import BottomHero from './components/HomeComponents/BottomHero/BottomHero';

// pages

import Home from './pages/Home';
import Destinations from './pages/Destinations';
import About from './pages/About';
import Cruises from './pages/Cruises';
import Contact from './pages/Contact';


// React Router Func
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Navbar />}>
    <Route index element={<Home />} />
    <Route path='destinations' element={<Destinations />} />
    <Route path='cruises' element={<Cruises />} />
    <Route path='about' element={<About />} />
    <Route path='contact' element={<Contact />} />
  </Route>
))


function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <BottomHero />
    </div>

  );
}

export default App;
