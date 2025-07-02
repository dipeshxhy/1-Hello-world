import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  console.log(req.body);
  res.sendFile("public/index.html");
});
app.post("/submit", (req, res) => {
  console.log(req.body);
  const { street, pet } = req.body;
  const message = `${street}${pet}✌️`;
  res.send(
    `<h1>Your Band Name is:</h1> <p style="font-weight: bold;">${message}</p>`
  );
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
