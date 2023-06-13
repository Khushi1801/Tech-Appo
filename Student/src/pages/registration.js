import {Link} from "react-router-dom";
import React,{Component,useState} from "react";
import Axios from 'axios';

function Registration(){

    const reg=()=>{
      alert("")
      window.location="/";
    }

    const onpost=(e) =>{
        e.preventDefault();

        const fname=document.getElementById('fname').value;
        const lname=document.getElementById('lname').value;
        const email=document.getElementById('email').value;
        const dob=document.getElementById('dob').value;
        const gender=document.getElementById('gender').value;
        const mobile=document.getElementById('mobile').value;
        const role=document.getElementById('role').value;
        const pwd=document.getElementById('pwd').value;
        //const date=document.getElementById('{date}').value;
        Axios.post('http://localhost:1350/api/registration',{a:fname,b:lname,c:email,d:dob,e:gender,f:mobile,g:role,h:pwd}).then((response)=>{
        
        ///Response
        alert(response.data.message);
        window.location="/";
        
        
        });
        
        }
return(
<>
<div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="content-wrapper d-flex align-items-center auth px-0">
        <div class="row w-100 mx-0">
          <div class="col-lg-4 mx-auto">
            <div class="auth-form-light text-left py-5 px-4 px-sm-5">
              <div class="brand-logo">
                <img src="../../images/logo-dark.svg" alt="logo" />
              </div>
              <h4>New here?</h4>
              <h6 class="font-weight-light"></h6>
              <form class="pt-3">
                <div class="form-group">
                  <input type="text" class="form-control form-control-lg" id="fname" placeholder="First Name" />
                </div>
                <div class="form-group">
                    <input type="text" class="form-control form-control-lg" id="lname" placeholder="Last Name" />
                  </div>
                <div class="form-group">
                  <input type="email" class="form-control form-control-lg" id="email" placeholder="Email" />
                </div>
                <div class="form-group">
                    <input type="text" class="form-control form-control-lg" id="dob" placeholder="Date of Birth" />
                </div>
                <div class="form-group">
                    <select class="form-control form-control-lg" id="gender">
                      <option>Gender</option>
                      <option>Female</option>
                      <option>Male</option>
                    </select>
                  </div>
                <div class="form-group">
                    <input type="text" class="form-control form-control-lg" id="mobile" placeholder="Mob Number" />
                  </div>
                <div class="form-group">
                  <select class="form-control form-control-lg" id="role">
                    <option>Role</option>
                    <option>Student</option>
                    <option>Faculty</option>
                  </select>
                </div>
                <div class="form-group">
                  <input type="password" class="form-control form-control-lg" id="pwd" placeholder="Password" />
                </div>
                
                <div class="mt-3">
                  <a class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" href="#" onClick={onpost}>REGISTER</a>
                </div>
                <div class="text-center mt-4 font-weight-light">
                  <Link to="/" class="text-primary">Login</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
  </div>
</>
);
}

export default Registration;