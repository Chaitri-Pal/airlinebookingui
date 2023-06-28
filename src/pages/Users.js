import React, { useContext, useState } from 'react'
import axios from 'axios';
import { UserContext } from '../Components/Routers';
import { useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { useNavigate } from 'react-router-dom';



const baseUrl = "https://localhost:44377/api";

const UserProfile = () => {
    const { user } = useContext(UserContext);
    const [userDetails, setuserDetails] = useState(null);
    const [status, setStatus] = useState(false);
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();


    useEffect(() => {
        if (user && user.id) {
            getPosts();
        }

    }, []);
    let u;
if(userDetails !==null){
    u ={
     id: user.id,
     roleType: user.roleType,
     name: user.name,
     address: address,
     phone: phone,
     email: user.email,
     aadhar: user.aadhar,
     dob: user.dob,
     password: user.password
    }}
    const handleSubmit = (e) =>{
        
        setStatus(false);
        axios.put(baseUrl+"/User/"+userDetails.id, u).then((res)=>{
            console.log(res.data);
            toast.success(res.data);
        }).catch((err)=>{
        console.log(err.response.data);
        toast.error(err.response.data);
    })}

    const getPosts = () => {
        if(user === null){
            navigate("/login");
        }
        axios
            .get(baseUrl + "/User/" + user.id)
            .then((response) => {
                if (response.status === 200) {
                    setuserDetails(response?.data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <div><Toaster /></div>
            <div class="row row-cols-1 row-cols-md-1 g-4 mt-3 justify-content-center">
                {userDetails &&
                    <div class="card mb-3" style={{ maxWidth: '540px' }}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="https://t3.ftcdn.net/jpg/05/70/71/06/240_F_570710660_Jana1ujcJyQTiT2rIzvfmyXzXamVcby8.jpg" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Name : {userDetails.name} </h5>
                                    <p class="card-text">User Id : {userDetails.id}<br />
                                        Role : {userDetails.roleType}<br />
                                        Address : {userDetails.address}<br />
                                        Phone : {userDetails.phone}<br />
                                        Email Id : {userDetails.email}<br />
                                        Aadhar : {userDetails.aadhar}<br />
                                        Date of Birth : {new Date(userDetails.dob).toLocaleDateString()}<br /></p>
                                    <button type="button" class="btn btn-info" onClick={() => setStatus(true)}>Update Profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
            {status && <Modal size="lg" isOpen={status}>
                <ModalHeader>
                    Update Profile
                </ModalHeader>
                <ModalBody>
                    <div class="mb-3">
                        <label  class="form-label">User Id</label>
                        <input type="text" class="form-control" id="UserId"  readOnly value={userDetails.id}/>
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Name</label>
                        <input type="text" class="form-control" id="Name" readOnly value={userDetails.name}/>
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Role</label>
                        <input type="text" class="form-control" id="Role"  readOnly value={userDetails.roleType}/>
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Address</label>
                        <input type="text" class="form-control" id="Address"  placeholder={userDetails.address} onChange={(e)=>setAddress(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Phone Number</label>
                        <input type="number" class="form-control" id="PhoneNumber"   placeholder={userDetails.phone} onChange={(e)=>setPhone(e.target.value)}/>
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Email</label>
                        <input type="email" class="form-control" id="Email" readOnly value={userDetails.email} />
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Aadhar</label>
                        <input type="text" class="form-control" id="Aadhar" readOnly value={userDetails.aadhar} />
                    </div>
                    <ModalFooter style={{ alignContent: 'center' }}>
                        <button type="button" class="btn btn-success" id="Update" onClick={handleSubmit}>Update</button>
                        <button type="button" class="btn btn-danger" id="Cancel" onClick={()=>setStatus(false)} value="cancel">Cancel</button>
                    </ModalFooter>
                </ModalBody>
            </Modal>}

        </div>
    );
}

export default UserProfile;