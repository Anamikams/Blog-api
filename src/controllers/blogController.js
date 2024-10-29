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
const findABlog = async(req,res)=>{
    const {id} = req.params
    const fetchedBlog = await blogServices.findABlogByID(id);
    if(fetchedBlog){
        res.json({message:"data fetched successfully",data:fetchedBlog})
    }
    else{
        res.json({message:"failed to fetch data!",data:null});
    }
    
};
const updateBlog =async(req,res)=>{
    const blogId = req.params.id;
    const updatedData = req.body;

    const updateblog = await blogServices.updateABlog(blogId, updatedData)
    if (updateblog) {
        res.json({message:'update successfully',data:updateblog})
    }
    else{
        res.json({message:'updation failed!' , data:null});
    }
}

const deleteBlog =async(req,res)=>{
    const blogId=req.params.id;
    
    const deletedblog = await blogServices.deleteBlogById(blogId);
    if(deletedblog){
        res.json({message:"successfully deleted",data:deletedblog});
    }
    else{
        res.json({message:"failed to delete data",data:null});
    }
}
module.exports={
     getAllBlog,
     addBlog,
     findABlog,
     updateBlog,
     deleteBlog

 }