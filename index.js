const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const methodOverride = require("method-override");
const {v4:uuidv4}=require('uuid');

app.use(express.urlencoded({ extended: true }));
app.set("view enging", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"))

let posts = [
    {
        id: uuidv4(),
        username: "linusTorvalds ",
        content: "Talk is cheap, show me the code."
    },
    {
        id: uuidv4(),
        username: "timBernersLee",
        content: "You affect the world by what you browse."
    },
    {
        id: uuidv4(),
        username: "satoshiNakamoto",
        content: " If you don't believe me or don't get it, I don't have time to try to convince you, sorry."
    },
]

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts })
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs", )
})

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect("/posts");
})

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    res.redirect("/posts");
})

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { post });
})
app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;    
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts"); 
})

app.listen(port, () => {
    console.log(`listening to port ${port}`);
})