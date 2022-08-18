const router = require("express").Router();

const {
    getThought,
    getThoughtbyID,
    newThought,
    upThougth,
    delThought,
} = require("../../controllers/thoughtControllers");


router.route("/").get(getThought)
.get(getThoughtbyID)
.post(newThought)

// api/thought/:thoughtid
router.route("/:thId")
.put(upThougth)
.delete(delThought);

// /api/thoughts/:thoughtId/reactions
router.route("/:thId/reactions")



module.exports = router;