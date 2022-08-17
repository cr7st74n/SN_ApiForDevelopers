const User = require("../models/User");

module.exports ={
    async getAllUsers(req, res){
        const users = await User.find();
        console.log('show users!');
        res.send(users)
    },
};