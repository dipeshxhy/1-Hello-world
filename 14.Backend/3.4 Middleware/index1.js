import { dirname } from "path";
import { fileURLToPath } from "url";

import express from "express";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000;

app.get("/", (req, res) => {
  console.log(req.body);
  // res.sendFile(__dirname + "/public/index.html");
});
app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send("Form submitted successfully!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
