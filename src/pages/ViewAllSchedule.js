import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';



const baseUrl = "https://localhost:44377/api";

const ViewAllSchedule = () => {
    //const {user} = useContext(UserContext);
    const [scheduleList, setScheduleList] = useState([]);
    // const[schedule, setSchedule] = useState(null);
    useEffect(() => {
        getPosts();
    }, []);

    // get posts
    const getPosts = () => {
        axios
            .get(baseUrl + "/Schedule")
            .then((response) => {
                if (response.status === 200) {
                    setScheduleList(response?.data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };


    const cancelSchedule = (e) =>{
        e.preventDefault();
        axios.delete(baseUrl+"/Schedule/"+e.target.value).then((res) =>{
          console.log(res.data);
          toast.success(res.data);

        }).catch((err)=>{
          console.log(err.response.data);  
        })
      }


    return (
        <div>
            <div><Toaster/></div>
            <table class="table table-light table-striped mt-5">
                <thead>
                    <tr>
                        <th scope="col">Schedule Id</th>
                        <th scope="col">Arrival Location Id</th>
                        <th scope="col">Departure Location Id</th>
                        <th scope="col">Arrival Date Time</th>
                        <th scope="col">Departure Date Time</th>
                        <th scope="col">Flight Id</th>
                        <th scope="col">Options</th>
                    </tr>
                </thead>
                <tbody>
                {scheduleList.map((sch) => (
                    <tr key={sch.id}>
                    <th scope="row">{sch.id}</th>
                    <td>{sch.arr_id}</td>
                    <td>{sch.dep_id}</td>
                    <td>{sch.arr_Time}</td>
                    <td>{sch.dep_Time}</td>
                    <td>{sch.flight_Id}</td>
                    <td><button type="button" value={sch.id} class="btn btn-danger" onClick={cancelSchedule} id="Delete">Delete</button></td>
                  </tr>
                
                ))}
                </tbody>
            </table>

        </div>
  );
}

export default ViewAllSchedule;