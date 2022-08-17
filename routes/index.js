const router = require("express").Router();
const api_router = require("./api/index");

router.use("/api", api_router);

router.use((req,res)=>{res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Error in your page</title>
</head>
<body>
    <h1>Hello !</h1>

    <h3>This is a kindly reminder that you are in the wrong route.
    </h3>
    
</body>
</html>`)});

module.exports = router;

