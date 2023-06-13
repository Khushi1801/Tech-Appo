import { Link } from "react-router-dom";
import React, {Component, useState,useEffect} from "react";
import Axios from 'axios';


function Reportfeedback(){
  const[list,setlist]=useState([]);
    useEffect(()=>{
        Axios.get('http://localhost:1350/api/get_feedback_report').then((response)=>{
        console.log(response.data);
        setlist(response.data);

        });
    
      
    },[]);
    return(
        <>
        <div class="container-scroller">
    
    
      
    <div class="main-panel">
      <div class="content-wrapper">
        <div class="row">
          <div class="col-lg-12 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">View Feedback</h4>
                <p class="card-description">
                  View Report <code>FEEDBACK</code>
                </p>
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>FACULTY NAME</th>
                        <th>START-DATE</th>
                        <th>END-DATE</th>
                        <th>FEEDBACK</th>
                      </tr>
                    </thead>
                    <tbody>
                      
                    {list.map((val)=>{
                        return(
                      <tr>
                        <td>{val.faculty_name}</td>
                        <td>s-date</td>
                        <td>e-date</td>
                        <td>Feedback</td>
                      </tr>
                      
                      )})}
                      
                    </tbody>
                  </table>
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

export default Reportfeedback;