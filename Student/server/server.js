const mongoose = require('mongoose');
const multer = require('multer');
var express = require("express");
var cors= require("cors"); 
var app=express();
app.use(cors());
app.use(express.json());
app.use("/public", express.static("public"));
const path=require("path");

const current = new Date();
  const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;

mongoose.connect('mongodb://localhost:27017/project_management',{}).then(()=>{console.log("Successful")});

//multer
const storage=multer.diskStorage({
  destination:path.join(__dirname,'./public/'),
  filename: function(req, file, callback) {
      callback(null,  Date.now() + '-' + path.extname(file.originalname))
} 
});

var upload1=multer({storage:storage});
var multi=upload1.fields([{name:'rpimage'}]);

//multer-end

//schema 
const feedback_report = new mongoose.Schema(
  {

    faculty_name : String , 
    sod : Date,
    fod :Date,
    feedback_data : String
  }
);

const register = new mongoose.Schema(
  {
      fname: String,
      lname : String,
      email : String,
      dob : Date,
      gender : String,
      mobile : Number,
      role : String,
      pwd : String,
      img : String
  }
);

const project_details = new mongoose.Schema(
    {
        stu1_id : Number,
        stu1_name : String,
        stu2_id : Number,
        stu2_name : String,
        stu3_id : Number,
        stu3_name : String,
        proj_title : String,
        proj_def : String,
        proj_des : String,
        tech_used : String,
        entry_date : Date
    }
);

const add_ext_exam = new mongoose.Schema(
    {
        
        grp_id : Number,
        proj_id : Number,
        proj_title : String,
        upload_ppt : String,
        upload_file : String,
        ext_exam_status : Number
    }
);

const add_report = new mongoose.Schema(
  {
      grp_id : Number,
      proj_id : Number,
      proj_title : String,
      start_date : Date,
      end_date : Date,
      upload_file : String,
      rep_status : Number
  }
);

const schedule_reqs = new mongoose.Schema(
  {
      
      grp_id : Number,
      proj_id : Number,
      proj_title : String,
      req_date : Date,
      req : String,
      req_reply : String,
      reply_date : Date,
      req_status : Number
  }
);

const req_to_pcs = new mongoose.Schema(
  {
      stu_id : Number,
      grp_id : Number,
      proj_id : Number,
      request : String,
      reply : String,
      status : Number,
      req_date : Date
  }
);

const announcement = new mongoose.Schema(
  {
    announcement : String,
    ann_date : Date
      
  }
);

const allocation = new mongoose.Schema(
  {
        grp_id : Number,
        stu1_id : Number,
        stu2_id : Number,
        stu3_id : Number,
        fac1_id : Number,
        fac2_id : Number
  }
)

//model
const reg_data = mongoose.model('register',register);
const project_data = mongoose.model('project_details',project_details);
const ext_data = mongoose.model('ext_exams',add_ext_exam);
const rep_data = mongoose.model('add_reports',add_report);
const req_data = mongoose.model('schedule_reqs',schedule_reqs);
const reqpc_data = mongoose.model('req_to_pcs',req_to_pcs);
const feedback_data = mongoose.model('feedback_report',feedback_report);
const announce_data = mongoose.model('announcements',announcement);
const allocat_data = mongoose.model('allocation',allocation);

//check
//const check = new announce_data({ announcement : "hello", Date : date});
//check.save();

app.post("/api/registration",(req,resp)=>{
    var a = req.body.a;
    var b = req.body.b;
    var c = req.body.c;
    var d = req.body.d;
    var e = req.body.e;
    var f = req.body.f;
    var g = req.body.g;
    var h = req.body.h;
    var i = req.body.i;

    console.log(h);

    var MongoClient = require('mongodb').MongoClient;  
    var url = 'mongodb://localhost:27017/project_management';  
    const mongodb = require('mongodb');
    MongoClient.connect(url, function(err, client) {  
    var db = client.db('project_management');
    var collection = db.collection("registers");

    collection.find({email:c}).toArray(function(err, result) {  
      if(result.length>0){
      resp.send({message:"already found"});
    }
    else{
      const insert = new reg_data({ fname: a,lname: b,email: c,dob: d,gender: e,mobile: f,role: g,pwd: h,img: i });
  
      insert.save().then(()=>{
        resp.send({message:"Done!!!!"});
      }).catch((err)=>{
          console.log(err);
      });
    }
  
    });    
  });
}); 

