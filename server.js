const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

var corsOptions = {
    origin: `http://localhost:${process.env.PORT}`
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

require("./app/routes")(app);

// simple route
app.get("/", (request, response) => {
    response.json({ message: "products database application." });
});

// set port, listen for requests
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}.`);
});