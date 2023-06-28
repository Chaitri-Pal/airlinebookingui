import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { UserContext } from '../Components/Routers';
import { useNavigate } from 'react-router-dom';




const baseUrl = "https://localhost:44377/api";
const Booking = () => {

  const{user} = useContext(UserContext);
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [schedule, setSchedule] = useState([]);
  const [sourceId, setSourceId] = useState('');
  const [destinationId, setDestinationId] = useState('');
  const [status, setStatus] = useState(false);
  const [loyalty, setLoyalty] = useState(0);
  const [payment, setPayment] = useState('');
  const [flightId, setFlightId] = useState(0);
  const [scheduleId, setScheduleId] = useState(0);
  const [bookingId, setBookingId] = useState(null);
  const [bookingstatus, setBookingStatus] = useState(false);
  const navigate = useNavigate()


  const handleSubmit = (event) => {
    if(user===null){
      navigate("/login");
    }
    event.preventDefault();
    axios
      .get(baseUrl + "/Schedule/" + sourceId + "/" + destinationId + "/" + date).then((res) => {
        setSchedule(res.data);
        console.log(res.data);
        console.log(schedule.length);
        if (res.data.length === 0) {
          toast.error("No FLights available");
        }
      }).catch((err) => {
        console.log(err.response.data);
      })
    // if (schedule.length === 0) {
    //   toast.error("No FLights available");
    // }
    // console.log(schedule.length);
  }


  const setUpSource = (e) => {
    const arr = e.target.value.split("-");
    setSource(arr[1]);
    setSourceId(arr[0]);
  }

  const setUpDestination = (e) => {
    const arr = e.target.value.split("-");
    setDestination(arr[1]);
    setDestinationId(arr[0]);
  }

  const bookingFlight = (e) => {
    setStatus(true);
    const arr = e.target.value.split(":");
    setFlightId(arr[0]);
    setScheduleId(arr[1]);
  }
 
  const findBookingId = () =>{
    axios.get(baseUrl+"/Booking").then((res)=>{
      const arr = res.data;
      setBookingId(arr[arr.length-1]);
      console.log(arr[arr.length-1]);
      
      if(bookingId !== null)
      {
      let p ={
        p_Type: payment,
        p_Status: "Yes",
        payment_date:  new Date(),
        amount: 2000,
        user_Id: user.id,
        booking_Id: bookingId.id,
        reward_Id: loyalty
      
      }
      axios.post(baseUrl+"/Payment",p).then((res)=>{
        console.log(res.data);        
      }).catch((err)=>{
        console.log(err.response.data);
      });
    }
    }).catch((err)=>{
      console.log(err.response.data);
    });

  }


  const completeBooking = (e) => {
    setStatus(false);
    if(e.target.value === "cancel"){
      toast.error("Payment Cancelled");
    }
    else
    {
      setBookingStatus(true);
      let d = {
        booking_date: new Date(),
        b_status: "Yes",
        schedule_Id: scheduleId,
        user_Id: user.id,
        reward_Id: loyalty
      };
      axios.post(baseUrl+'/Booking/BookingByUser',d).then((res)=>{
        console.log(res.data);
        findBookingId();
      }).catch((err)=>{
        console.log(err.response.data);
      });

    }
  }

  return (

    <div className="container">
      <div><Toaster /></div>
      <form class="row g-3" onSubmit={handleSubmit}>
        <div class="col-md-6">
          <label class="form-label">Source</label>
          <select id="source" class="form-select" onChange={setUpSource} required>
            <option selected value="">Choose Source</option>
            <option value="1-Kolkata">Kolkata</option>
            <option value="2-Mumbai">Mumbai</option>
            <option value="3-Hyderabad">Hyderabad</option>
            <option value="4-Amritsar">Amritsar</option>
            <option value="5-Guwahati">Guwahati</option>
            <option value="6-Chennai">Chennai</option>
            <option value="7-Odisha">Odisha</option>
            <option value="8-Jaipur">Jaipur</option>
          </select>
        </div>
        <div class="col-md-6">
          <label class="form-label">Destination</label>
          <select id="destination" class="form-select" onChange={setUpDestination} required>
            <option selected value="">Choose Destination</option>
            <option value="1-Kolkata">Kolkata</option>
            <option value="2-Mumbai">Mumbai</option>
            <option value="3-Hyderabad">Hyderabad</option>
            <option value="4-Amritsar">Amritsar</option>
            <option value="5-Guwahati">Guwahati</option>
            <option value="6-Chennai">Chennai</option>
            <option value="7-Odisha">Odisha</option>
            <option value="8-Jaipur">Jaipur</option>
          </select>
        </div>

        <div class="col-md-6">
          <label class="form-label">Date</label>
          <input type="date" class="form-control" id="travelDate" onChange={(e) => setDate(e.target.value)} required/>
        </div>


        <div class="col-12">
          <button type="submit" class="btn btn-primary">Search Flight</button>
        </div>
      </form>

      {schedule &&
        <div className='mt-3'>
          {schedule.map((sh) => (
            <div class="card">
              <h5 class="card-header">Schedule Id : {sh.id}</h5>
              <div class="card-body">
                <h5 class="card-title">Flight id : {sh.flight_Id}</h5>
                <p class="card-text" ><b>Departure Time</b> : {new Date(sh.dep_Time).toLocaleTimeString('en-US')} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  <b >Arrival Time</b> : {new Date(sh.arr_Time).toLocaleTimeString('en-US')}<br />
                  <b>From</b> : {source} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  <b>To</b> : {destination} <br />
                </p>
                <button class="btn btn-primary" onClick={bookingFlight} value={sh.flight_Id + ":" + sh.id}>Book</button>
              </div>
            </div>
          ))}
        </div>
      }


      {/* <>
Pop up Payment
</> */}

      {status && <Modal size="lg" isOpen={status}>
        <ModalHeader>
          Booking Id
        </ModalHeader>
        <ModalBody>
        <div class="col-md-6">
          <label class="form-label">Payment Type</label>
          <select id="ptype" class="form-select" onChange={(e) => setPayment(e.target.value)} required>
            <option selected value="">Choose Payment Type</option>
            <option value="Card">Card</option>
            <option value="UPI">UPI</option>
            <option value="Net Banking">Net Banking</option>
          </select>
        </div>
        <div class="col-md-6">
          <label class="form-label">Loyalty Value</label>
          <input type="number" class="form-control" id="lvalue" onChange={(e) => setLoyalty(e.target.value)} required/>
        </div>

          <ModalFooter style={{ alignContent: 'center' }}>
            <button type="button" class="btn btn-success" onClick={completeBooking}>Confirm Payment</button>
            <button type="button" class="btn btn-danger" onClick={completeBooking} value="cancel">Cancel</button>
          </ModalFooter>
        </ModalBody>
      </Modal>}



{/* Booking Confirmation Popup */}

      {bookingId && <Modal size="lg" isOpen={bookingstatus}>
        <ModalHeader>
          Booking Id : {bookingId.id}
        </ModalHeader>
        <ModalBody>
        <p class="card-text" >
                  <b>Booking Date</b> : {(new Date()).toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false })}<br/>
                  <b>Flight Id</b> : {flightId}<br/>
                  <b>Schedule Id</b> : {scheduleId}<br/>
                  <b>Amount</b> : 2000 <br/>
                  <b>Booking Status</b> : Confirm <br />
                </p>

          <ModalFooter style={{ alignContent: 'center' }}>
            <button type="button" class="btn btn-success" onClick={(()=>{setBookingStatus(false)})}>Done</button>
          </ModalFooter>
        </ModalBody>
      </Modal>}
 

    </div>

  )
}

export default Booking