app.post("/api/login",(req,resp)=>{
  // console.log("welcome");
     var a = req.body.a;
     var b = req.body.b;
     var c = req.body.c;
     
 
    // console.log(a);
    // console.log(b);
    // console.log(c);

    var MongoClient = require('mongodb').MongoClient;  
    var url = 'mongodb://localhost:27017/project_management';  
    const mongodb = require('mongodb');
    MongoClient.connect(url, function(err, client) {  
    var db = client.db('project_management');
      
      db.collection("registers").find({ $and: [ {email:a}, { pwd:b},{role:c} ] }).toArray(function(err, result) {  
        if(result.length>0){
          resp.send(result);

        }else{

          resp.send({message:"Wrong EMAIL ID or PASSWORD"});
        }
      
    }); 
  });     
}); 

// app.post("/api/add_ext_present",(req,resp)=>{
//   // console.log("welcome");
//      var a = req.body.a;
//      var b = req.body.b;
//      var c = req.body.c;
//      var d = req.body.d;
//      var e = req.body.e;
     
 
//    // console.log(a);
//    const check = new ext_data({ grp_id: a, proj_id: b, proj_title: c, upload_ppt: d, upload_file: e });
   
//      check.save(function (err) {
//        if (err) return handleError(err);
//        resp.send({message:"Done!!!!"});
       
//        // saved!
//      });
// });

app.get('/api/get_ext_present', (req,resp)=>{     
       
  var MongoClient = require('mongodb').MongoClient;  
  var url = 'mongodb://localhost:27017/project_management'; 
  const mongodb = require('mongodb');
//const ObjectID = require('mongodb').ObjectID;
  MongoClient.connect(url, function(err, client) {  
    if (err) throw err;  
    var db = client.db('project_management');          
    db.collection("ext_exams").find({}).toArray(function(err, result) {  
      if (err) throw err;  
      console.log(result);  
      client.close();  
      resp.send(result);
    }); 
  });  
});

app.get('/api/get_image', (req,resp)=>{     
       
  var MongoClient = require('mongodb').MongoClient;  
  var url = 'mongodb://localhost:27017/project_management'; 
  const mongodb = require('mongodb');
//const ObjectID = require('mongodb').ObjectID;
  MongoClient.connect(url, function(err, client) {  
    if (err) throw err;  
    var db = client.db('project_management');          
    db.collection("registers").find({}).toArray(function(err, result) {  
      if (err) throw err;  
      console.log(result);  
      client.close();  
      resp.send(result);
    }); 
  });  
});

app.post("/api/project_details1",(req,resp)=>{
  // console.log("welcome");
     var a = req.body.a;
     var b = req.body.b;
     var c = req.body.c;
     var d = req.body.d;
     var e = req.body.e;
     var f = req.body.f;
     var g = req.body.g;
     var h = req.body.h;
     var i = req.body.i;
     var j = req.body.j;
     var k = req.body.k;
     

 
   // console.log(a);
    const check = new project_data({ stu1_id: a,stu1_name: b,stu2_id: c,stu2_name: d,stu3_id: e,stu3_name: f,proj_title : g,proj_def : h,proj_des : i,tech_used : j,entry_date : k });
   
     check.save(function (err) {
       if (err) return handleError(err);
       resp.send({message:"Done!!!!"});
       // saved!
     });
});

app.get('/api/get_project_details', (req,resp)=>{     
       
  var MongoClient = require('mongodb').MongoClient;  
  var url = 'mongodb://localhost:27017/project_management'; 
  const mongodb = require('mongodb');
//const ObjectID = require('mongodb').ObjectID;
  MongoClient.connect(url, function(err, client) {  
    if (err) throw err;  
    var db = client.db('project_management');          
    db.collection("project_details").find({}).toArray(function(err, result) {  
      if (err) throw err;  
      console.log(result);  
      client.close();  
      resp.send(result);
    });     
  
  
  });  
});

