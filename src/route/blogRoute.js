const express =require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');



router.get('/blogs',blogController.getAllBlog);
router.post('/add-blog',blogController.addBlog);
router.get('/blog/:id',blogController.findABlog);
router.patch('/blog/update/:id',blogController.updateBlog);
router.delete('/blog/delete/:id',blogController.deleteBlog);


module.exports = router;