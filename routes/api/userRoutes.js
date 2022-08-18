const router = require("express").Router();

//Get methods from controllers
const {
    getAllUsers,
    getUserById,
    newUser,
    updateUser,
    delUser,
    addFriend,
    delFriend
} = require("../../controllers/userControllers");
//  api/user
router.route("/").get(getAllUsers)
.post(newUser);

// api/use/:userid
router.route("/:userid").get(getUserById)
.put(updateUser)
.delete(delUser);

//routes to our Friend 
router.route("/:userid/friends/:friendId")
.post(addFriend)
.delete(delFriend);

module.exports = router;