import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../Style/LoginRegistrationStyle.css';
import axios from 'axios';
import { UserContext } from '../Components/Routers';
import { Toaster, toast } from 'react-hot-toast';

const baseUrl = "https://localhost:44377/api";

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [dateofbirth, setDateOfBirth] = useState('');
  const [phone, setPhone] = useState('');

  const [status, setStatus] = useState(false);
  
  const navigate = useNavigate();
  const {setUser} = useContext(UserContext);




  let user = {
    roleType: role,
    email: email,
    password: password,
    name: name,
    address: address,
    phone: phone,
    aadhar: aadhar,
    dob: dateofbirth

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
    setStatus(false);
    axios.post(baseUrl+"/UserLogin/Register",user).then((res)=>{
      console.log(res);
      if(res.status === 200){
        console.log("Welcome!!");
        setStatus(true);
      }
      else if(res.data === "User with same Email Id already exists!")
      {
        setStatus(false);
        console.log("Email Id exists");
      }
    }).catch((err)=>{
      console.log(err.response.data);
      if(err.response.data === "User with same Email Id already exists!")
      toast.error("Email Id exists")
      else
      toast.error("Incorrect Credentials")
    });
    console.log(email);
    if(status === true){
    axios.get(baseUrl+"/User/Email/emailid?emailid="+email).then((res)=>{
      setUser(res.data);
      console.log(res.data);
      navigate("/");
    })
  }
  };


  return (
    <div className="login-container">
      <div><Toaster/></div>
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="**********"
          id="password"
          name="password"
          required
        />

        <label htmlFor="role">Role Type</label>
        <input
          value={role}
          onChange={(event) => setRole(event.target.value)}
          type="text"
          placeholder="User Role"
          id="role"
          name="role"
          required
        />

        <label htmlFor="name">Full Name</label>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Full Name"
          id="name"
          name="name"
          required
        />

        <label htmlFor="address">Address</label>
        <input
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          type="text"
          placeholder="Address"
          id="address"
          name="address"
          required
        />

        <label htmlFor="aadhar">Aadhar Number</label>
        <input
          value={aadhar}
          onChange={(event) => setAadhar(event.target.value)}
          type="text"
          placeholder="Aadhar Number"
          id="aadhar"
          name="aadhar"
          required
        />

        <label htmlFor="dateofbirth">Date of Birth</label>
        <input
          value={dateofbirth}
          onChange={(event) => setDateOfBirth(event.target.value)}
          type="date"
          placeholder="yyyy-mm-dd"
          id="dateofbirth"
          name="dateofbirth"
          required
        />

        <label htmlFor="phone">Mobile No.</label>
        <input
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          type="phone"
          placeholder="Mobile No."
          id="phone"
          name="phone"
          required
        />

        <button type="submit" className="login-button">
          Register
        </button>
      </form>

      <p className="account-text">Already have an Account?</p>
      <NavLink to="/login" className="login-link">
        <button className="login-button">Login here</button>
      </NavLink>
    </div>
  );
}

export default Register;
