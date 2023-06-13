import React from "react";
import { Link } from "react-router-dom";
import {useState,useEffect} from "react";
import Axios from 'axios';

function Definitions(){
  const[list,setlist]=useState([]);
  useEffect(()=>{
      Axios.get('http://localhost:1350/api/get_project_details').then((response)=>{
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
                  <p class="card-title mb-0">Definitions</p>
                  <div class="table-responsive">
                    <table class="table table-striped table-borderless">
                      <thead>
                      {list.map((val)=>{
                        return(
                        <tr>
                          <th>id : </th>
                          <td>
                                <tr>{val.stu1_id}</tr>
                                <tr>{val.stu2_id}</tr>
                                <tr>{val.stu3_id}</tr>
                                </td>

                          <th>name : </th>
                          <td>
                                <tr>{val.stu1_name}</tr>
                                <tr>{val.stu2_name}</tr>
                                <tr>{val.stu3_name}</tr>
                                </td>
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
                          <th>Title</th>
                          <th>Definition</th>
                          <th>Description</th>
                          <th>Technology</th>
                          <th>Entry Date</th>
                        </tr>  
                      </thead>
                      <tbody>
                      {list.map((val)=>{
                        return(
                        <tr>
                            <td>{val.proj_title}</td>
                            <td>{val.proj_def}</td>
                            <td>{val.proj_des}</td>
                            <td>{val.tech_used}</td>
                            <td>{val.entry_date}</td>
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

export default Definitions;