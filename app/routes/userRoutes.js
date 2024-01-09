const usersController = require("../controllers").users;

module.exports = app => {
    app.get("/users/:userId", usersController.show);
    app.get("/users/", usersController.index);
};