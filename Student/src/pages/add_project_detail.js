import { Link } from "react-router-dom";
import React, {Component,useState} from "react";
import Axios from 'axios';
import swal from '@sweetalert/with-react';

function Add(){
const onpost=() =>{

const s1_id=document.getElementById('s1_id').value;
const s1_name=document.getElementById('s1_name').value;
const s2_id=document.getElementById('s2_id').value;
const s2_name=document.getElementById('s2_name').value;
const s3_id=document.getElementById('s3_id').value;
const s3_name=document.getElementById('s3_name').value;
const protit=document.getElementById('protit').value;
const def=document.getElementById('def').value;
const des=document.getElementById('des').value;
const tech=document.getElementById('tech').value;
const endate=document.getElementById('endate').value;

Axios.post('http://localhost:1350/api/project_details1',{a:s1_id,b:s1_name,c:s2_id,d:s2_name,e:s3_id,f:s3_name,g:protit,h:def,i:des,j:tech,k:endate}).then((response)=>{

///Response
//alert(response.data.message);
if(response.data.message){

  swal({
    title: "Submitted Project Details!",
    //text: "Click ok to refresh the page.",
    type: "success"
  })
  .then(() => {
    window.location="/Add";
  });
  
}

});

}

    return(
        <>
       
        <div class="container-scroller">
    
        <div class="main-panel">
        <div class="content-wrapper">
                <div class="row">
                <div class="col-lg-12 grid-margin stretch-card">
                          <div class="card">
          <div class="card-body">
            
            <h4 class="card-title">PROJECT DETAILS</h4>
            <p class="card-description">
              Fill the Details :
            </p>
            <form class="forms-sample">
              <div class="form-group row">
                <label for="exampleInputEmail2" class="col-sm-3 col-form-label">STUDENT 1</label>
                <div class="col-sm-3">
                  <input type="text" class="form-control" id="s1_id" placeholder="ID 1"/>
                </div>
                <div class="col-sm-6">
                  <input type="text" class="form-control" id="s1_name" placeholder="Name 1"/>
                </div>
              </div>
              <div class="form-group row">
                <label for="exampleInputEmail2" class="col-sm-3 col-form-label">STUDENT 2</label>
                <div class="col-sm-3">
                  <input type="text" class="form-control" id="s2_id" placeholder="ID 2"/>
                </div>
                <div class="col-sm-6">
                  <input type="text" class="form-control" id="s2_name" placeholder="Name 2"/>
                </div>
              </div>
              <div class="form-group row">
                <label for="exampleInputEmail2" class="col-sm-3 col-form-label">STUDENT 3</label>
                <div class="col-sm-3">
                  <input type="text" class="form-control" id="s3_id" placeholder="ID 3"/>
                </div>
                <div class="col-sm-6">
                  <input type="text" class="form-control" id="s3_name" placeholder="Name 3"/>
                </div>
              </div>
              <div class="form-group row">
                <label for="exampleInputMobile" class="col-sm-3 col-form-label">PROJECT TITLE</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="protit" placeholder="Project Title"/>
                </div>
              </div>
              <div class="form-group row">
                <label for="exampleInputPassword2" class="col-sm-3 col-form-label">PROJECT DEFINITION</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" id="def" placeholder="Definition"/>
                </div>
              </div>
              <div class="form-group row">
                <label for="exampleInputConfirmPassword2" class="col-sm-3 col-form-label">PROJECT DESCRIPTION</label>
                <div class="col-sm-9">
                  <textarea class="form-control" id="des" rows="4" placeholder="Description"></textarea>
                </div>
              </div>
              <div class="form-group row">
                <label for="exampleInputConfirmPassword2" class="col-sm-3 col-form-label">TECHNOLOGY USED</label>
                <div class="col-sm-9">
                  <select class="form-control form-control-lg" id="tech" >
                    <option>Technology</option>
                    <option>MERN</option>
                    <option>PHP</option>
                  </select>
                </div>
              </div><div class="form-group row">
            <label for="exampleInputMobile" class="col-sm-3 col-form-label">ENTRY DATE</label>
            <div class="col-sm-9">
              <input type="date" class="form-control" id="endate" placeholder="EndDate"/>
            </div>
          </div>
              <div class="form-check form-check-flat form-check-primary">
              </div>
              <button type="submit" class="btn btn-primary mr-2" onClick={onpost}>Submit</button>
              <button class="btn btn-light">Cancel</button>
            </form>
            </div>
          </div>
        </div>
      </div>
      
               
       </div>
       </div> 
        
        
      </div> 
      
    
        </>
    );

}
export default Add;