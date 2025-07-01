import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});
app.post("/register", (req, res) => {
  res.sendStatus(201);
});
app.put("/users/dipesh", (req, res) => {
  res.sendStatus(200);
});
app.patch("/users/dipesh", (req, res) => {
  res.sendStatus(200);
});
app.delete("/users/dipesh", (req, res) => {
  res.sendStatus(204);
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Dipesh</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
