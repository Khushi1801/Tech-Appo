import { Link } from "react-router-dom";
import React, {Component,useState} from "react";
import Axios from 'axios';
import swal from '@sweetalert/with-react';

function Addext(){

  const[A_file,setfilename] = useState(""); 
  const[A_file1,setfilename1] = useState(""); 

  const onpost=() =>{

    
    const gid=document.getElementById('gid').value;
    const proid=document.getElementById('proid').value;
    const protit=document.getElementById('protit').value;
    //const uppt=document.getElementById('uppt').value;
    //const ureport=document.getElementById('ureport').value;
    //const date=document.getElementById('{date}').value;


    var data = new FormData();
    data.append('rpimage',A_file);
    data.append('gid',gid);
    data.append('proid',proid);
    data.append('protit',protit);
    //data.append('uppt',uppt);
    data.append('ureport',A_file1);
      




    
    var config = {
      headers: {
          'Content-Type': 'multipart/form-data'
      },
    };

    Axios.post('http://localhost:1350/api/add_ext_present',data,config).then((response)=>{
    
    ///Response
    //alert(response.data.message);
    if(response.data.message){

      swal({
        title: "Submitted External Exam Details!",
        //text: "Click ok to refresh the page.",
        type: "success"
      })
      .then(() => {
        window.location="/Addext";
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
        
        <h4 class="card-title">EXTERNAL REPORT</h4>
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
            <label for="exampleInputMobile" class="col-sm-3 col-form-label"> UPLOAD PPT</label>
            <div class="col-sm-9">
              <input type="file" class="form-control" id="uppt" placeholder="File" onChange={(e) => setfilename(e.target.files[0])}/><br/>
            </div>
          </div>
          <div class="form-group row">
            <label for="exampleInputMobile" class="col-sm-3 col-form-label"> UPLOAD REPORT</label>
            <div class="col-sm-9">
              <input type="file" class="form-control" id="ureport" placeholder="File" onChange={(e) => setfilename1(e.target.files[0])}/><br/>
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

export default Addext;