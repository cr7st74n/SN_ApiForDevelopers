const router = require("express").Router();

//Get methods from controllers
const {
    getAllUsers
} = require("../../controllers/userControllers");

//  api/user
router.route("/").get(getAllUsers);


// api/use/:userid

// router.route("/:userid").get("")
// .put()
// .delete();

module.exports = router;