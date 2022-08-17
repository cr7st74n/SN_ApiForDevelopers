const {Schema,SchemaTypes} = require("mongoose");


const ReactionSchema = new Schema({
    reactionId:{
        type: SchemaTypes.ObjectId,
        default: SchemaTypes.ObjectId,
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