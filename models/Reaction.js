const {Schema, Types} = require("mongoose");


const ReactionSchema = new Schema({
    reactionId:{
        type: Types.ObjectId,
        default: ()=> new Types.ObjectId()
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
        get:(date) => timeSince(date),
    },
})

module.exports = ReactionSchema;