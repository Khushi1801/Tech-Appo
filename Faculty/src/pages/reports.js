import React from "react";
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import Axios from 'axios';

function Report(){
  const[list,setlist]=useState([]);
  useEffect(()=>{
      Axios.get('http://localhost:1350/api/get_report').then((response)=>{
      console.log(response.data);
      setlist(response.data);

      });
  
    
  },[]);
    return(
        <>
            <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <p class="card-title mb-0">Reports Record</p>
                  <div class="table-responsive">
                    <table class="table table-striped table-borderless">
                      <thead>
                      {list.map((val)=>{
                        return(
                        <tr>
                          <th>Group id : {val.grp_id}</th>
                          <th>Project id : {val.proj_id}</th>
                          <th>Project title : {val.proj_title}</th>
                        </tr>  
                         )})}
                      </thead>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <p class="card-title mb-0"></p>
                  <div class="table-responsive">
                    <table class="table table-striped table-borderless">
                      <thead>
                     
                        <tr>
                          <th>Start date</th>
                          <th>end date</th>
                          <th>file name</th>
                          <th>view</th>
                        </tr> 

                      </thead>
                      <tbody>
                      {list.map((val)=>{
                        return(
                        <tr>
                            <td>{val.start_date}</td>
                            <td>{val.end_date}</td>
                            <td>{val.upload_file}</td> 
                            <td><button class="btn btn-primary" data-toggle="modal" data-target="#myModal">Edit Details</button></td>
                             
                        </tr>
                        )})}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </>
    );
}

export default Report;