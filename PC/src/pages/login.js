import { Link } from "react-router-dom";
import React,{Component,useState} from "react";
import swal from '@sweetalert/with-react';
import Axios from 'axios';


function Login(){
var typeid;
  
  const onpost=() =>{

    const email=document.getElementById('mailid').value;
    const password=document.getElementById('pwd').value;
  //  Axios.post('http://localhost:1350/api/login',{a:email,b:password,c:type}).then((response)=>{
        
   
    if(email=="Admin" && password=="Admin"){
      let obj={email:email,fname:"Project Co-Ordinator"}; //result array has one output hence index [0]
    
			localStorage.setItem('PC',JSON.stringify(obj)); //to store in string form
      swal("HELLO!", "Welcome " +  obj.fname + "!")
      
      //swal("Hello "+ response.data[0].fname)
      .then(() => {
        window.location = "/" ;
      });
      //alert('Welcome Head');

            //window.location = "/" ;
   
    
    }
    else{
      swal("SORRY!", "Wrong ID or Password!")
      .then(() => {
        window.location = "/" ;
      });

      // alert("Wrong ID or Password");
      // window.location="/";

       }
    
   // });
    
    
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
                <img src="../../images/logo-dark.svg" alt="logo"/>
              </div>
              <h4>Come ON! let's get the progress...</h4>
              <h6 class="font-weight-light"></h6>
              <form class="pt-3">
                
                <div class="form-group">
                  <input type="text" class="form-control form-control-lg" id="mailid" placeholder="Mail-ID"/>
                </div>
                <div class="form-group">
                  <input type="password" class="form-control form-control-lg" id="pwd" placeholder="Password"/>
                </div>
                <div class="mt-3">
                  <a class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" href="#" onClick={onpost}>LOG IN</a>
                </div>
                <div class="text-center mt-4 font-weight-light">
                  <a href="#" class="text-primary">Forgot password?</a>
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

export default Login;