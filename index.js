const express = require("express");
const app = express();

//settings
app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.send("Hello world from express");
});

//starting the server
app.listen(app.get("port"), () => {
  console.log(`Server running on port ${app.get("port")}`);
});
