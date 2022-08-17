const {Schema, model} = require("mongoose");
const reactionSchema = require("./Reaction");

const ThoughtSchema = new Schema({
    thoughtText:{
        type:String,
        required:true,
        min_length:1,
        max_length:280,
    },
    createAt:{
        type:Date,
        required:true,
        default: Date.now,
    },
    username:{
        type:String,
        required:true
    },
    reactions:[reactionSchema],
},{
    toJSON:{
        virtuals:true,
    },
});

ThoughtSchema.virtual("reactionCount").get(function(){
    return this.reactions.length;
})


const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;