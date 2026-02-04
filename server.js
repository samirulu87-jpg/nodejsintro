const express = require("express");
const app = express();
const PORT = 3000;

app.use("/", (req, res) => {
    res.send("Hello world!");
});

app.listen(3000, () => {
console.log(`Test server running on port: ${PORT}`);
});