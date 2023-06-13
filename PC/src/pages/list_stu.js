import { Link } from "react-router-dom";
import React,{Component, useState, useEffect} from "react";
import Axios from 'axios';

function Stu_list(){
    return(
        <>
        <div class="container-scroller">
        
        <div class="main-panel">
        <div class="content-wrapper">
                <div class="row">
                <div class="col-lg-12 grid-margin stretch-card">
                          <div class="card">
          <div class="card-body">
    
                            <h4 class="card-title">STUDENT LIST</h4>
                            <p class="card-description">
                              View <code>STUDENT</code>List
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
                                      EMAIL
                                    </th>
                                    <th>
                                      MOBILE NO
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
{/*     
                                {list.map((val)=>{
                            return( */}
    
                                  <tr>
                                    {/* <td>
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
                                    </td> */}
                                  </tr>
    
                                {/* )})} */}
                                  
                                 
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

export default Stu_list;