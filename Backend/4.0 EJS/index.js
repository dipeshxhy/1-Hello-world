import express from "express";

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  const currentDate = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  const today = currentDate.getDay();

  let type = "a weekday";
  let adv = "it's time to work hard";
  if (today === 0 || today === 6) {
    type = "the weekend";
    adv = "it's time to have fun";
  }
  res.render("index.ejs", { weekDay: type, advice: adv, Date: formattedDate });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
