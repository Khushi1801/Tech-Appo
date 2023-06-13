import { Link } from "react-router-dom";
import React,{Component,useState,useEffect} from "react";
import Axios from 'axios';
import swal from '@sweetalert/with-react';

function ViewProj(){

  const closemodal=(e) =>{
    window.location="/ViewProj";
    
    }
      const onupdate=(e) =>{
    
        e.preventDefault();
        const id=document.getElementById('id').value;
        const s1id=document.getElementById('s1id').value;
        const s1name=document.getElementById('s1name').value;
        const s2id=document.getElementById('s2id').value;
        const s2name=document.getElementById('s2name').value;
        const s3id=document.getElementById('s3id').value;
        const s3name=document.getElementById('s3name').value;
        const pro_tit=document.getElementById('pro_tit').value;
        const pro_def=document.getElementById('pro_def').value;
        const pro_des=document.getElementById('pro_des').value;
        const tech_used=document.getElementById('tech_used').value;

Axios.post('http://localhost:1350/api/updated_project',{a:s1id,b:s1name,c:s2id,d:s2name,e:s3id,f:s3name,g:pro_tit,h:pro_def,i:pro_des,j:tech_used,id:id}).then((response)=>{


        
        if(response.data.message){

          swal({
            title: "Updated Project Details!",
            //text: "Click ok to refresh the page.",
            type: "success"
          })
          .then(() => {
            window.location="/ViewProj";
          });
          
        }
        
         
        });
        //window.location="/ViewProj";
        
        }

        const[rs,setlist1]=useState([]);
      const showDetail = (id) =>
        {
          
          //alert(id);
            Axios.post('http://localhost:1350/api/getdata_projectdata',{id:id}).then((response)=>{

            //alert(response.data);

            setlist1(response.data);
         
    });
  }

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
                                
                              <td><button class="btn btn-primary" onClick={()=>showDetail(val._id)} data-toggle="modal" data-target="#myModal">Edit Details</button></td>
                              {/* <td><button class="btn btn-danger"   >Delete</button></td> */}
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
            
            <h4 class="card-title">PROJECT DETAILS</h4>
            <p class="card-description">
              Fill the Details :
            </p>
            <form class="forms-sample">
              <div class="form-group row">
              <input type="text" value={val1._id} id="id" hidden />
                <label for="exampleInputEmail2" class="col-sm-3 col-form-label">STUDENT 1</label>
                <div class="col-sm-3">
                  <input type="text" defaultValue={val1.stu1_id} class="form-control" id="s1id" placeholder="ID 1"/>
                </div>
                <div class="col-sm-6">
                  <input type="text" defaultValue={val1.stu1_name} class="form-control" id="s1name" placeholder="Name 1"/>
                </div>
              </div>
              <div class="form-group row">
                <label for="exampleInputEmail2" class="col-sm-3 col-form-label">STUDENT 2</label>
                <div class="col-sm-3">
                  <input type="text" defaultValue={val1.stu2_id}class="form-control" id="s2id" placeholder="ID 2"/>
                </div>
                <div class="col-sm-6">
                  <input type="text" defaultValue={val1.stu2_name} class="form-control" id="s2name" placeholder="Name 2"/>
                </div>
              </div>
              <div class="form-group row">
                <label for="exampleInputEmail2" class="col-sm-3 col-form-label">STUDENT 3</label>
                <div class="col-sm-3">
                  <input type="text" defaultValue={val1.stu3_id} class="form-control" id="s3id" placeholder="ID 3"/>
                </div>
                <div class="col-sm-6">
                  <input type="text" defaultValue={val1.stu3_name} class="form-control" id="s3name" placeholder="Name 3"/>
                </div>
              </div>
              <div class="form-group row">
                <label for="exampleInputMobile" class="col-sm-3 col-form-label">PROJECT TITLE</label>
                <div class="col-sm-9">
                  <input type="text" defaultValue={val1.proj_title} class="form-control" id="pro_tit" placeholder="Project Title"/>
                </div>
              </div>
              <div class="form-group row">
                <label for="exampleInputPassword2" class="col-sm-3 col-form-label">PROJECT DEFINITION</label>
                <div class="col-sm-9">
                  <input type="text" defaultValue={val1.proj_def} class="form-control" id="pro_def" placeholder="Definition"/>
                </div>
              </div>
              <div class="form-group row">
                <label for="exampleInputConfirmPassword2" class="col-sm-3 col-form-label">PROJECT DESCRIPTION</label>
                <div class="col-sm-9">
                  <textarea class="form-control" defaultValue={val1.proj_des} id="pro_des" rows="4" placeholder="Description"></textarea>
                </div>
              </div>
              <div class="form-group row">
                <label for="exampleInputConfirmPassword2" class="col-sm-3 col-form-label">TECHNOLOGY USED</label>
                <div class="col-sm-9">
                  <select class="form-control form-control-lg" defaultValue={val1.tech_used} id="tech_used" >
                    <option>Technology</option>
                    <option>MERN</option>
                    <option>PHP</option>
                  </select>
                </div>
              </div>
              {/* <div class="form-group row">
            <label for="exampleInputMobile" class="col-sm-3 col-form-label">ENTRY DATE</label>
            <div class="col-sm-9">
              <input type="date" class="form-control" id="endate" placeholder="EndDate"/>
            </div>
          </div> */}
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
              <button type="button" class="btn btn-default" data-dismiss="modal" onClick={onupdate}>Submit</button>
            </div>
          </div>

        </div>
      </div>



    </>
  );
}

export default ViewProj;
