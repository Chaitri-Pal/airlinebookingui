import axios from 'axios';
import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

const baseUrl = "https://localhost:44377/api";

const AddSchedule = () => {

    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [flight, setFlight] = useState('');
    const [arrTime, setArrTime] = useState('');
    const [depTime, setDepTime] = useState('');

    let sh = {
        dep_Time: depTime+":00.000Z",
        arr_Time: arrTime+":00.000Z",
        dep_id: source,
        arr_id: destination,
        flight_Id: flight
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(arrTime);
        axios.post(baseUrl + "/Schedule", sh).then((res) => {
            console.log(res.data)
            toast.success(res.data);
        }).catch(err =>
            console.log(err.response.data));
    }

    return (
        <div >
            <div><Toaster /></div>
            <div className="container mt-5" style={{boxShadow:'0 0 10px rgba(0,0,0,0.5)',width: '1000px', height: '350px',backgroundColor: '#f0f0f0',borderRadius:'20px'}}>
                
                <form class="row g-3" onSubmit={handleSubmit}>
                    <div class="col-md-6">
                        <label class="form-label">Source</label>
                        <select id="source" class="form-select" onChange={(e) => setSource(e.target.value)} required>
                            <option selected value="">Choose Source</option>
                            <option value="1">Kolkata</option>
                            <option value="2">Mumbai</option>
                            <option value="3">Hyderabad</option>
                            <option value="4">Amritsar</option>
                            <option value="6">Chennai</option>
                            <option value="5">Guwahati</option>
                            <option value="7">Odisha</option>
                            <option value="8">Jaipur</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Destination</label>
                        <select id="destination" class="form-select" onChange={(e) => setDestination(e.target.value)} required>
                            <option selected value="">Choose Destination</option>
                            <option value="1">Kolkata</option>
                            <option value="2">Mumbai</option>
                            <option value="3">Hyderabad</option>
                            <option value="4">Amritsar</option>
                            <option value="6">Chennai</option>
                            <option value="5">Guwahati</option>
                            <option value="7">Odisha</option>
                            <option value="8">Jaipur</option>
                        </select>
                    </div>

                    <div class="col-md-6">
                        <label class="form-label">Arrival Date Time</label>
                        <input type="datetime-local" class="form-control" id="travelDate" onChange={(e) => setArrTime(e.target.value)} required/>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Departure Date Time</label>
                        <input type="datetime-local" class="form-control" id="travelDate" onChange={(e) => setDepTime(e.target.value)} required/>
                    </div>

                    <div class="col-md-6">
                        <label class="form-label">Flight</label>
                        <select id="flight" class="form-select" onChange={(e) => setFlight(e.target.value)} required>
                            <option selected value="">Choose Flight</option>
                            <option value="1">Indigo</option>
                            <option value="2">Air India</option>
                            <option value="3">Spicejet</option>
                            <option value="4">Vistara</option>
                            <option value="5">Go First</option>
                        </select>
                    </div>

                    <div class="col-12">
                        <button type="submit" class="btn btn-primary" id="AddSchedule">Add Schedule</button>
                    </div>
                </form>
            </div>

     


        </div>
    )
}

export default AddSchedule;