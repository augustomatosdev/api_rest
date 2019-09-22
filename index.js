const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//settings
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);

//middlewares
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

//routes
app.use("/api/movies", require("./routes/index"));

//starting the server
app.listen(app.get("port"), () => {
  console.log(`Server running on port ${app.get("port")}`);
});
