import { Link } from "react-router-dom";
import React, {Component, useState, useEffect} from "react";
import Axios from 'axios';

function ViewReq(){
  const current = new Date();
  const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
  
  const[list,setlist]=useState([]);
    useEffect(()=>{
        Axios.get('http://localhost:1350/api/get_request').then((response)=>{
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
                  <h4 class="card-title">View Request</h4>
                  <p class="card-description">
                    View Request <code>RECORDS</code>
                  </p>
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>GROUP ID</th>
                          <th>PROJECT ID</th>
                          <th>PROJECT TITLE</th>
                          <th>DATE</th>
                          <th>REQUEST</th>
                          <th>REPLY</th>
                          <th>REPLY DATE</th>
                          <th>STATUS</th>
                        </tr>
                      </thead>
                      <tbody>
                      {list.map((val)=>{
                        return(

                        <tr>
                          <td>{val.grp_id}</td>
                          <td>{val.proj_id}</td>
                          <td>{val.proj_title}</td>
                          <td>{val.req_date}</td>
                          <td>{val.req}</td>
                          <td>{val.reply}</td> 
                          <td>{val.req_status}</td>                      
                          <td>
                            {val.req_status ===1 ?  (
                                                                              
                            <label class="badge badge-success">Completed</label>
                      ):(

                        <label class="badge badge-danger">Pending</label>
                      )
                            
                      }
                            
                            </td>
                        </tr>
                        
                        )})}
                        {/* <tr>
                          <td>Messsy</td>
                          <td>53275532</td>
                          <td>15 May 2017</td>
                          <td></td>
                          <td></td>
                          <td><label class="badge badge-warning">In progress</label></td>
                        </tr>
                        <tr>
                          <td>John</td>
                          <td>53275533</td>
                          <td>14 May 2017</td>
                          <td></td>
                          <td></td>
                          <td><label class="badge badge-info">Fixed</label></td>
                        </tr>
                        <tr>
                          <td>Peter</td>
                          <td>53275534</td>
                          <td>16 May 2017</td>
                          <td></td>
                          <td></td>
                          <td><label class="badge badge-success">Completed</label></td>
                        </tr>
                        <tr>
                          <td>Dave</td>
                          <td>53275535</td>
                          <td>20 May 2017</td>
                          <td></td>
                          <td></td>
                          <td><label class="badge badge-warning">In progress</label></td>
                        </tr> */}
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

export default ViewReq;