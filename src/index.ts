import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Vitae");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on PORT ${port}`));
