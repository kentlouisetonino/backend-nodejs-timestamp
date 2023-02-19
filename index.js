// index.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

// * [project url]/api/2015-12-25
app.get("/api/:date", (req, res) => {
  const dateParam = req.params.date;

  if (dateParam.includes("-")) {
    const date = new Date(dateParam);
    const unixTimestamp = new date.getTime() / 1000;
    res.json({ unix: unixTimestamp, utc: date.toUTCString() });
  } else {
    const date = new Date(dateParam * 1000);
    const utcDate = date.toUTCString();

    if (utcDate === "Invalid Date") {
      res.send({ error: "Invalid Date" });
    } else {
      res.json({ unix: dateParam, utc: utcDate });
    }
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
