const express=require('express');

const router=express.Router();

router.get('/login', (req,res,next)=>{
    res.send(`<form   
    onsubmit="localStorage.setItem('username',document.getElementById('username').value)" 
    action="/admin/"
    method='GET'>
    <input id="username" name="username" type="text" placeholder="Username">
    
    <button type="submit">LOGIN</button>
   
   </form>`);
   
});


module.exports=router;