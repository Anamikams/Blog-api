const blogs = require('../models/Blog');

const fetchAllBlogs =async()=>{
    return await blogs.find({},{__v:0});
    
}

const createNewBlog = async(bodyData)=>{
    const{title,content,author} = bodyData;
    const insertblog = await blogs.create({title,content,author});
    return insertblog;
}
const findABlogByID = async(id)=>{
    console.log(id);
    return await blogs.findById({_id: id})
}

const updateABlog =async(id,data)=>{
    return await blogs.findByIdAndUpdate(id, data, { new: true });
};

const deleteBlogById = async(id,data)=>{
    return await blogs.findByIdAndDelete(id,data);
}

module.exports={
    fetchAllBlogs,
    createNewBlog,
    findABlogByID,
    updateABlog,
    deleteBlogById

};