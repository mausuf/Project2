// for now, this file is just my working code to call the apimedic diagnosis
// dependencies
var unirest = require("unirest");
// var symptoms;
// var symptomsInJSON = [];

// api call for list of symptoms
// result.body is a list of 270 symptom object in the form { "ID": 123,"Name":"symptom name"}
// this function returns symptoms as a list of JSON objects
function getSymptoms() {
  var namesAndIDs = [];
  var symptomNames = [];
  unirest
    .get(
      "https://priaid-symptom-checker-v1.p.rapidapi.com/symptoms?format=json&language=en-gb"
    )
    .header("X-RapidAPI-Host", "priaid-symptom-checker-v1.p.rapidapi.com")
    .header(
      "X-RapidAPI-Key",
      "GsGANnsOnXmshJzoa5dUUE3jZzqBp1b9PSWjsnQpFCRrO2j9cY"
    )
    .end(function(result) {
      result.body.forEach(function(e) {
        // console.log(e);
        namesAndIDs.push(e);
        symptomNames.push(e.Name);
        // symptomsInJSON.push(JSON.stringify(e));
      });
      console.log(namesAndIDs);
      console.log(namesAndIDs.slice(100, 199));
      console.log(namesAndIDs.slice(200, 271));
    });
}
getSymptoms();

module.exports = symptomNames;

// console.log("symptom names: ", symptomNames);

// $("#add-symptom").autocomplete({
//   source: symptomNames
// });
// now i am going to try and make a call with the diagnosis api
// this function takes in the array of symptom objects and
// converts it to a string that we can query
// "%5B" is "["
// "%2C" is ","
// "%5D" is "]"
// we can definitely
// function getSymptomString(arr) {
//   symptoms = "%5B";
//   for (var i = 0; i < arr.length - 1; i++) {
//     symptoms += arr[i].ID;
//     console.log(arr[i]);
//     symptoms += "%2C";
//   }
//   symptoms += arr[arr.length - 1].ID;
//   symptoms += "%5D";
//   console.log(symptoms);
//   getDiagnosis(symptoms);
// }

// function getDiagnosis(str) {
//   unirest
//     .get(
//       "https://priaid-symptom-checker-v1.p.rapidapi.com/diagnosis?symptoms=" +
//         str +
//         "&gender=male&year_of_birth=1984&language=en-gb"
//     )
//     .field("symptoms", 10)
//     .header("X-RapidAPI-Host", "priaid-symptom-checker-v1.p.rapidapi.com")
//     .header(
//       "X-RapidAPI-Key",
//       "GsGANnsOnXmshJzoa5dUUE3jZzqBp1b9PSWjsnQpFCRrO2j9cY"
//     )
//     .end(function(result) {
//       console.log(result.body);
//     });
// }
