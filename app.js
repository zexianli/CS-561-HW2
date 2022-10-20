const express = require("express");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 3000;

// view engine setup
app.use(express.json());

app.get("/data/2.5/weather", (req, res) => {
  // axios
  //   .get(
  //     "https://api.openweathermap.org/data/2.5/weather?lat=44.5646&lon=23.2620&appid=53ee70732e4e2ccd27ab8fa6d2717e0d"
  //   )
  //   .then((result) => {
  //     res.status(200).send(result.data);
  //   })
  //   .catch((err) => {
  //     console.log("There was an error");
  //   });

  let json = {
    coord: {
      lon: -123.262,
      lat: 44.5646,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01d",
      },
    ],
    base: "stations",
    main: {
      temp: 78.13,
      feels_like: 77.52,
      temp_min: 75.99,
      temp_max: 80.2,
      pressure: 1013,
      humidity: 40,
    },
    visibility: 10000,
    wind: {
      speed: 8.99,
      deg: 20,
      gust: 11.99,
    },
    clouds: {
      all: 0,
    },
    dt: 1665782178,
    sys: {
      type: 2,
      id: 2005452,
      country: "US",
      sunrise: 1665757615,
      sunset: 1665797445,
    },
    timezone: -25200,
    id: 5720727,
    name: "Corvallis",
    cod: 200,
  };
  res.status(200).send(json);
});

app.listen(port, () => {
  console.log("Listening on the port:", port);
});
