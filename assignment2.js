const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/homepage.html'));
  
});
router.get('/address',function(req,res){
    res.sendFile(path.join(__dirname+'/address.html'));
    
  });
router.get('/offers',function(req,res){
    res.sendFile(path.join(__dirname+'/offers.html'));
    
  });
router.get('/contact',function(req,res){
    res.sendFile(path.join(__dirname+'/contact.html'));
    
  });


app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Server starting up at: port:3000:');