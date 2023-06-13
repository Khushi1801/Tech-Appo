import { Link } from "react-router-dom";
import React, {Component, useState} from "react";
import Axios from 'axios'; 
import swal from '@sweetalert/with-react';

function AnnounceAdd(){
  const onpost=(e) =>{

    e.preventDefault();
    const announce=document.getElementById('announce').value;
    Axios.post('http://localhost:1350/api/announce',{a:announce}).then((response)=>{
    
    ///Response
    //alert(response.data.message);
    if(response.data.message){

      swal({
        title: "Announced!",
        //text: "Click ok to refresh the page.",
        type: "success"
      })
      .then(() => {
        window.location="/AnnounceAdd";
      });
      
    }
    //window.location="/AnnounceAdd";
     
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
                  <h4 class="card-title">Announcements</h4>
                  <p class="card-description">
                    Announcements <code>from PROJECT CO-ORDINATOR</code>.
                  </p>
                  <form class="forms-sample">
              <div class="form-group row">
                <div class="col-sm-12">
                  <textarea class="form-control" id="announce" rows="4" placeholder="Announcement"></textarea>
                </div>
              </div>
              
              <button type="submit" class="btn btn-primary mr-2" onClick={onpost}>Send</button>
            </form>
                  
                  </div>
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
export default AnnounceAdd;