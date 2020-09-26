const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();


//  Middleware 
app.use(bodyParser.json());
app.use(cors());

const posts = require("./routes/api/tasklist");
app.use("/api/tasklist" , posts);

const port = process.env.PORT || 5000;

app.listen(port , () => console.log("Sever started on port " + port));