const User = require("../models/User");
const Thought = require("../models/Thought");

module.exports ={
    getAllUsers(req, res){
        User.find()
        .then(async(users)=>{
            res.json(users)
        })
    }
}