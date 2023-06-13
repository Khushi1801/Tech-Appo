 import { Link } from "react-router-dom";
import React, {Component, useState} from "react";
import Axios from 'axios';
import swal from '@sweetalert/with-react';

function Reportadd(){

  const[A_file,setfilename] = useState(""); 
 
  const onpost=() =>{

    
    const gid=document.getElementById('gid').value;
    const proid=document.getElementById('proid').value;
    const protit=document.getElementById('protit').value;
    const sdate=document.getElementById('sdate').value;
    const edate=document.getElementById('edate').value;
    //const ufile=document.getElementById('ufile').value;
    
    var data = new FormData();
    data.append('rpimage',A_file);
    data.append('gid',gid);
    data.append('proid',proid);
    data.append('protit',protit);
    data.append('sdate',sdate);
    data.append('edate',edate);
      


    var config = {
      headers: {
          'Content-Type': 'multipart/form-data'
      },
    };
    


    //const date=document.getElementById('{date}').value;
    Axios.post('http://localhost:1350/api/report',data,config).then((response)=>{
    
    ///Response
    //alert(response.data.message);
    if(response.data.message){

      swal({
        title: "Submitted Reported!",
        //text: "Click ok to refresh the page.",
        type: "success"
      })
      .then(() => {
        window.location="/Reportadd";
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
        
        <h4 class="card-title">ADD REPORT</h4>
        <p class="card-description">
          Fill the Details :
        </p>
        <form class="forms-sample">
          <div class="form-group row">
            <label for="exampleInputEmail2" class="col-sm-3 col-form-label">GROUP ID</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="gid" placeholder="GID"/>
            </div>
          </div>
          <div class="form-group row">
            <label for="exampleInputEmail2" class="col-sm-3 col-form-label">PROJECT ID</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="proid" placeholder="PID"/>
            </div>
          </div>
          <div class="form-group row">
            <label for="exampleInputMobile" class="col-sm-3 col-form-label">PROJECT TITLE</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="protit" placeholder="Project Title"/>
            </div>
          </div>
          <div class="form-group row">
            <label for="exampleInputMobile" class="col-sm-3 col-form-label">START DATE</label>
            <div class="col-sm-9">
              <input type="date" class="form-control" id="sdate" placeholder="StartDate"/>
            </div>
          </div>
          <div class="form-group row">
            <label for="exampleInputMobile" class="col-sm-3 col-form-label">END DATE</label>
            <div class="col-sm-9">
              <input type="date" class="form-control" id="edate" placeholder="EndDate"/>
            </div>
          </div>
          <div class="form-group row">
            <label for="exampleInputMobile" class="col-sm-3 col-form-label"> UPLOAD FILE</label>
            <div class="col-sm-9">
              <input type="file" class="form-control" id="ufile" onChange={(e) => setfilename(e.target.files[0])} placeholder="File"/><br/>
            </div>
          </div>
          <div class="form-check form-check-flat form-check-primary">
          </div>
          <button type="submit" class="btn btn-primary mr-2" onClick={onpost}>Submit</button>
          <button class="btn btn-danger">Cancel</button>
        </form></div>
      </div>
    </div>
  </div>
  
           
   </div></div> 
    
    
  </div> 
        </>
    );
}

export default Reportadd;