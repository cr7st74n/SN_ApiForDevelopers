const mondoose = require("mongoose");

mondoose.connect('mongodb://127.0.0.1:27017/AnyDatabase',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports = mondoose;