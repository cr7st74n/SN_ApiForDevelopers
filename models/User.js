const {Schema, model, SchemaType} = require("mongoose");
const {isEmail} = require("validator")

const UserSchema = new Schema({
    username:{
        type:String,
        unique: true,
        required:true,
        trim:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        validate:[isEmail,"invalid email"]
    },
    thoughts:[{
        type: SchemaType.ObjectId,
        ref: 'Thought'
    }],
    friends:[{
        type:SchemaType.ObjectId,
        ref: "User"
    }]
},{
    toJSON:{
        virtuals:true
    }
});

UserSchema.virtual("friendCount").get(function(){
    return this.friends.length;
})

const User = model("User", UserSchema);

module.exports = User;