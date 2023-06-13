import { Link } from "react-router-dom";
import React,{Component,useState,useEffect} from "react";
import Axios from 'axios';
import swal from '@sweetalert/with-react';

function Req_fromstu(){

  

  function reply(e,name){

    e.preventDefault();
    var status;
    var a=name;
    if(name==="1")
    {
status=1;
//alert(status);
    }
    else{

      status=0;
      //alert(status);
    }
    const reply=document.getElementById('reply').value;
    const id=document.getElementById('id').value;
    Axios.post('http://localhost:1350/api/reply_to_stu',{a:reply,id:id,status}).then((response)=>{
    
    ///Response
    //alert(response.data.message);
    if(response.data.message){

      swal({
        title: "Replied!",
        //text: "Click ok to refresh the page.",
        type: "success"
      })
      .then(() => {
        window.location="/Req_fromstu";
      });
      
    }
    
     
    });
  }


  const[list,setlist]=useState([]);
    useEffect( ()=>{
        Axios.get('http://localhost:1350/api/get_req_fromstu').then((response)=>{
        //console.log(response.data);
        setlist(response.data);

        });
      },[]);

      const[rs,setlist1]=useState([]);
      const showDetail = (id) =>
        {
          
          //alert(id);
            Axios.post('http://localhost:1350/api/getdata_req_fromstu_data',{id:id}).then((response)=>{

            //alert(response.data);

            setlist1(response.data);
            
         
    });
  }


    return(
        <>
              <div class="container-scroller">
        
        <div class="main-panel">
        <div class="content-wrapper">
                <div class="row">
                <div class="col-lg-12 grid-margin stretch-card">
                          <div class="card">
          <div class="card-body">
    
                            <h4 class="card-title">REQUEST LIST</h4>
                            <p class="card-description">
                              View <code>Request List</code>
                            </p>
                            <div class="table-responsive">
                              <table class="table table-striped">
                                <thead>
                                  <tr>
                                    <th>
                                      STUDENT ID 
                                    </th>
                                    <th>
                                      GROUP ID
                                    </th>
                                    <th>
                                      PROJECT ID
                                    </th>
                                    <th>
                                      REQUEST
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
    
                                {list.map((val)=>{
                            return( 
    
                                  <tr>
                                    <td>{val.stu_id}</td>
                                    <td>{val.grp_id}</td>
                                    <td>{val.proj_id}</td>
                                    <td>{val.request}</td>
                                    <td><button class="btn btn-primary" onClick={()=>showDetail(val._id)} data-toggle="modal" data-target="#myModal">Accept / Decline</button></td>
                                    {/* <td><button class="btn btn-danger"  data-toggle="modal" data-target="#myModal">Decline</button></td> */}
                                    
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
                  <h4 class="card-title"> Appeals </h4>
                  <p class="card-description">
                    Appeals from <code>STUDENTS</code>.
                  </p>
                  <p>GROUP ID : {val1.grp_id}</p>
            <p>Request : {val1.request}</p>
                  <form class="forms-sample">
              <div class="form-group row">
                <div class="col-sm-12">
                <input type="text" value={val1._id} id="id" hidden/>
                <textarea class="form-control" id="reply" rows="4" placeholder="Announcement">{val1.request}</textarea>
                  {/* <textarea class="form-control" id="reply" rows="4" placeholder="Reply">{val1.request}</textarea> */}
                </div>
              </div>
              
              
            </form>
                  
                  </div>
                </div>
              
            {/* <div class="form-group row">
                      <div class="col-sm-12">
                        <input type="text" value={val1._id} id="id" hidden/>
                        <textarea class="form-control" id="updated_announce" rows="4" placeholder="Announcement">{val1.announcement}</textarea>
                      </div>
                    </div>  */}
            </>
              )})} 
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal" onClick={(e)=>reply(e,"0")}>Close</button>
              <button type="button" class="btn btn-default" data-dismiss="modal"  onClick={(e)=>reply(e,"1")}>Submit</button>
            </div>
          </div>

        </div>
      </div>
     
        </>
      );
}

export default Req_fromstu;