app.get('/api/getreply_req_to_pcs', (req,resp)=>{     
       
  var MongoClient = require('mongodb').MongoClient;  
  var url = 'mongodb://localhost:27017/project_management'; 
  const mongodb = require('mongodb');
//const ObjectID = require('mongodb').ObjectID;
  MongoClient.connect(url, function(err, client) {  
    if (err) throw err;  
    var db = client.db('project_management');          
    db.collection("req_to_pcs").find({}).toArray(function(err, result) {  
      if (err) throw err;  
      console.log(result);  
      client.close();  
      resp.send(result);
    });     
  
  
});  
});

// app.post("/api/report",(req,resp)=>{
//   // console.log("welcome");
//      var a = req.body.a;
//      var b = req.body.b;
//      var c = req.body.c;
//      var d = req.body.d;
//      var e = req.body.e;
//      var f = req.body.f;
     
 
//    // console.log(a);
//    const check = new rep_data({ grp_id: a, proj_id: b, proj_title: c, start_date: d, end_date: e, upload_file: f });
   
//      check.save(function (err) {
//        if (err) return handleError(err);
//        resp.send({message:"Done!!!!"});
//        // saved!
//      });
// });

app.get('/api/get_report', (req,resp)=>{     
       
  var MongoClient = require('mongodb').MongoClient;  
  var url = 'mongodb://localhost:27017/project_management'; 
  const mongodb = require('mongodb');
//const ObjectID = require('mongodb').ObjectID;
  MongoClient.connect(url, function(err, client) {  
    if (err) throw err;  
    var db = client.db('project_management');          
    db.collection("add_reports").find({}).toArray(function(err, result) {  
      if (err) throw err;  
      console.log(result);  
      client.close();  
      resp.send(result);
    });     
  
  
  });  
});
   
app.post("/api/request",(req,resp)=>{
  // console.log("welcome");
     var a = req.body.a;
     var b = req.body.b;
     var c = req.body.c;
     var d=date;
     
   // console.log(a);
   const check = new req_data({ grp_id: a, proj_id: b,req: c ,req_date:d});
   
     check.save(function (err) {
       if (err) return handleError(err);
       resp.send({message:"Done!!!!"});
       // saved!
     });
});

app.get('/api/get_request', (req,resp)=>{     
       
  var MongoClient = require('mongodb').MongoClient;  
  var url = 'mongodb://localhost:27017/project_management'; 
  const mongodb = require('mongodb');
//const ObjectID = require('mongodb').ObjectID;
  MongoClient.connect(url, function(err, client) {  
    if (err) throw err;  
    var db = client.db('project_management');          
    db.collection("schedule_reqs").find({}).toArray(function(err, result) {  
      if (err) throw err;  
      console.log(result);  
      client.close();  
      resp.send(result);
    });     
  
  
  });  
});


app.post("/api/requestpc",(req,resp)=>{
  // console.log("welcome");
     var a = req.body.a;
     var b = req.body.b;
     var c = req.body.c;
     var d = req.body.d;
     var e = req.body.e;
     var f = req.body.f;
     var g = date;
     
   // console.log(a);
   const check = new reqpc_data({ stu_id : a,grp_id : b,proj_id : c,request :d,reply : e,status : f,req_date : g });
   
     check.save(function (err) {
       if (err) return handleError(err);
       resp.send({message:"Done!!!!"});
       // saved!
     });
});


app.get('/api/get_feedback_report', (req,resp)=>{     
       
  var MongoClient = require('mongodb').MongoClient;  
  var url = 'mongodb://localhost:27017/project_management'; 
  const mongodb = require('mongodb');
//const ObjectID = require('mongodb').ObjectID;
  MongoClient.connect(url, function(err, client) {  
    if (err) throw err;  
    var db = client.db('project_management');          
    db.collection("feedback_reports").find({}).toArray(function(err, result) {  
      if (err) throw err;  
      console.log(result);  
      client.close();  
      resp.send(result);
    });  
  });  
});

