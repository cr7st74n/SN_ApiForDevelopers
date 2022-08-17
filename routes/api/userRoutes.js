const router = require("express").Router();

//Get methods from controllers
/************const { } */

//  api/user
router.route("/").get("").post();


// api/use/:userid

router.route("/:userid").get("")
.put()
.delete();

module.exports = router;