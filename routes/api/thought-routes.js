const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction    
  } = require('../../controllers/thought-controller');


// /api/thoughts
router
  .route('/')
  .get(getAllThoughts)

// /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)

// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .put(updateThought)

// /api/thoughts/<userId>/<thoughtId>
router
  .route('/:userId/:thoughtId')
  .delete(removeThought)





// /api/thoughts/:thoughtId/reactions
router
  .route('/:thoughtId/reactions')
  .post(addReaction)

// /api/thoughts/:thoughtId/removeReaction/:reactionId
router
    .route('/:thoughtId/removeReaction/:reactionId')
    .delete(removeReaction);



module.exports = router;




