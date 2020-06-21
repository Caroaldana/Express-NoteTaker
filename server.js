// DEPENDENCIES
const express = require("express");

// EXPRESS CONFIGURATION
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// ROUTER
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

// LISTENER
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});