const { Thought, User } = require('../models');


//---------- /api/thoughts ---------------------

const thoughtController = {
    // GET to get all thoughts
    getAllThoughts(req, res) {
      





    },

     //  GET to get a single thought by its _id
    getThoughtById({ params }, res) {
    






    },

    // POST to create a new thought
    addThought({ params, body }, res) {








    },

     // PUT to update thought by its _id
    updateThought({ params, body }, res) {






    },

    // DELETE to remove a thought by its _id
    removeThought({ params }, res) {







},


// --------- /api/thoughts/:thoughtId/reactions -----------

    // POST to create a reaction stored in a single thought's reactions array field
    addReaction({ params, body }, res) {







    },



    // DELETE to pull and remove a reaction by the reaction's reactionId value
    removeReaction({ params }, res) {






    }

}


module.exports = thoughtController;