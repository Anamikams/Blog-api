const express = require('express');
const dbConnect = require('./utils/dbconnection');
const blogRoute = require('./route/blogRoute');

const app =express();
app.use(express.json())
dbConnect()

app.use('/api/v1',blogRoute);
    
app.listen(3000,()=>{
    console.log('listning at port 3000');
    
})