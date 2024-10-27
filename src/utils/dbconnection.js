const mongoose = require('mongoose')

const dbConnect =()=>{
mongoose.connect('mongodb://localhost/myDB').then(()=>{
    console.log('connected');
    

}).catch((err)=>console.log(err))
}

module.exports = dbConnect;
