import { Link } from "react-router-dom";
import React,{Component,useState,useEffect} from "react";
import Axios from 'axios';
import swal from '@sweetalert/with-react';

function Allocation_view(){

  const onupdate=(e) =>{

    e.preventDefault();
    const g_id=document.getElementById('g_id').value;
    const s1id=document.getElementById('s1id').value;
    const s2id=document.getElementById('s2id').value;
    const s3id=document.getElementById('s3id').value;
    const f1id=document.getElementById('f1id').value;
    const f2id=document.getElementById('f2id').value;
    const id=document.getElementById('id').value;
    //alert(up_announce);
    //alert(s1id);
    Axios.post('http://localhost:1350/api/updated_allocation',{a:g_id,b:s1id,c:s2id,d:s3id,e:f1id,f:f2id,id:id}).then((response)=>{
    
    ///Response
    //alert(response.data.message);
    //window.location="/AnnounceView";
    if(response.data.message){

      swal({
        title: "Updated!",
        //text: "Click ok to refresh the page.",
        type: "success"
      })
      .then(() => {
        window.location="/Allocation_view";
      });
      
    }
    
     
    });
  }

  const[list,setlist]=useState([]);
    useEffect( ()=>{
        Axios.get('http://localhost:1350/api/get_allocate_view').then((response)=>{
        console.log(response.data);
        setlist(response.data);

        });
      },[]);
      
      const[rs,setlist1]=useState([]);
      const showDetail = (id) =>
        {
          
          //alert(id);
            Axios.post('http://localhost:1350/api/getdata_allocationdata',{id:id}).then((response)=>{

            //alert(response.data);

            setlist1(response.data);
         
    });
  }

  const ondelete=(id) =>{

    swal({
      title: "Are you sure?",
      text: "You want to delete the allocation",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((ondelete) => {
      if (ondelete) {
        Axios.post('http://localhost:1350/api/delete_allocation',{id:id}).then((response)=>{
          if(response.data.message){

            swal("Deleted!","success");
            
          }
          
    });

    window.location="/Allocation_view";
      } 
      else {
        window.location="/Allocation_view";
      }
    });
    //const id=document.getElementById('id').value;
    //alert(id);
    
    
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
    
                            <h4 class="card-title">ALLOCATION LIST</h4>
                            <p class="card-description">
                              View <code>Allocated List</code>
                            </p>
                            <div class="table-responsive">
                              <table class="table table-striped">
                                <thead>
                                  <tr>
                                    <th>GROUP ID</th>
                                    <th>
                                      STUDENT ID 
                                    </th>
                                    <th>
                                      STUDENT NAME 
                                    </th>
                                    <th>
                                      FACULTY 1 ID 
                                    </th>
                                    <th>
                                      FACULTY 1
                                    </th>
                                    <th>
                                      FACULTY 2 ID 
                                    </th>
                                    <th>
                                      FACULTY 2
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>

                                {list.map((val)=>{
                            return( 
    
                                  <tr>
                                    <td>{val.grp_id}</td>
                                    <td>
                                    <tr>{val.stu1_id}</tr>
                                    <tr>{val.stu2_id}</tr>
                                    <tr>{val.stu3_id}</tr>
                                    </td>
                                    <td></td>
                                    {/* <td>
                                    <tr>{val.stu1_name}</tr>
                                    <tr>{val.stu2_name}</tr>
                                    <tr>{val.stu3_name}</tr>
                                    </td> */}
                                    <td>
                                    {val.fac1_id}
                                    </td>
                                    <td></td>
                                    <td>
                                    {val.fac2_id}
                                    </td>
                                    <td></td>
                                    <td><button class="btn btn-primary" onClick={()=>showDetail(val._id)} data-toggle="modal" data-target="#myModal">Edit Allocation</button></td>
                              <td><button class="btn btn-danger"   onClick={()=>ondelete(val._id)} >Delete</button></td>
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
            
              {/* <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Announcements</h4>
                  <p class="card-description">
                    Announcements <code>from PROJECT CO-ORDINATOR</code>.
                  </p>
                  <form class="forms-sample">
              <div class="form-group row">
                <div class="col-sm-12">
                <input type="text" value={val1.grp_id} id="id" hidden />
                  <textarea class="form-control" id="announce" rows="4" placeholder="Announcement"  >{val1.announcement}</textarea>
                
                </div>
              </div>
              
              
            </form>
                  
                  </div>
                </div> */}

<div class="card">
      <div class="card-body">
        
        <h4 class="card-title">Edit Allocation</h4>
        <p class="card-description">
          Fill the Details :
        </p>
        <form class="forms-sample">
        <input type="text" value={val1._id} id="id" hidden />
        <div class="form-group row">
            <label for="exampleInputEmail2" class="col-sm-3 col-form-label">GROUP ID</label>
            <div class="col-sm-3">
              <input type="text"  defaultValue={val1.grp_id} class="form-control" id="g_id" placeholder="GID"></input>
            </div>
          </div>
          <div class="form-group row">
            <label for="exampleInputEmail2" class="col-sm-3 col-form-label">STUDENT 1</label>
            <div class="col-sm-3">
              <input type="text" defaultValue={val1.stu1_id} class="form-control" id="s1id" placeholder=" SID 1"/>
            </div>
          </div>
          <div class="form-group row">
            <label for="exampleInputEmail2" class="col-sm-3 col-form-label">STUDENT 2</label>
            <div class="col-sm-3">
              <input type="text" defaultValue={val1.stu2_id} class="form-control" id="s2id" placeholder="SID 2"/>
            </div>
          </div>
          <div class="form-group row">
            <label for="exampleInputEmail2" class="col-sm-3 col-form-label">STUDENT 3</label>
            <div class="col-sm-3">
              <input type="text" defaultValue={val1.stu3_id} class="form-control" id="s3id" placeholder="SID 3"/>
            </div>
          </div>
          <div class="form-group row">
            <label for="exampleInputEmail2" class="col-sm-3 col-form-label">FACULTY 1</label>
            <div class="col-sm-3">
              <input type="text" defaultValue={val1.fac1_id} class="form-control" id="f1id" placeholder="FID 1"/>
            </div>
          </div>
          <div class="form-group row">
            <label for="exampleInputEmail2" class="col-sm-3 col-form-label">FACULTY 2</label>
            <div class="col-sm-3">
              <input type="text" defaultValue={val1.fac2_id} class="form-control" id="f2id" placeholder="FID 1"/>
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
              <button type="button" class="btn btn-default" data-dismiss="modal" >Close</button>
              <button type="button" class="btn btn-default" data-dismiss="modal" onClick={onupdate}>Submit</button>
            </div>
          </div>

        </div>
      </div>
              
     
        </>
      );
}

export default Allocation_view;