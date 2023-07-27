const express = require('express');
const router = express.Router();
// const Commentlist = require('../models/commentlist.model');
// const Videolist = require('../models/videolist.model');
// const Productlist = require('../models/productlist.model');
const {videolistController,commentlistController,commentpostController,productlistController} = require('../controllers/tokoplay.controller');

//Get all video list from DB via API
router.get('/video', videolistController);

//Get all product list from DB via API
router.get('/product', productlistController);

//Get all comment list from DB via API
router.get('/comment', commentlistController);

//Post or Send comment to DB via API
router.post('/comment', commentpostController);


// router.get('/video', async(req,res)  => {
//   try{
//     const video = await Videolist.find();
//     res.json(video);
//   }
//   catch(error){
//     res.status(500).json({message: error.message});
//   }
// });

// router.get('/comment', async(req,res)  => {
//   try{
//     const comment = await Commentlist.find();
//     res.json(comment);
//   }
//   catch(error){
//     res.status(500).json({message: error.message});
//   }
// });

// router.post('/comment', (req, res) => {
//   const comment = new Commentlist({
//     username : req.body.username,
//     comment : req.body.comment,
//     timestamps : new Date(),
//     videoId : req.body.videoId
//   })

//   try {
//     const commentToSave = comment.save();
//     res.status(200).json(commentToSave);
//   }
//   catch (error) {
//     res.status(400).json({message : error.message})
//   }
// });

// router.get('/product', async(req,res)  => {
//   try{
//     const product = await Productlist.find();
//     res.json(product);
//   }
//   catch(error){
//     res.status(500).json({message: error.message});
//   }
// });

module.exports = router;