import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import Allocation_add from './pages/allocation_add';
import Fac_list from './pages/list_fac';
import Stu_list from './pages/list_stu';
import Allocation_view from './pages/allocation_view';
import Req_fromfac from './pages/req_fromfac';
import Req_fromstu from './pages/req_fromstu';
import AnnounceView from './pages/announcements_view';
import ViewProj from './pages/view_project_detail';
import ViewReq from './pages/view_request';
import Header from './component/header.js';
import Footer from './component/footer';
import Sidebar from './component/sidebar';
import Dashboard from './pages/dashboard';
import Reportview from './pages/view_report';
import Reportfeedback from './pages/feedback_report';
import Viewext from './pages/view_ext_present';
import AnnounceAdd from './pages/announcementsAdd';

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';







function App() {
  return (
   <div>   
{ localStorage.getItem("PC") == null ?

<>
<Router>
<Routes>
<Route exact path='/' element={<Login/>} />
</Routes>
</Router>
</>
:

<>
     <div class="container-scroller">
     
    <Router>
    <Header/>
    <div class="container-fluid page-body-wrapper">
     <Sidebar/> 
<Routes>
<Route exact path='/' element={<Dashboard/>}/>
<Route exact path='/Allocation_add' element={<Allocation_add/>}/>
<Route exact path='/Fac_list' element={<Fac_list/>}/>
<Route exact path='/Stu_list' element={<Stu_list/>}/>
<Route exact path='/Allocation_view' element={<Allocation_view/>}/>
<Route exact path='/ViewProj' element={<ViewProj/>}/>
<Route exact path='/ViewReq' element={<ViewReq/>}/>
<Route exact path='/Req_fromfac' element={<Req_fromfac/>}/>
<Route exact path='/Req_fromstu' element={<Req_fromstu/>}/>
<Route exact path='/Reportview' element={<Reportview/>}/>
<Route exact path='/Reportfeedback' element={<Reportfeedback/>}/>
<Route exact path='/Viewext' element={<Viewext/>}/>
<Route exact path='/AnnounceAdd' element={<AnnounceAdd/>}/>
<Route exact path='/AnnounceView' element={<AnnounceView/>}/>

</Routes>
</div>
    <Footer/>

    </Router>

</div>
    
   </>}
    
    
   </div> 

  );
}

export default App;