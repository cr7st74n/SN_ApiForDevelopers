const router = require("express").Router();

//*************get my controllers */


router.route("/").get("").post() // create a thought

// api/thought/:thoughtid

router.route("/:thoughtid").get()
.put()
.delete();

module.exports = router;