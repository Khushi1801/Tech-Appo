import { Link } from "react-router-dom";
import React, {Component, useState, useEffect} from "react";
import Axios from 'axios';
import swal from '@sweetalert/with-react';

function Reportview(){

  const closemodal=(e) =>{
   // window.location="/ViewProj";

   
    
    }

    const[A_file,setfilename] = useState(""); 
    
      const onupdate=(e) =>{
    
        e.preventDefault();
        const id=document.getElementById('id').value;
        alert(id);
        const g_id=document.getElementById('g_id').value;
        const pro_id=document.getElementById('pro_id').value;
        const pro_tit=document.getElementById('pro_tit').value;
        const s_date=document.getElementById('s_date').value;
        const e_date=document.getElementById('e_date').value;
        //const u_file=document.getElementById('u_file').value;

        var data = new FormData();
    data.append('rpimage',A_file);
    data.append('id',id);  
    data.append('g_id',g_id);
    data.append('pro_id',pro_id);
    data.append('pro_tit',pro_tit);
    data.append('s_date',s_date);
    data.append('e_date',e_date);
      


    var config = {
      headers: {
          'Content-Type': 'multipart/form-data'
      },
    };
        
Axios.post('http://localhost:1350/api/updated_report',data,config).then((response)=>{


        //alert(up_announce);
       // Axios.post('http://localhost:1350/api/updated_project',{a:up_announce,id:id}).then((response)=>{
        
        ///Response
        //alert(response.data.message);
        
        if(response.data.message){

          swal({
            title: "Updated Report!",
            //text: "Click ok to refresh the page.",
            type: "success"
          })
          .then(() => {
            window.location="/Add";
          });
          
        }
        
         
        });
       //window.location="/Reportview";
        
        }


  const[rs,setlist1]=useState([]);
  const showDetail = (id) =>
    {
      
      //alert(id);
        Axios.post('http://localhost:1350/api/getdata_reportdata',{id:id}).then((response)=>{

        //alert(response.data);

        setlist1(response.data);
     
});
}
  const[list,setlist]=useState([]);
    useEffect(()=>{
        Axios.get('http://localhost:1350/api/get_report').then((response)=>{
        console.log(response.data);
        setlist(response.data);

        });
    
      
    },[]);



//     const showfile = (id) =>
//     {
//      var url= "http://localhost:1337/public/"+id;
//       alert(url);
//       window.open(url);
// }
  
    return(
        <>
        <div class="container-scroller">
    
    
      
    <div class="main-panel">
      <div class="content-wrapper">
        <div class="row">
          <div class="col-lg-12 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">View Reports</h4>
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
                        <th>START-DATE</th>
                        <th>END-DATE</th>
                        <th>FILE-NAME</th>
                        <th>D</th>
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
                        <td>{val.start_date}</td>
                        <td>{val.end_date}</td>
                        <td>{val.upload_file} </td>
                        <td><a href={"http://localhost:1350/public/"+val.upload_file} target="_blank"  >Click</a></td>
                        <td>
                            {val.status ==='1' ?  (
                                                                              
                            <label class="badge badge-success">Completed</label>
                      ):(

                        <label class="badge badge-danger">Pending</label>
                      )
                            
                      }
                            
                            </td>

                            <td><button class="btn btn-primary" onClick={()=>showDetail(val._id)} data-toggle="modal" data-target="#myModal">Edit Details</button></td>
                             
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
        
        <h4 class="card-title">ADD REPORT</h4>
        <p class="card-description">
          Fill the Details :
        </p>
        <form class="forms-sample">
          <div class="form-group row">
          <input type="text" value={val1._id} id="id"  hidden/>
              
            <label for="exampleInputEmail2" class="col-sm-3 col-form-label">GROUP ID</label>
            <div class="col-sm-9">
              <input type="text" defaultValue={val1.grp_id} class="form-control" id="g_id" placeholder="GID"/>
            </div>
          </div>
          <div class="form-group row">
            <label for="exampleInputEmail2" class="col-sm-3 col-form-label">PROJECT ID</label>
            <div class="col-sm-9">
              <input type="text" defaultValue={val1.proj_id} class="form-control" id="pro_id" placeholder="PID"/>
            </div>
          </div>
          <div class="form-group row">
            <label for="exampleInputMobile" class="col-sm-3 col-form-label">PROJECT TITLE</label>
            <div class="col-sm-9">
              <input type="text" defaultValue={val1.proj_title} class="form-control" id="pro_tit" placeholder="Project Title"/>
            </div>
          </div>
          <div class="form-group row">
            <label for="exampleInputMobile" class="col-sm-3 col-form-label">START DATE</label>
            <div class="col-sm-9">
              <input type="date" defaultValue={val1.start_date}class="form-control" id="s_date" placeholder="StartDate"/>
            </div>
          </div>
          <div class="form-group row">
            <label for="exampleInputMobile" class="col-sm-3 col-form-label">END DATE</label>
            <div class="col-sm-9">
              <input type="date" defaultValue={val1.end_date}class="form-control" id="e_date" placeholder="EndDate"/>
            </div>
          </div>
          <div class="form-group row">
            <label for="exampleInputMobile" class="col-sm-3 col-form-label"> UPLOAD FILE</label>
            <div class="col-sm-9">
            {/* <input type="text" defaultValue={val1.upload_file}  class="form-control"  placeholder="File"/><br/> */}
              <input type="file"  class="form-control" id="u_file" onChange={(e) => setfilename(e.target.files[0])} placeholder="File"/><br/>
            </div>
          </div>
          <div class="form-check form-check-flat form-check-primary">
          </div>
          </form></div>
      </div>              
            </>
              )})} 
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal" onClick={closemodal}>Close</button>
              <button type="button" class="btn btn-default"  onClick={onupdate}>Submit</button>
            </div>
          </div>

        </div>
      </div>
        </>
    );
}

export default Reportview;