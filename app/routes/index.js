module.exports = app => {
    require("../routes/authRoutes")(app);
    require("../routes/userRoutes")(app);
};