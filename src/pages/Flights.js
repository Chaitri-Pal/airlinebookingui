import React, { useState } from 'react'
import axios from 'axios';

import { useEffect } from 'react';




const baseUrl = "https://localhost:44377/api";

const ViewAllFlights = () => {
    //const {user} = useContext(UserContext);
    const [allFlights, setallFlights] = useState([]);
    // const[schedule, setSchedule] = useState(null);
    useEffect(() => {
        getPosts();
    }, []);

    // get posts
    const getPosts = () => {
        axios
            .get(baseUrl + "/Flight")
            .then((response) => {
                if (response.status === 200) {
                    setallFlights(response?.data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
    var images = ["https://th.bing.com/th/id/OIP.hJDq_0ajQ0rusuvuPuS34AHaFP?w=276&h=195&c=7&r=0&o=5&pid=1.7",
        "https://th.bing.com/th/id/OIP.6h7lKuU93BnkI3D3FBD0IQHaE3?w=254&h=180&c=7&r=0&o=5&pid=1.7",
        "https://th.bing.com/th/id/OIP.WBpCNL_wECdVMIEcd88higHaE8?w=250&h=180&c=7&r=0&o=5&pid=1.7",
        "https://th.bing.com/th/id/OIP.N20X9g9G2IAk0yOsC5cOLQFNC7?w=294&h=180&c=7&r=0&o=5&pid=1.7",
        "https://th.bing.com/th/id/OIP.fI-gVE7_vwkLOsJSr4aQGwHaD4?w=292&h=180&c=7&r=0&o=5&pid=1.7",
        "https://th.bing.com/th/id/OIP.jAA0XZgj0TmewA8zpO4--AHaE8?w=278&h=186&c=7&r=0&o=5&pid=1.7"
        ];
    var i = 0;

    return (
        <div>
            <div className='container mt-3 mb-3'>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {allFlights.map((flight) => (
                    <div class="card mb-3" key={flight.id}>
                        <div class="card mb-3" style={{ maxWidth: '540px' }}>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={i < images.length ? images[i++] : images[images.length-1]} class="card-img-top" alt="Image not yet updated" />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{flight.flight_Name}</h5>
                                        <p class="card-text">Total Seating Capacity: {flight.seat_Capacity}<br/>
                                            Total Weight Capacity : {flight.weight_Limit}<br/>
                                            Total Flying Hours : {flight.flying_Hours}<br/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            </div>
            );
}

export default ViewAllFlights;