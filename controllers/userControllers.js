const User = require("../models/User");

module.exports ={
    //Get all user 
    async getAllUsers(req, res){
        const users = await User.find();
        console.log('show users!');
        res.send(users)
    },
    //Get one user
    //**********************POPULATED */
    async getUserById(req, res){
        const user = await User.findOne({_id:req.params.userid});
        res.send(user);
    },
    //new User
    async newUser(req,res){
        const newUser = await User.create(req.body);
        res.send(newUser);
        console.log('new user');
    },
    //Update User by Id
    async updateUser(req,res){
        const upUser = await User.findOneAndUpdate(
        {_id:req.params.userid},
        {$set:req.body},
        {new:true}
        );
        res.send(upUser);
        console.log('User Updated');
    },
    //delete User
    async delUser(req,res){
        const deluser = await User.findOneAndDelete({_id:req.params.userid});
        res.send(deluser);
        console.log('User Deleted');
    },
    //USER FRIEND LIST 
    // adding a frind 

    async addFriend(req,res){
        const friendreq = await User.findOneAndUpdate(
            {_id:req.params.userid},
            {$push: {friends:req.params.friendId}},
            {new:true}
        )
        res.send(friendreq);
        console.log('Friend Added');
    },
    // DELETE Friends
    async delFriend(req,res){
        const friendreq = await User.findOneAndUpdate(
            {_id:req.params.userid},
            {$pull: {friends:req.params.friendId}},
            {new:true}
        )
        res.send(friendreq);
        console.log('Friend deleted');
    },

};