const Thought = require("../models/Thought");
const User = require("../models/User");
const Reaction = require("../models/Reaction");

module.exports ={
    async getThought(req,res){
        const thoughts = await Thought.find();
        res.send(thoughts);
    },
    async getThoughtbyID(req,res){
        const Idthought = await Thought.findOne({_id:req.params.thId});
        res.send(Idthought);
        console.log('got by id');
    },
    async newThought(req,res){
        const {thoughtText,username, userId} = req.body;

        const user = await User.findOne({_id:userId});
        const thought = await Thought.create({
            thoughtText,username
        });

        user.thoughts.push(thought._id);
        user.save();

        res.send(user);
    },
    async upThougth(req,res){
        const upthou = await Thought.findOneAndUpdate(
            {_id:req.params.thId},
            {$set: req.body},
            {new:true},
        )
        res.send(upthou);
    },
    async delThought(req,res){
        const delth = await Thought.findOneAndRemove({_id: req.params.thId});
        res.send(delth);
        console.log('thougth deleted');
    },

    //REACTIONS
    async reactTh(req,res){
        const reactThought = await Thought.findOneAndUpdate(
            {_id:req.params.thId},
            {$push: {reactions:req.body.reactionId}},
            {new:true},
        )
        res.sent(reactThought);
        console.log('react to thought');
    },
    async delThou(req,res){
        const delThought = await Thought.findOneAndUpdate(
            {_id:req.params.thId},
            {$pull: {reactions:req.body}},
            {new:true},
        )
        res.sent(delThought);
        console.log('react to thought');
    },


}