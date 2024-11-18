const express = require("express");
const app = express();
const port = 3000;
const list = require("./list.js")

app.listen(port, () => {
    console.log(`server in ascolto sula porta ${port}`)
})
app.get("/", (req, res) => {
    res.send("server del mio bog")
})

app.get("/bacheca", (req, res) => {
    const newList = {
        count: list.length + 1,
        posts: list

    }
    res.json(newList)
})

