const blogs = require('../models/Blog');

const fetchAllBlogs =async()=>{
    return await blogs.find({},{__v:0});
    
}

const createNewBlog = async(bodyData)=>{
    const{title,content,author} = bodyData;
    const insertblog = await blogs.create({title,content,author});
    return insertblog;
}



module.exports={
    fetchAllBlogs,
    createNewBlog
};