app.post("/api/announce",(req,resp)=>{
  console.log("welcome");
     var a = req.body.a;
     var b = date;
     
     
   console.log(b);
   const check = new announce_data({ announcement: a,ann_date: b});
   
     check.save(function (err) {
       if (err) return handleError(err);
       resp.send({message:"Done!!!!"});
       
     });
});

app.get('/api/get_announce_view', (req,resp)=>{     
       
  var MongoClient = require('mongodb').MongoClient;  
  var url = 'mongodb://localhost:27017/project_management'; 
  const mongodb = require('mongodb');
//const ObjectID = require('mongodb').ObjectID;
  MongoClient.connect(url, function(err, client) {  
    if (err) throw err;  
    var db = client.db('project_management');          
    db.collection("announcements").find({}).toArray(function(err, result) {  
      if (err) throw err;  
      console.log(result);  
      client.close();  
      resp.send(result);
    });  
  });  
});

  

app.post("/api/allocate_add",(req,resp)=>{
  //console.log("welcome");
     var a = req.body.a;
     var b = req.body.b;
     var c = req.body.c;
     var d = req.body.d;
     var e = req.body.e;
     var f = req.body.f;
     
    
   console.log(b);
   const check = new allocat_data({ grp_id : a,stu1_id : b, stu2_id : c, stu3_id : d, fac1_id : e,fac2_id : f});
   
     check.save(function (err) {
       if (err) return handleError(err);
       resp.send({message:"Done!!!!"});
       
     });
});

app.get('/api/get_allocate_view', (req,resp)=>{     
       
  var MongoClient = require('mongodb').MongoClient;  
  var url = 'mongodb://localhost:27017/project_management'; 
  const mongodb = require('mongodb');
//const ObjectID = require('mongodb').ObjectID;
  MongoClient.connect(url, function(err, client) {  
    if (err) throw err;  
    var db = client.db('project_management');          
    db.collection("allocations").find({}).toArray(function(err, result) {  
      if (err) throw err;  
      console.log(result);  
      client.close();  
      resp.send(result);
    });  
  });  
});

app.get('/api/get_req_fromstu', (req,resp)=>{     
       
    var MongoClient = require('mongodb').MongoClient;  
    var url = 'mongodb://localhost:27017/project_management'; 
    const mongodb = require('mongodb');
  //const ObjectID = require('mongodb').ObjectID;
    MongoClient.connect(url, function(err, client) {  
      if (err) throw err;  
      var db = client.db('project_management');          
      db.collection("req_to_pcs").find({}).toArray(function(err, result) {  
        if (err) throw err;  
        console.log(result);  
        client.close();  
        resp.send(result);
      });  
  });  
});

app.post('/api/getdata_announcedata', (req,resp)=>{     
    var id = req.body.id;
       //console.log(id);
      
      
    const ObjectID = require('mongodb').ObjectId;


    var MongoClient = require('mongodb').MongoClient;  
    var url = 'mongodb://localhost:27017/project_management'; 
    const mongodb = require('mongodb');
    //const ObjectID = require('mongodb').ObjectID;
      MongoClient.connect(url, function(err, client) {  
        if (err) throw err;  
        var db = client.db('project_management');  
        db.collection("announcements").find({"_id":ObjectID(id.toString())}).toArray(function(err,result){
          //console.log(err);
          resp.send(result);

        });    
  });
});
    

app.post('/api/updated_announce', (req,resp)=>{  
    console.log("welcome");   
    var id = req.body.id;
    var a = req.body.a;
    console.log(a);
    console.log(id);
    const ObjectID = require('mongodb').ObjectId;


    var MongoClient = require('mongodb').MongoClient;  
    var url = 'mongodb://localhost:27017/project_management'; 
    const mongodb = require('mongodb');
   // const ObjectID = require('mongodb').ObjectID;
      MongoClient.connect(url, function(err, client) {  
        if (err) throw err;  
        var db = client.db('project_management');          
        db.collection("announcements").updateOne({"_id":new mongodb.ObjectId(id.toString())},{$set:{announcement:a}});
        resp.send="update done";
  });  
});

