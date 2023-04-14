import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'


// components

import Navbar from './components/Navbar/Navbar'

// pages

import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Vacations from './pages/Vacations';
import Cruises from './pages/Cruises';
import Contact from './pages/Contact';
import VacationDetails from './pages/VacationDetails';
import CruiseDetails from './pages/CruiseDetails';





// React Router Func
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Navbar />}>
    <Route index element={<Home />} />
    <Route path='destinations' element={<Destinations />} />
    <Route path='cruises' element={<Cruises />} />
    <Route path='vacations' element={<Vacations />} />
    <Route path='contact' element={<Contact />} />
    <Route path='vacations/:name' element={<VacationDetails />} />
    <Route path='cruises/:id' element={<CruiseDetails />} />
  </Route>
))


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>

  );
}

export default App;
