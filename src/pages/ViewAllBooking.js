import React, { useContext, useState } from 'react'
import axios from 'axios';
import { UserContext } from '../Components/Routers';
import { useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';




const baseUrl = "https://localhost:44377/api";

const ViewAllBooking = () => {
    const {user} = useContext(UserContext);
    const[allBooking, setAllBooking] = useState([]);
    
    //const[schedule, setSchedule] = useState(null);
    useEffect(() => {
        getPosts();
      }, []);
    
      // get posts
      const getPosts = () => {
        axios
          .get(baseUrl+"/Booking/user/"+user.id)
          .then((response) => {
            if (response.status === 200) {
              setAllBooking(response?.data);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      };

      const cancelBooking = (e) =>{
        e.preventDefault();
        axios.delete(baseUrl+"/Booking/"+e.target.value).then((res) =>{
          console.log(res.data);
          toast.success(res.data);
        }).catch((err)=>{
          console.log(err.response.data);
        })
      }
    

    return (
    <div>
        <div><Toaster /></div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            {allBooking.map((book)=>(
                <div class="col mt-5" key={book.id}>
                <div class="card h-100">
                  <div class="card-body">
                    <h5 class="card-title">Booking id : {book.id}</h5>
                    <p class="card-text">Date : {new Date(book.booking_date).toLocaleDateString()}<br/>
                     Status: {book.b_status}<br/>
                     Shedule Id : {book.schedule_Id}<br/>
                     User Id : {book.user_Id}<br/>
                     Reward Id : {book.reward_Id}<br/>
                    </p>
                    <div><button type="button" value={book.id} class="btn btn-danger" onClick={cancelBooking} id="Cancel">Cancel Booking</button></div>
                  </div>
                </div>
              </div>
            ))}
        </div>
    </div>
    )
}

export default ViewAllBooking