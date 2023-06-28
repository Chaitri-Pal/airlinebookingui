import { BrowserRouter,Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import React, {createContext, useState} from 'react';
import NavBar from './NavigationBar';
import Booking from '../pages/Booking';
import ViewAllBooking from '../pages/ViewAllBooking';
import ViewAllAirports from '../pages/Airports';
import UserProfile from '../pages/Users';
import ViewAllFlights from '../pages/Flights';
import AddSchedule from '../pages/AddSchedule';
import ViewAllSchedule from '../pages/ViewAllSchedule';

export const UserContext = createContext();


const Routers = () => {
    const[user, setUser] = useState(null);
  return (
    <>
   
    <UserContext.Provider value={{user, setUser}} >
    <BrowserRouter>
    <NavBar/>
      <Routes >
         <Route path='/' element = {<Home/>} />
         <Route path='/login' element = {<Login />} />
         <Route path='/register' element = {<Register/>} />
         <Route path='/booking' element = {<Booking/>} />
         <Route path='/viewAllBooking' element = {<ViewAllBooking/>} />
         <Route path='/viewAllAirport' element = {<ViewAllAirports/>} />
         <Route path='/UserProfile' element = {<UserProfile/>} />
         <Route path='/ViewAllFlight' element = {<ViewAllFlights/>} />
         <Route path='/AddSchedule' element = {<AddSchedule/>} />
         <Route path='/ViewAllSchedule' element = {<ViewAllSchedule/>} />


      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
    </>
  )
}
export default Routers;