app.post('/api/delete_announce', (req,resp)=>{  
    console.log("welcome");   
    var id = req.body.id;
      //  var a = req.body.a;
      //  console.log(a);
      //  console.log(id);
    const ObjectID = require('mongodb').ObjectId;
  
  
    var MongoClient = require('mongodb').MongoClient;  
    var url = 'mongodb://localhost:27017/project_management'; 
    const mongodb = require('mongodb');
     // const ObjectID = require('mongodb').ObjectID;
        MongoClient.connect(url, function(err, client) {  
          if (err) throw err;  
          var db = client.db('project_management');          
         db.collection("announcements").deleteOne({"_id":new mongodb.ObjectId(id.toString())});
          resp.send="update done";
  });  
});

app.post('/api/delete_allocation', (req,resp)=>{  
  console.log("welcome");   
  var id = req.body.id;
    //  var a = req.body.a;
    //  console.log(a);
    //  console.log(id);
  const ObjectID = require('mongodb').ObjectId;


  var MongoClient = require('mongodb').MongoClient;  
  var url = 'mongodb://localhost:27017/project_management'; 
  const mongodb = require('mongodb');
   // const ObjectID = require('mongodb').ObjectID;
      MongoClient.connect(url, function(err, client) {  
        if (err) throw err;  
        var db = client.db('project_management');          
       db.collection("allocations").deleteOne({"_id":new mongodb.ObjectId(id.toString())});
        resp.send="update done";
});  
});
    

app.post('/api/getdata_req_fromstu_data', (req,resp)=>{     
    var id = req.body.id;
        //console.log(id);
       
       
    const ObjectID = require('mongodb').ObjectId;
 
 
    var MongoClient = require('mongodb').MongoClient;  
    var url = 'mongodb://localhost:27017/project_management'; 
    const mongodb = require('mongodb');
     //const ObjectID = require('mongodb').ObjectID;
       MongoClient.connect(url, function(err, client) {  
         if (err) throw err;  
         var db = client.db('project_management');  
         db.collection("req_to_pcs").find({"_id":ObjectID(id.toString())}).toArray(function(err,result){
           //console.log(err);
           resp.send(result);
 
         });    
  });
});

app.post('/api/getdata_allocationdata', (req,resp)=>{     
      var id = req.body.id;
      console.log(id);
     
     
      const ObjectID = require('mongodb').ObjectId;


     var MongoClient = require('mongodb').MongoClient;  
     var url = 'mongodb://localhost:27017/project_management'; 
     const mongodb = require('mongodb');
   //const ObjectID = require('mongodb').ObjectID;
     MongoClient.connect(url, function(err, client) {  
       if (err) throw err;  
       var db = client.db('project_management');  
       db.collection("allocations").find({"_id":ObjectID(id.toString())}).toArray(function(err,result){
         //console.log(err);
         resp.send(result);

       });    
  });
});

app.post('/api/getdata_projectdata', (req,resp)=>{     
    var id = req.body.id;
    //console.log(id);
   
   
    const ObjectID = require('mongodb').ObjectId;


   var MongoClient = require('mongodb').MongoClient;  
   var url = 'mongodb://localhost:27017/project_management'; 
   const mongodb = require('mongodb');
 //const ObjectID = require('mongodb').ObjectID;
   MongoClient.connect(url, function(err, client) {  
     if (err) throw err;  
     var db = client.db('project_management');  
     db.collection("project_details").find({"_id":ObjectID(id.toString())}).toArray(function(err,result){
       //console.log(err);
       resp.send(result);

     });    
  });
});

 app.post('/api/getdata_reportdata', (req,resp)=>{     
  var id = req.body.id;
  console.log(id);
 
 
  const ObjectID = require('mongodb').ObjectId;


 var MongoClient = require('mongodb').MongoClient;  
 var url = 'mongodb://localhost:27017/project_management'; 
 const mongodb = require('mongodb');
//const ObjectID = require('mongodb').ObjectID;
 MongoClient.connect(url, function(err, client) {  
   if (err) throw err;  
   var db = client.db('project_management');  
   db.collection("add_reports").find({"_id":ObjectID(id.toString())}).toArray(function(err,result){
     //console.log(err);
     resp.send(result);

   });    
 });
});

