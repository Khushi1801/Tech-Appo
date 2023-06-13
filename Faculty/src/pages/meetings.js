import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";
import Axios from 'axios';


function Meeting(){
  const closemodal=(e) =>{
     window.location="/Meeting"; 
     }

  const[list,setlist]=useState([]);
    useEffect(()=>{
        Axios.get('http://localhost:1350/api/get_request').then((response)=>{
        console.log(response.data);
        setlist(response.data);

        });
    
      
    },[]);


    
 
    const[rs,setlist1]=useState([]);
    const showDetail = (id) =>
      {
        
        //alert(id);
          Axios.post('http://localhost:1350/api/getdata_request',{id:id}).then((response)=>{
  
          //alert(response.data);
  
          setlist1(response.data);
       
  });
  }
    return(
        <>
            <div class="row">
            <div class="col-md-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <p class="card-title mb-0">Meetings Pending</p>
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
                          <th>Date of Request</th>
                          <th>Purpose</th>
                          <th>Meeting Date</th>
                          <th>Time</th>
                          <th>View</th>
                          <th>Status</th>
                        </tr>  
                      </thead>
                      <tbody>
                      {list.map((val)=>{
                        return(

                        <tr>
                            <td>{val.req_date}</td>
                            <td>{val.req}</td>
                            <td>21 Sep 2018</td>
                            <td>time</td>
                            
                            <td><button class="btn btn-primary" onClick={()=>showDetail(val._id)} data-toggle="modal" data-target="#myModal">Accept/Decline</button></td>
                             
                            <td class="font-weight-medium"><div class="badge badge-success">Completed</div></td>
                        </tr>
                             )})}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            
          </div>

          {/* model */}

 <div id="myModal" class="modal fade" role="dialog">
        <div class="modal-dialog">


          <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title"></h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              
            </div>
            <div class="modal-body"> 
            {rs.map((val1)=>{
                return(
                    <>
            


            <div class="card">
      <div class="card-body">
        
        <h4 class="card-title">ADD REQUEST</h4>
        <p class="card-description">
          Fill the Details :
        </p>
        <form class="forms-sample">
          <div class="form-group row">
          <input type="text" value={val1._id} id="id"  hidden/>
              
            <label for="exampleInputEmail2" class="col-sm-4 col-form-label">Date of Request</label>
            <div class="col-sm-8">
              <input type="text" defaultValue={val1.req_date} class="form-control" id="reqdate" placeholder="GID"/>
            </div>
          </div>
          <div class="form-group row">
            <label for="exampleInputEmail2" class="col-sm-4 col-form-label">Purpose</label>
            <div class="col-sm-8">
              <input type="text" defaultValue={val1.req} class="form-control" id="request" placeholder="PID"/>
            </div>
          </div>
          <div class="form-group row">
            <label for="exampleInputMobile" class="col-sm-4 col-form-label">Meeting Date</label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="" placeholder="Project Title"/>
            </div>
          </div>
          <div class="form-group row">
            <label for="exampleInputMobile" class="col-sm-4 col-form-label">Time</label>
            <div class="col-sm-8">
              <input type="date" class="form-control" id="" placeholder="StartDate"/>
            </div>
          </div>
         
          <div class="form-check form-check-flat form-check-primary">
          </div>
          </form>
          </div>
      </div>              
            </>
              )})} 
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal" onClick={closemodal}>Close</button>
              <button type="button" class="btn btn-default" >Submit</button>
            </div>
          </div>

        </div>
      </div>
        </>
    );
}

export default Meeting;