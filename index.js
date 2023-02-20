require("dotenv").config();
const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT;
const app = express();

// * listen for requests
app.listen(PORT, function () {
  console.log("Your app is listening on port " + PORT);
});

// * middlewares
app.use(cors({ optionsSuccessStatus: 200 })); // * some legacy browsers choke on 204
app.use(express.static("public")); // * http://expressjs.com/en/starter/static-files.html

// * endpoints
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});
app.get("/api/:date?", (req, res) => {
  const dateParam = req.params.date;

  // * if parameter is valid
  if (dateParam) {
    if (dateParam.match(/[a-z]/i)) {
      const date = new Date(dateParam);
      const utc = date.toUTCString();

      if (utc === "Invalid Date") {
        res.json({ error: "Invalid Date" });
      } else {
        res.json({ unix: date.getTime(), utc: utc });
      }
    } else {
      const newDate = new Date(Number(dateParam));
      res.json({ utc: Number(dateParam), utc: newDate.toUTCString() });
    }
  } else {
    res.json({ utc: "test" });
  }
});
app.get("/api/:date?", (req, res) => {
  const paramDate = req.params.date;
  const validDate = Date.parse(paramDate);

  // * if paramDate is not empty
  // * if paramDate is is not valid
  // * if paramDate is not a number
  if (paramDate && !validDate && !Number(paramDate)) {
    return res.json({
      error: "Invalid Date",
    });
  }

  // * if paramDate is not empty
  // * if not a valid date
  // * if in milliseconds
  if (paramDate && !validDate && Number(paramDate)) {
    const date = new Date(Number(paramDate));

    return res.json({
      unix: date.getTime(),
      utc: date.toUTCString(),
    });
  }

  // * if paramDate is empty
  if (!paramDate) {
    const dateToday = new Date();

    return res.json({
      unix: Date.now(),
      utc: dateToday.toUTCString(),
    });
  }

  // * if paramDate is valid date
  const date = new Date(paramDate);

  return res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});