app.post('/api/getdata_externaldata', (req,resp)=>{     
  var id = req.body.id;
  console.log(id);
 
 
  const ObjectID = require('mongodb').ObjectId;


 var MongoClient = require('mongodb').MongoClient;  
 var url = 'mongodb://localhost:27017/project_management'; 
 const mongodb = require('mongodb');
//const ObjectID = require('mongodb').ObjectID;
 MongoClient.connect(url, function(err, client) {  
   if (err) throw err;  
   var db = client.db('project_management');  
   db.collection("ext_exams").find({"_id":ObjectID(id.toString())}).toArray(function(err,result){
     //console.log(err);
     resp.send(result);

   });    
 });
});

app.post('/api/getdata_imagedata', (req,resp)=>{     
  var id = req.body.id;
  console.log(id);
 
 
  const ObjectID = require('mongodb').ObjectId;


 var MongoClient = require('mongodb').MongoClient;  
 var url = 'mongodb://localhost:27017/project_management'; 
 const mongodb = require('mongodb');
//const ObjectID = require('mongodb').ObjectID;
 MongoClient.connect(url, function(err, client) {  
   if (err) throw err;  
   var db = client.db('project_management');  
   db.collection("registers").find({"_id":ObjectID(id.toString())}).toArray(function(err,result){
     //console.log(err);
     resp.send(result);

   });    
 });
});

app.post('/api/getdata_request', (req,resp)=>{     
  var id = req.body.id;
  console.log(id);
 
 
  const ObjectID = require('mongodb').ObjectId;


 var MongoClient = require('mongodb').MongoClient;  
 var url = 'mongodb://localhost:27017/project_management'; 
 const mongodb = require('mongodb');
//const ObjectID = require('mongodb').ObjectID;
 MongoClient.connect(url, function(err, client) {  
   if (err) throw err;  
   var db = client.db('project_management');  
   db.collection("schedule_reqs").find({"_id":ObjectID(id.toString())}).toArray(function(err,result){
     //console.log(err);
     resp.send(result);

   });    
 });
});


app.post('/api/reply_to_stu', (req,resp)=>{  
    //console.log("welcome");   
    var id = req.body.id;
   var a = req.body.a;
   var status = req.body.status;
   //console.log(a);
   //console.log(id);
   const ObjectID = require('mongodb').ObjectId;


      var MongoClient = require('mongodb').MongoClient;  
      var url = 'mongodb://localhost:27017/project_management'; 
      const mongodb = require('mongodb');
   // const ObjectID = require('mongodb').ObjectID;
      MongoClient.connect(url, function(err, client) {  
        if (err) throw err;  
        var db = client.db('project_management');          
        db.collection("req_to_pcs").updateOne({"_id":new mongodb.ObjectId(id.toString())},{$set:{reply:a,status:status}});
        resp.send="update done";
  });  
});


app.post('/api/updated_allocation', (req,resp)=>{  
        //console.log("welcome");   
   var id = req.body.id;
   var a = req.body.a;
   var b = req.body.b;
   var c = req.body.c;
   var d = req.body.d;
   var e = req.body.e;
   var f = req.body.f;
       //var status = req.body.status;
      //  console.log(a);
    console.log(b);
    console.log(e);
    const ObjectID = require('mongodb').ObjectId;
    
    
    var MongoClient = require('mongodb').MongoClient;  
    var url = 'mongodb://localhost:27017/project_management'; 
     const mongodb = require('mongodb');
       // const ObjectID = require('mongodb').ObjectID;
    MongoClient.connect(url, function(err, client) {  
      if (err) throw err;  
        var db = client.db('project_management');          
         db.collection("allocations").updateMany({"_id":new mongodb.ObjectId(id.toString())},{$set:{grp_id : a, stu1_id : b,stu2_id : c,stu3_id : d,fac1_id : e,fac2_id : f}});
        resp.send="update done";
  });  
});

