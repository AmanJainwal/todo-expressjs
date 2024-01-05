const express = require("express");
const path = require("node:path");
const db = require("./config/mongoose");
const Contact = require("./modals/contacts");
const app = express();
const port = 8000;

//  set up view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("asstets"));

var contactList = [
  {
    mobile: 1001111,

    name: "ijrnetGatewayDevice.LANDevice.1.Hosts.HostNumberOfEntries",
  },
  {
    mobile: 1001112,
    name: "InternetGatewayDevice.LANDevice.1.Hosts.HostNumberOfEntries",
  },
  {
    mobile: 1001215,

    name: "sdfhkarnetGatewayDevice.LANDevice.1.Hosts.HostNumberOfEntries",
  },
];

app.get("/", function (req, res) {
  Contact.find({})
    .then((result) => {
      return res.render("home", {
        name: "Aman jainwal",
        title: "home",
        contact_list: result,
      });
    })
    .catch((err) => console.log("error when gettign data", err));
});

app.get("/profile", function (req, res) {
  res.send(`<h1>profile page</h1>`);
});

app.post("/create-contact", function (req, res) {
  Contact.create({
    name: req.body.name,
    phone: req.body.mobile,
  })
    .then((newContact) => {})
    .catch((err) => {
      console.log("there is an when we create contact please check");
      return;
    });
  return res.redirect("back");
});

app.get("/delete-contact", function (req, res) {
  let id = req.query.id;
  // let newList = [];

  Contact.findByIdAndDelete(id)
    .then((result) => {
      console.log("Succesfully deleted");
      return res.redirect("back");
    })
    .catch((err) => console.log("error when we delete data", err));
  // let index = contactList.findIndex((item) => item.mobile == phone);
});

app.listen(port, (err) => {
  if (err) {
    console.log("there is an error");
    return;
  }
  console.log(`server is running on ${port}`);
});
