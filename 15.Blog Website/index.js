import express from "express";
import { nanoid } from "nanoid";

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/create-blog", (req, res) => {
  res.render("create-blog");
});
const blogs = [];
app.post("/create-blog", (req, res) => {
  const { title, content, image } = req.body;
  // Here you would typically handle the blog creation logic
  blogs.push({ id: nanoid(), title, content, image });
  res.redirect("/blogs");
});
app.get("/blogs", (req, res) => {
  // Here you would typically fetch the list of blogs from a database
  res.render("blogs", { blogs });
});
app.post("/delete-post/:id", (req, res) => {
  const { id } = req.params;
  // Here you would typically handle the blog deletion logic
  const index = blogs.findIndex((blog) => blog.id === id);
  if (index !== -1) {
    blogs.splice(index, 1);
  }
  res.redirect("/blogs");
});
app.get("/blogs/:id", (req, res) => {
  const { id } = req.params;
  const blog = blogs.find((blog) => blog.id === id);
  if (!blog) {
    return res.status(404).send("Blog not found");
  }
  res.render("blog-details", { blog });
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
