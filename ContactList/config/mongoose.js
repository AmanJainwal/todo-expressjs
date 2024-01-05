const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/contacts_list");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "error in connecting db"));
// once conection is established

db.once("open", function () {
console.log("successfully connected to db");
});

