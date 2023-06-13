import { Link } from "react-router-dom";
import React,{Component,useState,useEffect} from "react";
import Axios from 'axios';
import swal from '@sweetalert/with-react';

function Allocation_add(){
  const onpost=(e) =>{

    e.preventDefault();
    const gid=document.getElementById('gid').value;
    const s1_id=document.getElementById('s1_id').value;
    const s2_id=document.getElementById('s2_id').value;
    const s3_id=document.getElementById('s3_id').value;
    const f1_id=document.getElementById('f1_id').value;
    const f2_id=document.getElementById('f2_id').value;
    
    Axios.post('http://localhost:1350/api/allocate_add',{a: gid, b:s1_id, c:s2_id, d:s3_id, e:f1_id, f:f2_id}).then((response)=>{
    
    ///Response
    //alert(response.data.message);
    if(response.data.message){

      swal({
        title: "Allocation Done!",
        //text: "Click ok to refresh the page.",
        type: "success"
      })
      .then(() => {
        window.location="/Allocation_Add";
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
        
        <h4 class="card-title">Add Allocation</h4>
        <p class="card-description">
          Fill the Details :
        </p>
        <form class="forms-sample">
        <div class="form-group row">
            <label for="exampleInputEmail2" class="col-sm-3 col-form-label">GROUP ID</label>
            <div class="col-sm-3">
              <input type="text" class="form-control" id="gid" placeholder="GID"/>
            </div>
          </div>
          <div class="form-group row">
            <label for="exampleInputEmail2" class="col-sm-3 col-form-label">STUDENT 1</label>
            <div class="col-sm-3">
              <input type="text" class="form-control" id="s1_id" placeholder=" SID 1"/>
            </div>
          </div>
          <div class="form-group row">
            <label for="exampleInputEmail2" class="col-sm-3 col-form-label">STUDENT 2</label>
            <div class="col-sm-3">
              <input type="text" class="form-control" id="s2_id" placeholder="SID 2"/>
            </div>
          </div>
          <div class="form-group row">
            <label for="exampleInputEmail2" class="col-sm-3 col-form-label">STUDENT 3</label>
            <div class="col-sm-3">
              <input type="text" class="form-control" id="s3_id" placeholder="SID 3"/>
            </div>
          </div>
          <div class="form-group row">
            <label for="exampleInputEmail2" class="col-sm-3 col-form-label">FACULTY 1</label>
            <div class="col-sm-3">
              <input type="text" class="form-control" id="f1_id" placeholder="FID 1"/>
            </div>
          </div>
          <div class="form-group row">
            <label for="exampleInputEmail2" class="col-sm-3 col-form-label">FACULTY 2</label>
            <div class="col-sm-3">
              <input type="text" class="form-control" id="f2_id" placeholder="FID 1"/>
            </div>
          </div>
          <div class="form-check form-check-flat form-check-primary">
          </div>
          <button type="submit" class="btn btn-primary mr-2" onClick={onpost} >Submit</button>
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

export default Allocation_add;