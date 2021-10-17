const { Thought, User } = require('../models');


//---------- /api/thoughts ---------------------

const thoughtController = {
    // GET to get all thoughts
    getAllThoughts(req, res) {
      
        Thought.find({})
        .populate({
            path: 'reactions',
            select: '-__v'
        })
        .select('-__v')
        .sort({ _id: -1 })
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });

    },

     //  GET to get a single thought by its _id
    getThoughtById({ params }, res) {
    
        Thought.findOne({ _id: params.id })
        .populate({
            path: 'reactions',
            select: '-__v'
        })
        .select('-__v')
        .then(dbThoughtData => {
            if (!dbThoughtData) {
                res.status(404).json({ message: 'No thought found with this ID' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });

    },

    // POST to create a new thought
    addThought({ params, body }, res) {

        Thought.create(body)
        .then(({ _id }) => {
            return User.findOneAndUpdate(
                { _id: params.userId },
                { $push: { thoughts: _id } },
                { new: true, runValidators: true }
            );
        })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));

    },


     // PUT to update thought by its _id
    updateThought({ params, body }, res) {

        Thought.findOneAndUpdate({ _id: params.thoughtId }, body, { new: true, runValidators: true })
        .then(updatedThought => {
            if (!updatedThought) {
                return res.status(404).json({ message: 'No thought with this id!' });
            } 

            return res.json(updatedThought);
        })
        .catch(err => res.json(err));

    },
  
    // DELETE to remove a thought by its _id
    removeThought({ params }, res) {

        Thought.findOneAndDelete({ _id: params.thoughtId })
        .then(deletedThought => {
            if (!deletedThought) {
                return res.status(404).json({ message: 'No thought with this id!' });
            }
            return User.findOneAndUpdate(
                { _id: params.userId },
                { $pull: { thoughts: params.thoughtId } },
                { new: true }
            );
        })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));

    },

// --------- /api/thoughts/:thoughtId/reactions -----------

    // POST to create a reaction stored in a single thought's reactions array field
    addReaction({ params, body }, res) {

        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $push: { reactions: body } },
            { new: true, runValidators: true }
          )
              .then(dbThoughtData => {
                  if (!dbThoughtData) {
                      res.status(404).json({ message: 'No thought found with this id!' });
                      return;
                  }
                  res.json(dbThoughtData);
              })
              .catch(err => res.json(err));

    },

    // DELETE to pull and remove a reaction by the reaction's reactionId value
    removeReaction({ params }, res) {

        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $pull: { reactions: { reactionId: params.reactionId } } },
            { new: true }
        )
            .then(dbReactionData => res.json(dbReactionData))
            .catch(err => res.json(err));
    }

}


module.exports = thoughtController;