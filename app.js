const express = require("express");
const cors = require("cors");
const contactsRoutes = require("./app/routes/contact.route.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactsRoutes);

app.get("/",(req, res) => {
    res.json({ message: "Welcome to contact book application. " });
});
module.exports = app;