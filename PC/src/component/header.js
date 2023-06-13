import React, { useEffect, useRef } from 'react';
import Link,{Component,useState} from 'react-router-dom';
import Axios from 'axios';
import swal from '@sweetalert/with-react';


function Header(){
  const current = new Date();
  const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;


let user=JSON.parse(localStorage.getItem('PC'));

  //let logout=localStorage.clear();
  const layoutRef = useRef(null);
  const layoutRef1 = useRef(null);
  const layoutRef2 = useRef(null);
  const layoutRef4 = useRef(null);

  

  var logout=() =>
  {
    swal({
      title: "Are you sure?",
      text: "You want to logout!?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((logout) => {
      if (logout) {
        localStorage.clear();
        window.location ="/";
      } 
      else {
      }
    });
    
  }
 var myValue;
  const handleClick = (ref) => {
   
  //  alert(ref?.current?.className);
  //  console.log(ref?.current?.className);

    if (ref?.current?.className.includes('show')) {
      ref.current.className = 'dropdown-menu dropdown-menu-right navbar-dropdown';
    } else {
      ref.current.className = 'dropdown-menu dropdown-menu-right navbar-dropdown show';
    }
  };

  const handleClick1 = (ref) => {
   
    //  alert(ref?.current?.className);
    //  console.log(ref?.current?.className);
  
      if (ref?.current?.className.includes('show')) {
        ref.current.className = 'dropdown-menu dropdown-menu-right navbar-dropdown preview-list';
      } else {
        ref.current.className = 'dropdown-menu dropdown-menu-right navbar-dropdown preview-list show';
      }
    };

    const handleClick2 = (ref) => {
   
      //  alert(ref?.current?.className);
      //  console.log(ref?.current?.className);
    
        if (ref?.current?.className.includes('show')) {
          ref.current.className = 'dropdown-menu dropdown-menu-right navbar-dropdown preview-list';
        } else {
          ref.current.className = 'dropdown-menu dropdown-menu-right navbar-dropdown preview-list show';
        }
      };


      const handleClick4 = (ref) => {
   
         alert(ref?.current?.className);
        //  console.log(ref?.current?.className);
      
          if (ref?.current?.className==='navbar-toggler navbar-toggler align-self-center') {
             myValue = 'sidebar-icon-only';
          } else {
             myValue= '';
          }
          alert(myValue);
        };
  
    return(
      
<>

<nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="navbar-brand-wrapper d-flex justify-content-center">
        <div className="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">
          <a className="navbar-brand brand-logo" href="#"><img src="../assests/images/l3n.png" alt="logo"/></a>
          <a className="navbar-brand brand-logo-mini" href="#"><img src="../assests/images/l1n.jpg" alt="logo"/></a>
          <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize" onClick={() => handleClick4(layoutRef4)} ref={layoutRef4}>
            <span className="typcn typcn-th-menu"></span>
          </button>
        </div>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        <ul className="navbar-nav mr-lg-2">
          <li className="nav-item nav-profile dropdown show"  onClick={() => handleClick(layoutRef)}>
            <a className="nav-link">
              <img src="../assests/images/faces/face5.jpg" alt="profile"/>
              <span className="nav-profile-name">{user.fname}</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown"  ref={layoutRef} aria-labelledby="profileDropdown" >
              <a className="dropdown-item">
                <i className="typcn typcn-cog-outline text-primary"></i>
                Settings
              </a>
              <a className="dropdown-item" onClick={logout}>
                <i className="typcn typcn-eject text-primary"></i>
                Logout
              </a>
            </div>
          </li>

</ul>

          <ul class="navbar-nav navbar-nav-right">
          <li class="nav-item nav-date dropdown">
            <a class="nav-link d-flex justify-content-center align-items-center" href="javascript:;">
              <h6 class="date mb-0">Today : {date}</h6>
              <i class="typcn typcn-calendar"></i>
            </a>
          </li>
          
          
        </ul>
        <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
          <span class="typcn typcn-th-menu"></span>
        </button>
      </div>
    </nav>
    
  

  
</>
    );
}
export default Header;