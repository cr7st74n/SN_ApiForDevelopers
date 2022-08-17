const {Schema,model, ObjectId} = require("mongoose");

const ReactionSchema = new Schema({
    reactionId:{
        // type: 
        // ***********
    },
    reactionBody:{
        type:String,
        required:true,
        max_length: 280,
    },
    username:{
        type:String,
        required:true,
    },
    createAt:{
        type:Date,
        default: Date.now,
    },
})

module.exports = ReactionSchema;