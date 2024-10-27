const express =require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');



router.get('/blogs',blogController.getAllBlog);
router.post('/add-blog',blogController.addBlog);
//router.get('/bog/:blog_id',blogController.findABlog);

module.exports = router;