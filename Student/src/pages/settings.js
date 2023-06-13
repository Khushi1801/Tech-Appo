import  Link  from 'react-router-dom';
import React, {Component, useState,useEffect} from "react";
import  Axios  from 'axios';



function Settings(){
  const closemodal=(e) =>{
    // window.location="/ViewProj";
     }
 
  const[list,setlist]=useState([]);
    useEffect(()=>{
        Axios.get('http://localhost:1350/api/get_image').then((response)=>{
        console.log(response.data);
        setlist(response.data);

        });
    
       
    },[]);

    const[rs,setlist1]=useState([]);
  const showDetail = (id) =>
    {
      
     // alert(id);
        Axios.post('http://localhost:1350/api/getdata_imagedata',{id:id}).then((response)=>{

        //alert(response.data);

        setlist1(response.data);
     
});
}

const[A_file,setfilename] = useState(""); 
    
      const onupdate=(e) =>{
    
        e.preventDefault();
        const id=document.getElementById('id').value;
        alert(id);
        const name=document.getElementById('name').value;
        const eid=document.getElementById('eid').value;
        const img=document.getElementById('img').value;



        var data = new FormData();
    data.append('rpimage',A_file);
    data.append('id',id);  
    data.append('name',name);
    data.append('eid',eid);
      


    var config = {
      headers: {
          'Content-Type': 'multipart/form-data'
      },
    };
        
Axios.post('http://localhost:1350/api/updated_image',data,config).then((response)=>{


      
        
         
        });
       //window.location="/Reportview";
        
        }
    return(

    
    <>
    <div class="col-12 grid-margin stretch-card">
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
                        <th>ID</th>
                        <th>User</th>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                    {list.map((val)=>{
                        return(
                      <tr>
                        <td>{val._id}</td>
                        <td class="py-1">
                            <img src={"http://localhost:1350/public/"+ val.upload_file} alt="No Preview" />
                          </td>
                        <td>{val.fname}</td>
                        <td>{val.email}</td>
                        {/* <td><a href={"http://localhost:1350/public/"+val.upload_ppt} target="_blank"  >Click</a></td> */}
                        
                            <td><button class="btn btn-primary" onClick={()=>showDetail(val._id)} data-toggle="modal" data-target="#myModal">Edit Details</button></td>
                      </tr>
                        )})}
                    </tbody>
                  </table>
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
        
        <h4 class="card-title">EXTERNAL REPORT</h4>
        <p class="card-description">
          Fill the Details :
        </p>
        <form class="forms-sample">
        <input type="text" value={val1._id} id="id" hidden />
          <div class="form-group row">
          
            <label for="exampleInputEmail2" class="col-sm-3 col-form-label">NAME</label>
            <div class="col-sm-9">
              <input type="text" value={val1.fname} class="form-control" id="name" placeholder="GID"/>
            </div>
          </div>

          
          <div class="form-group row">
            <label for="exampleInputEmail" class="col-sm-3 col-form-label">Email ID</label>
            <div class="col-sm-9">
              <input type="text" value={val1.email} class="form-control" id="eid" placeholder="PID"/>
            </div>
          </div>

          <div class="form-group row">
            <label for="exampleInputEmail" class="col-sm-3 col-form-label">UPLOAD</label>
            <div class="col-sm-9">
              <input type="file"  class="form-control" id="img" placeholder="PID" onChange={(e) => setfilename(e.target.files[0])}/>
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
              <button type="button" class="btn btn-default" onClick={onupdate} >Submit</button>
            </div>
          </div>

        </div>
      </div>
          
    
    </>
    );
}
export default Settings;