import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { UserContext } from './Routers';

function NavBar() {

    const { user } = useContext(UserContext);
    const { setUser } = useContext(UserContext);
    const [roleType, setRoleType] = useState('');
    
    useEffect(() =>{
        if(user !== null){
            setRoleType(user.roleType);
        }
        
    }, [])

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <NavLink className="navbar-brand ms-5" to="/">Flight Booking</NavLink >
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/ViewAllFlight">Flights</NavLink >
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/viewAllAirport">Airports</NavLink >
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink >
                    </li>
                    <li className="nav-item">
                        {!user && <NavLink className="nav-link" to="/register">Register</NavLink >}
                    </li>
                    <li className="nav-item">
                        {user && user.roleType ==="User" && <NavLink className="nav-link" to="/booking">Book Flight</NavLink >}
                    </li>
                    <li className="nav-item">
                        {user && user.roleType ==="User" && <NavLink className="nav-link" to="/viewAllBooking">Booking History</NavLink >}
                    </li>
                    <li className="nav-item">
                        {user && user.roleType ==="Admin" && <NavLink className="nav-link" to="/AddSchedule">Add Schedule</NavLink >}
                    </li>
                    <li className="nav-item">
                        {user && user.roleType ==="Admin" && <NavLink className="nav-link" to="/ViewAllSchedule">View All Schedule</NavLink >}
                    </li>
                    <li className="nav-item">
                        {user && <NavLink className="nav-link" to="/UserProfile">Profile</NavLink >}
                    </li>
                    <li className="nav-item">
                        {user ? <NavLink className="nav-link" to="/login" onClick={() => {setUser(null);setRoleType('')}}>Log Out</NavLink > : <NavLink className="nav-link" to="/login" >Login</NavLink >}
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;