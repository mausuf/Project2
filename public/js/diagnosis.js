// for now, this file is just my working code to call the apimedic diagnosis
// dependencies
var unirest = require("unirest");
var symptomsArr;
var symptoms;

// api call for list of symptoms
// result.body returns list of 270 symptoms
// for testing purposes, i just picked 2 entries
// when calling our diagnosis api, i have found that any more than 2 entries might not get a result
unirest.get("https://priaid-symptom-checker-v1.p.rapidapi.com/symptoms?format=json&language=en-gb")
.header("X-RapidAPI-Host", "priaid-symptom-checker-v1.p.rapidapi.com")
.header("X-RapidAPI-Key", "GsGANnsOnXmshJzoa5dUUE3jZzqBp1b9PSWjsnQpFCRrO2j9cY")
.end(function (result) {
    symptomsArr = result.body.slice(3,5);
    getSymptomString(symptomsArr);
});

// now i am going to try and make a call with the diagnosis api
// this function takes in the array of symptom objects and 
// converts it to a string that we can query
// "%5B" is "["
// "%2C" is ","
// "%5D" is "]"
// we can definitely
function getSymptomString(arr){
    symptoms = "%5B";
    for (var i = 0; i < arr.length - 1; i++){
        symptoms += arr[i].ID;
        console.log(arr[i]);
        symptoms += "%2C"
    };
    symptoms += arr[arr.length-1].ID;
    symptoms += "%5D";
    console.log(symptoms);
    getDiagnosis(symptoms);
};

function getDiagnosis(str){
    unirest.get("https://priaid-symptom-checker-v1.p.rapidapi.com/diagnosis?symptoms="+str+"&gender=male&year_of_birth=1984&language=en-gb")
    .field("symptoms", 10)
    .header("X-RapidAPI-Host", "priaid-symptom-checker-v1.p.rapidapi.com")
    .header("X-RapidAPI-Key", "GsGANnsOnXmshJzoa5dUUE3jZzqBp1b9PSWjsnQpFCRrO2j9cY")
    .end(function (result) {
        console.log(result.body);
    });
}