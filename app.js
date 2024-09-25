const express = require('express');
const app=express()

app.get('/', (req,res)=>{
   res.send('this is Home Page from GET Method')
})

app.listen(4000, (err)=>{
   if(err){
    
   }else{
    console.log('server is running on Port 4000');
    
   }
    
})
