var unirest = require("unirest");

unirest
  .get("https://rapidapi.p.rapidapi.com/issues/11/info?language=en-gb")
  .header("X-RapidAPI-Host", "priaid-symptom-checker-v1.p.rapidapi.com")
  .header(
    "X-RapidAPI-Key",
    "GsGANnsOnXmshJzoa5dUUE3jZzqBp1b9PSWjsnQpFCRrO2j9cY"
  )
  .end(function(result) {
    console.log(result.body);
  });
