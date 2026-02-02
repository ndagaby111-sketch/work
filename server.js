const express = require("express");
const app = express();
const path = require("path");

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); // serve HTML files

// contact form route
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("New Message:");
  console.log(name, email, message);

  res.send("Message received successfully!");
});

// start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/contact.html");
});
