import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../Style/LoginRegistrationStyle.css';
import axios from 'axios';
import { UserContext } from '../Components/Routers';
import { Toaster, toast } from 'react-hot-toast';

const baseUrl = "https://localhost:44377/api"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('User');
  const [status, setStatus] = useState(false);
  
  const navigate = useNavigate();
  const {setUser} = useContext(UserContext);

  let user = {
    roleType: role,
    email: email,
    password: password
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus(false);
    axios.post(baseUrl+"/UserLogin/Login", user).then((res)=>{
      if(!res){
        console.log("Email id or password is incorrect");
      }
      else{
      setStatus(true);
      }
    }).catch((err)=>{
      console.log(err.response.data);
      toast.error("Email id or password is incorrect")
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
        <label  className="label-text">Email</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
          required
        />

        <label  className="label-text">Password</label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="**********"
          id="password"
          name="password"
          required
        />

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <p className="account-text">Don't have an Account?</p>
      <NavLink to="/register" className="register-link">
        <button className="register-button">Register here</button>
      </NavLink>
    </div>
  );
}

export default Login;
