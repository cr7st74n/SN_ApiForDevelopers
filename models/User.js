const {Schema, Model} = require("mongoose");

const userSchema = new Schema({ //bluePrint
    email:{
        type: String,
        required:true
    },
    password:{
        type:String,
        required: true,
        min:6
    }
});

const User = new Model("user",userSchema);
//const User = new Model("user",userSchema);

module.exports = User;