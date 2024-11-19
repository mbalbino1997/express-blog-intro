const express = require("express");
const app = express();
const port = 3000;
const list = require("./list.js")
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <img src="${list[0].img}" alt="">
    </body>
    </html>`)
})

app.get("/bacheca", (req, res) => {
    const newList = {
        count: list.length + 1,
        posts: list

    }
    res.json(newList)
})


const server = app.listen(port, () => {
    console.log(`server in ascolto sula porta ${port}`)
})


process.on('SIGINT', () => {
    server.close();
    console.log('Exit Server');
    process.exit(0);
});