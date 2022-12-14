const router = require("express").Router();

const {
    getThought,
    getThoughtbyID,
    newThought,
    upThougth,
    delThought,
    reactTh,
    delThou,
    ShowReactions,
} = require("../../controllers/thoughtControllers");


router.route("/").get(getThought)
.post(newThought)

// api/thought/:thoughtid
router.route("/:thId")
.get(getThoughtbyID)
.put(upThougth)
.delete(delThought);

// /api/thoughts/:thoughtId/reactions
router.route("/:thId/reactions")
.post(reactTh)
.delete(delThou)

// router.route("/ShowReactions")
// .get(ShowReactions);



module.exports = router;