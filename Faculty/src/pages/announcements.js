import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";
import Axios from 'axios';

function Announcements(){
  const[list,setlist]=useState([]);
    useEffect(()=>{
        Axios.get('http://localhost:1350/api/get_announce_view').then((response)=>{
        console.log(response.data);
        setlist(response.data);

        });
    
      
    },[]);
    return(
        <>
            <div class="col-md-12 stretch-card grid-margin">
            <div class="card">
              <div class="card-body">
                <p class="card-title">Announcements from Project Co-ordinator</p>
                <ul class="icon-data-list">
                {list.map((val)=>{
                        return(
                  <li>
                    <div class="d-flex">
                          <img src='./assets/images/faces/face10.jpg'/>
                      <div>
                        <p class="text-info mb-1">{val.ann_date}</p>
                        <p class="mb-0">{val.announcement}</p>
                        
                      </div>
                    </div> <hr/>
                  </li>
                 
                  )})}
                 
                </ul>
              </div>
            </div>
          </div>
        </>
    );
}

export default Announcements;