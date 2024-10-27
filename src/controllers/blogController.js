const blogs=require('../models/Blog');
const blogServices = require('../services/blogServices');
 

const getAllBlog = async(req,res)=>{
    const blogLists = await blogServices.fetchAllBlogs();
    res.json({data:blogLists});

};

const addBlog = async(req,res)=>{
    const insertblog = await blogServices.createNewBlog(req.body)
    if (insertblog) {
        res.json({message:'inserted successfully',data:insertblog})
    }
    else{

        res.json({message:'insertion failed!' , data:null});
    }
};


// // const findABlog = async(req,res) =>{
// //     console.log(rer.parms)


// // }

module.exports={
     getAllBlog,
     addBlog,
//     //findABlog

 }