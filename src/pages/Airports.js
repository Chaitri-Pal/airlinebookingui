import axios from 'axios';
import { useEffect, useState } from 'react';




const baseUrl = "https://localhost:44377/api";

const ViewAllAirports = () => {
    //const {user} = useContext(UserContext);
    const[allAirports, setallAirports] = useState([]);
    // const[schedule, setSchedule] = useState(null);
    useEffect(() => {
        getPosts();
      }, []);
    
      // get posts
      const getPosts = () => {
        axios
          .get(baseUrl+"/Airport")
          .then((response) => {
            if (response.status === 200) {
              setallAirports(response?.data);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      };
      var images=["https://th.bing.com/th/id/OIP.eB90vt_0TsDTQ-A4s2a2qQHaEh?w=273&h=180&c=7&r=0&o=5&pid=1.7",
      "https://th.bing.com/th/id/OIP.nVF8c-Qd3XJFj4ydRCGfIAHaES?w=277&h=180&c=7&r=0&o=5&pid=1.7",
      "https://th.bing.com/th/id/OIP.jbzqorVAX92anDffsvNiNgHaE4?w=292&h=193&c=7&r=0&o=5&pid=1.7",
      "https://th.bing.com/th/id/OIP.C_CEWQmKg9W-2gNPbnoPnQHaE8?w=236&h=180&c=7&r=0&o=5&pid=1.7",
      "https://th.bing.com/th/id/OIP.2FKbXM0-5en6ZLQTp3tIsAHaEJ?w=282&h=180&c=7&r=0&o=5&pid=1.7",
      "https://th.bing.com/th/id/OIP.mj2LsxM4_BcSIZG-rMiscgHaE3?w=266&h=180&c=7&r=0&o=5&pid=1.7",
      "https://th.bing.com/th/id/OIP.h0745e8qXQc9cvzPAN_AKwHaE8?w=294&h=196&c=7&r=0&o=5&pid=1.7",
      "https://th.bing.com/th/id/OIP.idBbkSkH4nXVIhDbA5QBEwHaE8?w=267&h=180&c=7&r=0&o=5&pid=1.7",
      "https://img.freepik.com/free-vector/closed-airport-due-pandemic_23-2148515720.jpg?size=626&ext=jpg&ga=GA1.2.1430938178.1687354579&semt=ais"];
      var i = 0;

    return (
    <div>
      <div className='container mt-3 mb-3'>
        <div class="row row-cols-1 row-cols-md-3 g-4">

            {allAirports.map((airport)=>(
                <div class="card mb-3" key={airport.id}> 
                <img src= {i < images.length ? images[i++] : images[images.length-1]} class="card-img-top" alt="Image not yet updated"/>
                <div class="card-body">
                  <h5 class="card-title">{airport.state}-{airport.city}</h5>
                  <p class="card-text">Indulge in the grandeur of our luxurious lounges, adorned with elegant furnishings and serene ambiance, offering a tranquil haven for relaxation before your journey. At the heart of {airport.state} in {airport.city}</p>
                </div>
              </div>
            ))}
            </div>
        </div>
    </div>
  );
}

export default ViewAllAirports;