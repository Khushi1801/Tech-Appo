import { Link } from "react-router-dom";
import React, {Component,useState,useEffect} from "react";
import Axios from 'axios';

function Viewext(){
  const[list,setlist]=useState([]);
    useEffect(()=>{
        Axios.get('http://localhost:1350/api/get_ext_present').then((response)=>{
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
                <h4 class="card-title">View External Exam Reports</h4>
                <p class="card-description">
                  View Report <code>RECORDS</code>
                </p>
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>GROUP ID</th>
                        <th>PROJECT ID</th>
                        <th>TITLE</th>
                        <th>PPT-NAME</th>
                        <th></th>
                        <th>FILE-NAME</th>
                        <th></th>
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
                        <td>{val.upload_ppt}</td>
                        <td><a href={"http://localhost:1350/public/"+val.upload_ppt} target="_blank"  >Click</a></td>
                        <td>{val.upload_file}</td>
                        <td><a href={"http://localhost:1350/public/"+val.upload_ppt} target="_blank"  >Click</a></td>
                        <td>
                            {val.status ==='1' ?  (
                                                                              
                            <label class="badge badge-success">Completed</label>
                      ):(

                        <label class="badge badge-danger">Pending</label>
                      )
                            
                      }
                            
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

export default Viewext;