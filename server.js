const express = require('express');
const db_Mo = require('./config/connection');
const api_routes = require("./routes/api_router"); 


const PORT = process.env.PORT || 3004;
const app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//app.use("/api",api_routes);


db_Mo.once("open",()=>{
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
})

