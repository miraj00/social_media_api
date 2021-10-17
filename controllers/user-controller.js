const { User } = require('../models');


// -----------   /api/users   -------------------------------
const userController = {
    // GET all users
    getAllUsers(req, res) {
 
        User.find({})
        .populate({
            path: 'thoughts',
            select: '-__v'
        })
        .populate({
            path: 'friends',
            select: '-__v'
        })
        .select('-__v')
        .sort({ _id: -1 })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });

    },

    // GET a single user by its _id and populated thought and friend data
    getUserById({ params }, res) {
 
        User.findOne({ _id: params.id })
        .populate({
            path: 'thoughts',
            select: '-__v'
        })
        .populate({
            path: 'friends',
            select: '-__v'
        })
        .select('-__v')
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this ID' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });

    },

    // create (POST) a new user
    createUser({ body }, res) {
       
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err));

    },

    // update (PUT) user by its _id
    updateUser({ params, body }, res) {

        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this ID' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));

    },

    // delete user by its _id
    deleteUser({ params }, res) {
  
        User.findOneAndDelete({ _id: params.id })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this ID' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));

    },

//-------/api/users/:userId/friends/:friendId-------------------------------------------------
     
    // POST to add a new friend to a user's friend list
    addFriend({ params }, res) {
  
        User.findOneAndUpdate(
            { _id: params.userId }, 
            { $push: { friends: params.friendId } },
            { new: true }
        )
        .then(dbUserData =>  {
            if (!dbUserData) {
                res.status(404).json({message: "There is no user with this ID"});
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));

    },

    // delete to remove a friend from a user's friend list
    deleteFriend({ params }, res) {
    
        User.findOneAndUpdate(
                { _id: params.userId },
                { $pull: {friends: params.friendId } },
                { new: true }
            )
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
   
        }

}

module.exports = userController;