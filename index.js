const express = require("express");
const IndexRouter = require("./src/routs/IndexRouter")
const app = express();

app.use(express.static("client"));
app.use("/", IndexRouter);

app.listen(process.env.PORT);