const router = require("express").Router();

const {
    getThought,
    getThoughtbyID,
    newThought,
    upThougth,
    delThought,
    reactTh,
    delThou,
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
.post(reactTh)
.delete(delThou);



module.exports = router;