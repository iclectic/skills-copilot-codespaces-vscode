// Create web server using express
// Create router for this web server
// Create a sub-route for the comments

// Import the express module
const express = require('express');
const router = express.Router();

// Import the comments controller
const commentsController = require('../controllers/comments');

// Handle the GET request at the /comments route
router.get('/', commentsController.getAllComments);

// Handle the POST request at the /comments route
router.post('/', commentsController.createComment);

// Handle the GET request at the /comments/:id route
router.get('/:id', commentsController.getCommentById);

// Handle the PUT request at the /comments/:id route
router.put('/:id', commentsController.updateComment);

// Handle the DELETE request at the /comments/:id route
router.delete('/:id', commentsController.deleteComment);

// Export the router
module.exports = router;

