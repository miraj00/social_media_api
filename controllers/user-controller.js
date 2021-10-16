const { User } = require('../models');


const userController = {
    // GET all users
    getAllUsers(req, res) {
 






    },

    // GET a single user by its _id and populated thought and friend data
    getUserById({ params }, res) {
 






    },

    // create (POST) a new user
    createUser({ body }, res) {
       




    },





    // update (PUT) user by its _id
    updateUser({ params, body }, res) {






    },


    // delete user by its _id
    deleteUser({ params }, res) {
  





    },

//-------/api/users/:userId/friends/:friendId-------------------------------------------------
     
    // POST to add a new friend to a user's friend list
    addFriend({ params }, res) {
  




    },

    // delete to remove a friend from a user's friend list
    deleteFriend({ params }, res) {
    






    }
}

module.exports = userController;