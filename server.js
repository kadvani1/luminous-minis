const express = require("express");
const path = require("path");


const app = express();
const port = process.env.PORT || 3001;

app.use('/static', express.static(path.join(__dirname, './dist')))

app.use("/", (req, res) => {
    res.status(200).sendfile(path.join(__dirname, "./dist/index.html"));
});

app.listen(port, () => {
    console.log("application is running on port " + port);
});