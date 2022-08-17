const Thought = require("../models/Thought");

module.exports ={
    async getThought(req,res){
        const thought = await Thought.find()
    }
}