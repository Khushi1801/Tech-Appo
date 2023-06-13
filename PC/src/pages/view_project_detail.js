import { Link } from "react-router-dom";
import React,{Component,useState,useEffect} from "react";
import Axios from 'axios';

function ViewProj(){
  const[list,setlist]=useState([]);
    useEffect(()=>{
        Axios.get('http://localhost:1350/api/get_project_details').then((response)=>{
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

                        <h4 class="card-title">PROJECT DETAILS</h4>
                        <p class="card-description">
                          View <code>Project Details</code>
                        </p>
                        <div class="table-responsive">
                          <table class="table table-striped">
                            <thead>
                              <tr>
                                <th>
                                  ID 
                                </th>
                                <th>
                                  NAME 
                                </th>
                                <th>
                                  TITLE
                                </th>
                                <th>
                                  DEFINITION
                                </th>
                                <th>
                                  DESCRIPTION
                                </th>
                                <th>
                                  TECHNOLOGY
                                </th>
                                <th>
                                  ENTRY DATE
                                </th>
                              </tr>
                            </thead>
                            <tbody>

                            {list.map((val)=>{
                        return(

                              <tr>
                                <td>
                                <tr>{val.stu1_id}</tr>
                                <tr>{val.stu2_id}</tr>
                                <tr>{val.stu3_id}</tr>
                                </td>
                                <td>
                                <tr>{val.stu1_name}</tr>
                                <tr>{val.stu2_name}</tr>
                                <tr>{val.stu3_name}</tr>
                                </td>
                                <td>
                                {val.proj_title}
                                </td>
                                <td>
                                {val.proj_def}
                                </td>
                                <td>
                                {val.proj_des}
                                </td>
                                <td>
                                {val.tech_used}
                                </td>
                                <td>
                                {val.entry_date}
                                </td>
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

export default ViewProj;
