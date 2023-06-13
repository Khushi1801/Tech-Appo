import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import Registration from './pages/registration';
import Add from './pages/add_project_detail';
import ViewProj from './pages/view_project_detail';
import Request from './pages/request';
import ViewReq from './pages/view_request';
import Header from './component/header.js';
import Footer from './component/footer';
import Sidebar from './component/sidebar';
import Dashboard from './pages/dashboard';
import RequestPC from './pages/requestpc';
import Reply_frompc from './pages/reply_frompc';
import Reportadd from './pages/add_report';
import Reportview from './pages/view_report';
import Reportfeedback from './pages/feedback_report';
import Addext from './pages/add_ext_present';
import Viewext from './pages/view_ext_present';
import Announce from './pages/announcements';
import Settings from './pages/settings';

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';


function App() {
  return (
   <div>   
{ localStorage.getItem("student") == null ?

<>
<Router>
<Routes>
<Route exact path='/' element={<Login/>} />
<Route exact path='/Registration' element={<Registration/>}/>
</Routes>
</Router>
</>
:

<>
     
     
    <Router><div class="container-scroller">
    <Header/>
    <div class="container-fluid page-body-wrapper">
     <Sidebar/> 
<Routes>
<Route exact path='/' element={<Dashboard/>}/>
<Route exact path='/Add' element={<Add/>}/>
<Route exact path='/Request' element={<Request/>}/>
<Route exact path='/ViewProj' element={<ViewProj/>}/>
<Route exact path='/ViewReq' element={<ViewReq/>}/>
<Route exact path='/RequestPC' element={<RequestPC/>}/>
<Route exact path='/Reply_frompc' element={<Reply_frompc/>}/>
<Route exact path='/Reportadd' element={<Reportadd/>}/>
<Route exact path='/Reportview' element={<Reportview/>}/>
<Route exact path='/Reportfeedback' element={<Reportfeedback/>}/>
<Route exact path='/Addext' element={<Addext/>}/>
<Route exact path='/Viewext' element={<Viewext/>}/>
<Route exact path='/Announce' element={<Announce/>}/>
<Route exact path='/settings' element={<Settings/>}/>
</Routes>
</div>
    <Footer/>
    </div>
    </Router>


    
   </>}
    
    
   </div>  
  );
}

export default App;