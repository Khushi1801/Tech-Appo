import Link  from "react-router-dom";
import React, {Component, useState, useEffect} from "react";
import Axios from 'axios';
import swal from '@sweetalert/with-react';

function AnnounceView(){

  //e.preventDefault(); 
//let hname=React.createRef();
const closemodal=(e) =>{
window.location="/AnnounceView";

}
  const onupdate=(e) =>{

    e.preventDefault();
    const up_announce=document.getElementById('announce').value;
    const id=document.getElementById('id').value;
    //alert(up_announce);
    Axios.post('http://localhost:1350/api/updated_announce',{a:up_announce,id:id}).then((response)=>{
    
    ///Response
    //alert(response.data.message);
    
    if(response.data.message){

      swal({
        title: "Updated!",
        //text: "Click ok to refresh the page.",
        type: "success"
      })
      .then(() => {
        window.location="/AnnounceView";
      });
      
    }
    
     
    });
   // window.location="/AnnounceView";
    
    }

    const ondelete=(id) =>{

      swal({
        title: "Are you sure?",
        text: "You want to delete the announcement",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((ondelete) => {
        if (ondelete) {
          Axios.post('http://localhost:1350/api/delete_announce',{id:id}).then((response)=>{
            if(response.data.message){

              swal("Deleted!","success");
              
            }
            
      });

      window.location="/AnnounceView";
        } 
        else {
          window.location="/AnnounceView";
        }
      });
      //const id=document.getElementById('id').value;
      //alert(id);
      }

      const[list,setlist]=useState([]);
      useEffect( ()=>{
          Axios.get('http://localhost:1350/api/get_announce_view').then((response)=>{
          console.log(response.data);
          setlist(response.data);

          });
        },[]);



      const[rs,setlist1]=useState([]);
      const showDetail = (id) =>
        {
          
          //alert(id);
            Axios.post('http://localhost:1350/api/getdata_announcedata',{id:id}).then((response)=>{

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
                      <h4 class="card-title">View Announcements</h4>
                      <p class="card-description">
                        View Announcements <code>RECORDS</code>
                      </p>
                      <div class="table-responsive">
                        <table class="table">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>DATE</th>
                              <th>ANNOUNCEMENT</th>
                            </tr>
                          </thead>
                          <tbody>
                          {list.map((val)=>{
                            return(

                            <tr>
                              <td>{val._id}</td>
                              <td>{val.ann_date}</td>
                              <td>{val.announcement}</td>
                              <td><button class="btn btn-primary" onClick={()=>showDetail(val._id)} data-toggle="modal" data-target="#myModal">Edit Details</button></td>
                              <td><button class="btn btn-danger"  onClick={()=>ondelete(val._id)} >Delete</button></td>
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
                  <h4 class="card-title">Announcements</h4>
                  <p class="card-description">
                    Announcements <code>from PROJECT CO-ORDINATOR</code>.
                  </p>
                  <form class="forms-sample">
              <div class="form-group row">
                <div class="col-sm-12">
                <input type="text" value={val1._id} id="id" hidden />
                  <textarea class="form-control" id="announce" rows="4" placeholder="Announcement"  >{val1.announcement}</textarea>
                
                </div>
              </div>
              
              
            </form>
                  
                  </div>
                </div>
              
            </>
              )})} 
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal" onClick={closemodal}>Close</button>
              <button type="button" class="btn btn-default" data-dismiss="modal" onClick={onupdate}>Submit</button>
            </div>
          </div>

        </div>
      </div>



              </>
          );
}


export default AnnounceView ;