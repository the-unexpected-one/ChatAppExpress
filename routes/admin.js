
const express=require('express');

const fs=require('fs');

const router=express.Router();

let data1;

router.get('/',(req,res,next)=>{
    fs.readFile('./routes/data.js','UTF8',(err,data)=>{
      
        res.send(
            `<div>
            <p>${data}</p>
            <form  action="/admin/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')"
         method='POST'>
         <input id="message" name="message" type="text" placeholder="message">
         <input type="hidden" name="username" id="username">
         <button type="submit">SEND</button>
        
        </form>
        </div>`)
        
    })
    
   
    // res.send(
    //     `<div>
    //     <p>${data1}</p>
    //     <form  action="/admin/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')"
    //  method='POST'>
    //  <input id="message" name="message" type="text" placeholder="message">
    //  <input type="hidden" name="username" id="username">
    //  <button type="submit">SEND</button>
    
    // </form>
    // </div>`)

});
router.post('/',(req,res,next)=>{
    
     fs.appendFile('./routes/data.js',`{${req.body.username}:${req.body.message}}`, (err)=>{
        console.log('Done writing')
     })
    //console.log(data);
    console.log(`{${req.body.username}:${req.body.message}}`)
});

module.exports=router;