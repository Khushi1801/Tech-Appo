import React, { useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';

function Sidebar(props){
 
  
  const layoutRef1 = useRef(null);
  const layoutRef2 = useRef(null);
  const layoutRef3 = useRef(null);
  const layoutRef4 = useRef(null);
  const layoutRef5 = useRef(null);
  const layoutRef6 = useRef(null);
  const layoutRef7 = useRef(null);
  const layoutRef8 = useRef(null);


 
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
  const handleClick5 = (ref) => {
   
            if (ref?.current?.className.includes('show')) {
              ref.current.className = 'collapse';
            } else {
              ref.current.className = 'collapse show';
            }
            };
  const handleClick6 = (ref) => {
   
              if (ref?.current?.className.includes('show')) {
                ref.current.className = 'collapse';
              } else {
                ref.current.className = 'collapse show';
              }
              };
   const handleClick7 = (ref) => {
   
                if (ref?.current?.className.includes('show')) {
                  ref.current.className = 'collapse';
                } else {
                  ref.current.className = 'collapse show';
                }
                };
   const handleClick8 = (ref) => {
   
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
              <i class="typcn typcn-home-outline menu-icon"></i>
              <Link to="/" class="nav-link "><span class="menu-title">Dashboard</span></Link>
              <div class="badge badge-danger"></div>
            </a>
          </li>

          <li class="nav-item" onClick={() => handleClick1(layoutRef1)}>
            <a class="nav-link" href="#">
              <i class="typcn typcn-document-add menu-icon"></i>
              <Link to="/" class="nav-link "><span class="menu-title">Announcements</span></Link>
            </a>
            <div class="collapse" id="form-elements" ref={layoutRef1}>
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                <Link to="/AnnounceAdd" class="nav-link "><span class="menu-title">Make Announcement</span></Link>
                    </li>
                <li class="nav-item">
                <Link to="/AnnounceView" class="nav-link "><span class="menu-title">Details Announced</span></Link>
                    </li>
              </ul>
            </div>
          </li>

          <li class="nav-item" onClick={() => handleClick2(layoutRef2)}>
            <a class="nav-link" href="#">
              <i class="typcn typcn-document-add menu-icon"></i>
              <Link to="/" class="nav-link "><span class="menu-title">List</span></Link>
            </a>
            <div class="collapse" id="form-elements" ref={layoutRef2}>
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                <Link to="/Fac_list" class="nav-link "><span class="menu-title">Faculty</span></Link>
                    </li>
                <li class="nav-item">
                <Link to="/Stu_list" class="nav-link "><span class="menu-title">Student</span></Link>
                    </li>
              </ul>
            </div>
          </li>

          <li class="nav-item" onClick={() => handleClick3(layoutRef3)}>
            <a class="nav-link" href="#">
              <i class="typcn typcn-input-checked menu-icon"></i>
              <Link to="/" class="nav-link "><span class="menu-title">Allocation</span></Link>
            </a>
            <div class="collapse" id="form-elements" ref={layoutRef3}>
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                <Link to="/Allocation_add" class="nav-link "><span class="menu-title">Assign</span></Link>
                    </li>
                <li class="nav-item">
                <Link to="/Allocation_view" class="nav-link "><span class="menu-title">Check List</span></Link>
                    </li>
              </ul>
            </div>
          </li>

          

          <li class="nav-item" onClick={() => handleClick4(layoutRef4)}>
            <a class="nav-link" href="#">
              <i class="typcn typcn-device-laptop menu-icon"></i>
              <Link to="/ViewProj" class="nav-link "><span class="menu-title">Definitions</span></Link>
            </a>
            
          </li>

          <li class="nav-item" onClick={() => handleClick5(layoutRef5)}>
            <a class="nav-link" href="#">
              <i class=" typcn typcn-stopwatch menu-icon"></i>
              <Link to="/ViewReq" class="nav-link "><span class="menu-title">Schedule</span></Link>
            </a>
          </li>

          <li class="nav-item" onClick={() => handleClick6(layoutRef6)}>
            <a class="nav-link" href="#">
              <i class="typcn typcn-edit menu-icon"></i>
              <Link to="/" class="nav-link "><span class="menu-title">Report</span></Link>
            </a>
            <div class="collapse" ref={layoutRef6}>
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> 
                  <Link to="/Reportview" class="nav-link "><span class="menu-title">Records</span></Link>
                </li>
                <li class="nav-item">
                  <Link to="/Reportfeedback" class="nav-link "><span class="menu-title">Feedback</span></Link>
                </li>
              </ul>
            </div>
          </li>

          <li class="nav-item" onClick={() => handleClick7(layoutRef7)}>
            <a class="nav-link" href="#">
              <i class="typcn typcn-contacts menu-icon"></i>
              <Link to="/" class="nav-link "><span class="menu-title">Plea</span></Link>
            </a>
            <div class="collapse" ref={layoutRef7}>
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> 
                  <Link to="/Req_fromfac" class="nav-link "><span class="menu-title">From Faculty</span></Link>
                </li>
                <li class="nav-item"> 
                  <Link to="/Req_fromstu" class="nav-link "><span class="menu-title">From Student</span></Link>
                </li>
              </ul>
            </div>
          </li>

          <li class="nav-item" onClick={() => handleClick8(layoutRef8)}>
            <a class="nav-link" href="#">
              <i class="typcn typcn-mortar-board menu-icon"></i>
              <Link to="/Viewext" class="nav-link "><span class="menu-title">Final Assessment</span></Link>
            </a>
          </li>


          
          
          
          

        </ul>
      </nav>
      
</>

    );

}
export default Sidebar;