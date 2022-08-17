const {connect,connection} = require("mongoose");

connect("mongodb://localhost/SolialNetwork",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;