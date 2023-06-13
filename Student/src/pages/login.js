import { Link } from "react-router-dom";
import React,{Component,useState} from "react";
import swal from '@sweetalert/with-react';
 
import Axios from 'axios';


function Login(){
  const reg=()=>{
    window.location="/Registration";
  }
 
var typeid;
  const student=() =>{
    const student=document.getElementById('student').value;
    typeid=student;
  }
  const faculty=() =>{
    const faculty=document.getElementById('faculty').value;
    typeid=faculty;
  }
  
  const onpost=(e) =>{

    e.preventDefault();
    const email=document.getElementById('mailid').value;
    const password=document.getElementById('pwd').value;
     const type=typeid;
    Axios.post('http://localhost:1350/api/login',{a:email,b:password,c:type}).then((response)=>{
         
   
    if(response.data.message){

      swal("Sorry "+ response.data.message)
      .then(() => {
        window.location = "/" ;
      });
    }
    else{ 
     
      let obj={email:email,fname:response.data[0].fname,role:response.data[0].role,img:response.data[0].upload_file}; //result array has one output hence index [0]
    
			localStorage.setItem('student',JSON.stringify(obj)); //to store in string form

      swal("HELLO!", "Welcome " +  response.data[0].fname + "!")
      
      //swal("Hello "+ response.data[0].fname)
      .then(() => {
        window.location = "/" ;
      });

            
    }
    
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
                <img src="../../images/logo-dark.svg" alt="logo"/>
              </div>
              <h4>Come ON! let's get the project done...</h4>
              <h6 class="font-weight-light"></h6>
              <form class="pt-3">
                <div class="form-group">
                    <div class="form-check">
                      <label class="form-check-label" for="student">
                        <input type="radio" class="form-check-input" name="optionsRadios2" id="student" value="Student" onClick={student}/>
                        Student
                      </label>
                    </div>
                    <div class="form-check">
                        <label class="form-check-label" for="faculty">
                          <input type="radio" class="form-check-input" name="optionsRadios2" id="faculty" value="Faculty" onClick={faculty}/>
                          Faculty Member
                        </label>
                    </div>
                      </div>
                <div class="form-group">
                  <input type="text" class="form-control form-control-lg" id="mailid" placeholder="Mail-ID"/>
                </div>
                <div class="form-group">
                  <input type="password" class="form-control form-control-lg" id="pwd" placeholder="Password"/>
                </div>
                <div class="mt-3">
                  <a class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" href="#" onClick={onpost}>LOG IN</a>
                </div>
                <div class="mt-3">
                  <Link to="/Registration" class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn "> REGISTER</Link>
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