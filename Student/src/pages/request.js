import { Link } from "react-router-dom";
import React, {Component, useState} from "react";
import Axios from 'axios';
import swal from '@sweetalert/with-react';

function Request(){
  const onpost=() =>{

    
    const gid=document.getElementById('gid').value;
    const proid=document.getElementById('proid').value;
    const req=document.getElementById('req').value;
    //const date=document.getElementById('{date}').value;
    Axios.post('http://localhost:1350/api/request',{a:gid,b:proid,c:req}).then((response)=>{
    
    ///Response
    //alert(response.data.message);
    if(response.data.message){

      swal({
        title: "Requested to Guide!",
        //text: "Click ok to refresh the page.",
        type: "success"
      })
      .then(() => {
        window.location="/Request";
      });
      
    }
     
    });
    
    }
    return(
<>
        <div class="container-scroller">
    
    
    
    <div class="container-fluid page-body-wrapper">
      
      
      
      
      <div class="main-panel">        
        <div class="content-wrapper">
          <div class="row">
            
          
            <div class="col-lg-12 grid-margin stretch-card-request">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Request Form</h4>
                  <p class="card-description">
                    Request <code>to GUIDES</code> for scheduling their timings.
                  </p>
                  <form class="form-inline">
                    <label class="sr-only" for="inlineFormInputName2">GROUP ID</label>
                    <input type="text" class="form-control mb-2 mr-sm-2" id="gid" placeholder="group ID"/>

                    <label class="sr-only" for="inlineFormInputName2">PROJECT ID</label>
                    <input type="text" class="form-control mb-2 mr-sm-2" id="proid" placeholder="project ID"/>

                    <label class="sr-only" for="inlineFormInputName2">REQUEST</label>
                    <input type="text" class="form-control mb-2 mr-sm-2" id="req" placeholder="request"/>
                  
                    
                    <button type="submit" class="btn btn-primary mb-2" onClick={onpost}>SEND REQUEST</button>
                  </form></div>
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

export default Request;