app.post('/api/updated_project', (req,resp)=>{  
            //console.log("welcome");   
    var id = req.body.id;
    var a = req.body.a;
    var b = req.body.b;
    var c = req.body.c;
    var d = req.body.d;
    var e = req.body.e;
    var f = req.body.f;
    var g = req.body.g;
    var h = req.body.h;
    var i = req.body.i;
    var j = req.body.j;
    var k = date;
    //var status = req.body.status;
    //  console.log(a);
    console.log(b);
    console.log(e);
    const ObjectID = require('mongodb').ObjectId;
        
        
    var MongoClient = require('mongodb').MongoClient;  
    var url = 'mongodb://localhost:27017/project_management'; 
    const mongodb = require('mongodb');
    // const ObjectID = require('mongodb').ObjectID;
    MongoClient.connect(url, function(err, client) {  
      if (err) throw err;  
        var db = client.db('project_management');   
        console.log(b);       
        db.collection("project_details").updateMany({"_id":new mongodb.ObjectId(id)},{$set:{stu1_id : a, stu1_name : b,stu2_id : c,stu2_name : d,stu3_id : e,stu3_name : f,proj_title : g,proj_def : h,proj_des : i,tech_used : j,entry_date : k }});
        console.log(g);
        console.log(b);
        resp.send="update done";
  });  
});

              
    

app.post('/api/updated_report',multi, (req,resp)=>{  
     
    var id = req.body.id;
    console.log(id);
    if(req.files){
    console.log("welcome");
    var id = req.body.id;
    var a = req.body.g_id;
    var b = req.body.pro_id;
    var c = req.body.pro_tit;
    var d = req.body.s_date;
    var e = req.body.e_date;
    console.log(a);
                   
                   
    const rp = req.files.rpimage[0];
    var fn=rp.filename;
    console.log(fn);
    const ObjectID = require('mongodb').ObjectId;
            
            
    var MongoClient = require('mongodb').MongoClient;  
    var url = 'mongodb://localhost:27017/project_management'; 
    const mongodb = require('mongodb');
               // const ObjectID = require('mongodb').ObjectID;
     MongoClient.connect(url, function(err, client) {  
    if (err) throw err;  
      var db = client.db('project_management');          
      db.collection("add_reports").updateMany({"_id":new mongodb.ObjectId(id.toString())},{$set:{grp_id : a, proj_id : b,proj_title : c,start_date : d,end_date : e,upload_file : fn}});
      resp.send="update done";
  });  
}
});

app.post('/api/updated_image',multi, (req,resp)=>{  
     
  var id = req.body.id;
  console.log(id);
  if(req.files){
  console.log("welcome");
  var id = req.body.id;
  var a = req.body.name;
  var b = req.body.eid;
  console.log(a);
                 
                 
  const rp = req.files.rpimage[0];
  var fn=rp.filename;
  console.log(fn);
  const ObjectID = require('mongodb').ObjectId;
          
          
  var MongoClient = require('mongodb').MongoClient;  
  var url = 'mongodb://localhost:27017/project_management'; 
  const mongodb = require('mongodb');
             // const ObjectID = require('mongodb').ObjectID;
   MongoClient.connect(url, function(err, client) {  
  if (err) throw err;  
    var db = client.db('project_management');          
    db.collection("registers").updateOne({"_id":new mongodb.ObjectId(id.toString())},{$set:{fname : a, email : b,upload_file : fn}});
    resp.send="update done";
});  
}
});

var upload3=multer({storage:storage});
var multi2=upload3.fields([{name:'rpimage'},{name:'u_report'}]);

