const { authorizeJwt } = require("../middleware");
const usersController = require("../controllers").users;

module.exports = app => {
    app.get("/users/:userId", [authorizeJwt.verifyToken], usersController.show);
    app.get("/users/", [authorizeJwt.verifyToken], usersController.index);
};