import React, { useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';

function Sidebar(props){
 
  const layoutRef = useRef(null);
  const layoutRef1 = useRef(null);
  const layoutRef2 = useRef(null);
  const layoutRef3 = useRef(null);
  const layoutRef4 = useRef(null);
  
  const handleClick = (ref) => {
   
    if (ref?.current?.className.includes('show')) {
      ref.current.className = 'collapse';
    } else {
      ref.current.className = 'collapse show';
    }
    };
  const handleClick1 = (ref) => {
   
    //  alert(ref?.current?.className);
    //  console.log(ref?.current?.className);
  
      if (ref?.current?.className.includes('show')) {
        ref.current.className = 'collapse';
      } else {
        ref.current.className = 'collapse show';
      }
    };
  const handleClick2 = (ref) => {
   
      if (ref?.current?.className.includes('show')) {
        ref.current.className = 'collapse';
      } else {
        ref.current.className = 'collapse show';
      }
      };
  const handleClick3 = (ref) => {
   
        if (ref?.current?.className.includes('show')) {
          ref.current.className = 'collapse';
        } else {
          ref.current.className = 'collapse show';
        }
        };
  const handleClick4 = (ref) => {
   
          if (ref?.current?.className.includes('show')) {
            ref.current.className = 'collapse';
          } else {
            ref.current.className = 'collapse show';
          }
          };



    return(
<>

<nav class="sidebar sidebar-offcanvas" id="sidebar">

        <ul class="nav">
          <li class="nav-item">
            
            <a class="nav-link" href="index.html">
              <i class="typcn typcn-home-outline menu-icon menu-icon"></i>
              
              <Link to="/" class="nav-link "><span class="menu-title">Dashboard</span></Link>
              <div class="badge badge-danger"></div>
            </a>
          </li>
          <li class="nav-item">
            
            <a class="nav-link" href="index.html">
              <i class="typcn typcn-messages menu-icon"></i>
              
              <Link to="/Announce" class="nav-link "><span class="menu-title">Announcements</span></Link>
              <div class="badge badge-danger"></div>
            </a>
          </li>

          <li class="nav-item" onClick={() => handleClick(layoutRef)}>
            <a class="nav-link" href="#">
              <i class="typcn typcn-device-laptop menu-icon"></i>
              <span class="menu-title">Definitions</span>
            </a>
            <div class="collapse" id="form-elements" ref={layoutRef}>
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                <Link to="/Add" class="nav-link "><span class="menu-title">Project Definition</span></Link>
                    </li>
                <li class="nav-item">
                <Link to="/ViewProj" class="nav-link "><span class="menu-title">Records</span></Link>
                    </li>
              </ul>
            </div>
          </li>

          <li class="nav-item" onClick={() => handleClick1(layoutRef1)}>
            <a class="nav-link" href="#">
              <i class="typcn typcn-stopwatch menu-icon"></i>
              <span class="menu-title">Schedule</span>
            </a>
            <div class="collapse" id="form-elements" ref={layoutRef1}>
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                <Link to="/Request" class="nav-link "><span class="menu-title">Meeting Request</span></Link>
                    </li>
                <li class="nav-item">
                <Link to="/ViewReq" class="nav-link "><span class="menu-title">Meeting Schedule</span></Link>
                    </li>
              </ul>
            </div>
          </li>

          <li class="nav-item" onClick={() => handleClick2(layoutRef2)}>
            <a class="nav-link" href="#">
              <i class="typcn typcn-edit menu-icon"></i>
              <span class="menu-title">Report</span>
            </a>
            <div class="collapse" ref={layoutRef2}>
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> 
                  <Link to="/Reportadd" class="nav-link "><span class="menu-title">Add</span></Link>
                </li>
                <li class="nav-item"> 
                  <Link to="/Reportview" class="nav-link "><span class="menu-title">View</span></Link>
                </li>
                <li class="nav-item">
                  <Link to="/Reportfeedback" class="nav-link "><span class="menu-title">Feedback</span></Link>
                </li>
              </ul>
            </div>
          </li>

          <li class="nav-item" onClick={() => handleClick3(layoutRef3)}>
            <a class="nav-link" href="#">
              <i class="typcn typcn-contacts menu-icon"></i>
              <Link to="/RequestPC" class="nav-link "><span class="menu-title">Appeal</span></Link>
            </a>
          </li>

          <li class="nav-item" onClick={() => handleClick3(layoutRef3)}>
            <a class="nav-link" href="#">
              <i class="typcn typcn-contacts menu-icon"></i>
              <Link to="/Reply_frompc" class="nav-link "><span class="menu-title">Appeal Reply</span></Link>
            </a>
          </li>

          <li class="nav-item" onClick={() => handleClick4(layoutRef4)}>
            <a class="nav-link" href="#">
              <i class="typcn typcn-mortar-board menu-icon"></i>
              <span class="menu-title">Final Assessment</span>
            </a>
            <div class="collapse" id="form-elements" ref={layoutRef4}>
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                <Link to="/Addext" class="nav-link "><span class="menu-title">Add</span></Link>
                    </li>
                <li class="nav-item">
                <Link to="/Viewext" class="nav-link "><span class="menu-title">Records</span></Link>
                    </li>
              </ul>
            </div>
          </li>

          {/* <li class="nav-item" >
            <a class="nav-link" href="#">
              <i class="typcn typcn-contacts menu-icon"></i>
              <Link to="/Settingview" class="nav-link "><span class="menu-title">Settings View</span></Link>
            </a>
          </li> */}


          
          
          
          

        </ul>
      </nav>
      
</>

    );

}
export default Sidebar;