app.post('/api/updated_extreport',multi2, (req,resp)=>{  
     
  //console.log("hello"); 
  var id = req.body.id;
  //console.log("hello");
  console.log(id);
            //   var a = req.body.a;
            //   var b = req.body.b;
            //   var c = req.body.c;
            //   var d = req.body.d;
            //   var e = req.body.e;
            //   var f = req.body.f;
             //var status = req.body.status;
            //  console.log(a);
              
             //console.log(a);
  if(req.files){
  //console.log("welcome");
  var id = req.body.id;
  //console.log("hello");
  console.log(id);
  var a = req.body.g_id;
  var b = req.body.pro_id;
  var c = req.body.pro_tit;
  console.log(a);
                 
                 
  const rp = req.files.rpimage[0];
  var fn1=rp.filename;

  const rp1 = req.files.u_report[0];
  var fn2=rp1.filename;
  //console.log(fn);
                  //console.log(fn);
                            //const insert = new rep_data({ grp_id: a, proj_id: b, proj_title: c, start_date: d, end_date: e,upload_file:fn});
                   
                        // insert.save(function (err) {
                        //   if (err) return handleError(err);
                        //   resp.send({message:"Done!!!!"});
                        //   // saved!
                        //    })
                     
             
  const ObjectID = require('mongodb').ObjectId;
          
          
  var MongoClient = require('mongodb').MongoClient;  
  var url = 'mongodb://localhost:27017/project_management'; 
  const mongodb = require('mongodb');
             // const ObjectID = require('mongodb').ObjectID;
   MongoClient.connect(url, function(err, client) {  
  if (err) throw err;  
    var db = client.db('project_management');          
    db.collection("ext_exams").updateMany({"_id":new mongodb.ObjectId(id.toString())},{$set:{grp_id : a, proj_id : b,proj_title : c,upload_ppt : fn1,upload_file : fn2}});
    resp.send="update done";
    
});  
}
});

                
app.post("/api/report",multi,(req,resp)=>{
                    
    if(req.files){console.log("welcome");
      var a = req.body.gid;
      var b = req.body.proid;
      var c = req.body.protit;
      var d = req.body.sdate;
      var e = req.body.edate;
                   
                   
                   
      const rp = req.files.rpimage[0];
      var fn=rp.filename;
      console.log(fn);
      const insert = new rep_data({ grp_id: a, proj_id: b, proj_title: c, start_date: d, end_date: e,upload_file:fn});
                     
      insert.save(function (err) {
      if (err) return handleError(err);
        resp.send({message:"Done!!!!"});
        // saved!
      })
                       
    }
});

var upload2=multer({storage:storage});
var multi1=upload2.fields([{name:'rpimage'},{name:'ureport'}]);

app.post("/api/add_ext_present",multi1,(req,resp)=>{
                    
  if(req.files){
    console.log("welcome");
  var a = req.body.gid;
  var b = req.body.proid;
  var c = req.body.protit;
  // var d = req.body.uppt;
  // var e = req.body.ureport;
 
 
 
  const rp = req.files.rpimage[0];
  var fn1=rp.filename;

  const rp1 = req.files.ureport[0];
  var fn2=rp1.filename;
  //var fn2=rp.filename;
  //console.log(fn);
     const insert = new ext_data({ grp_id: a, proj_id: b, proj_title: c, upload_ppt: fn1, upload_file: fn2});
   
        insert.save(function (err) {
          if (err) return handleError(err);
          resp.send({message:"Done!!!!"});
          // saved!
           });
     
}
});




// for test 


app.get('/api/get_define', (req,resp)=>{     
  console.log("result"); 

  const url = "mongodb://localhost:27017/TechAppo"; 
  const m = require('mongodb').MongoClient;  
  m.connect(url,(err, db) =>{  
    if (err) throw err;
    console.log("hello2");

    const db1=db.db('TechAppo');
    const collection=db1.collection('defines');
    
        
      collection.find().forEach((items)=> {
        db.close();
         console.log(items); 
         
       
  
  
  });  
});
});



// test end
app.listen(1350);

