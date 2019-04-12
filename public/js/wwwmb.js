// array of symptom names for our autocomplete function to run through
$(function() {
  console.log("linked");
  var symptoms = [
    "Abdominal guarding",
    "Abdominal pain",
    "Abdominal pain associated with menstruation",
    "Absence of a pulse",
    "Aggressiveness",
    "Agitation",
    "Ankle deformity",
    "Ankle swelling",
    "Anxiety",
    "Arm swelling",
    "Back deformity",
    "Back pain",
    "Black stools",
    "Blackening of vision",
    "Blackhead",
    "Bleeding from vagina",
    "Bleeding in the conjunctiva of the eye",
    "Bloated feeling in the stomach",
    "Blood in stool",
    "Bloody cough",
    "Blue colored skin",
    "Blue spot on skin",
    "Blurred vision",
    "Bold area among hair on the head",
    "Bone fracture",
    "Breathing-related pains",
    "Brittleness of nails",
    "Bulging abdominal wall",
    "Burning eyes",
    "Burning in the throat",
    "Burning nose",
    "Burning sensation when urinating",
    "Changes in the nails",
    "Cheek swelling",
    "Chest pain",
    "Chest tightness",
    "Chills",
    "Coarsening of the skin structure",
    "Cold feet",
    "Cold hands",
    "Cold sweats",
    "Cough",
    "Cough with sputum",
    "Cramps",
    "Cravings",
    "Crusting",
    "Curvature of the spine",
    "Dark urine",
    "Decreased urine stream",
    "Delayed start to urination",
    "Diarrhea",
    "Difficult defecation",
    "Difficulty in finding words",
    "Difficulty in speaking",
    "Difficulty in swallowing",
    "Difficulty to concentrate",
    "Discoloration of nails",
    "Disorientation regarding time or place",
    "Distended abdomen",
    "Dizziness",
    "Double vision",
    "Double vision, acute-onset",
    "Dribbling after urination",
    "Drooping eyelid",
    "Drowsiness",
    "Dry eyes",
    "Dry mouth",
    "Dry skin",
    "Earache",
    "Early satiety",
    "Eye blinking",
    "Eye pain",
    "Eye redness",
    "Eyelid swelling",
    "Eyelids sticking together",
    "Face pain",
    "Facial paralysis",
    "Facial swelling",
    "Fast, deepened breathing",
    "Fatty defecation",
    "Feeling faint",
    "Feeling of foreign body in the eye",
    "Feeling of pressure in the ear",
    "Feeling of residual urine",
    "Feeling of tension in the legs",
    "Fever",
    "Finger deformity",
    "Flaking skin",
    "Flaking skin on the head",
    "Flatulence",
    "Foot pain",
    "Foot swelling",
    "Forgetfulness",
    "Formation of blisters on a skin area",
    "Foul smelling defecation",
    "Frequent urination",
    "Genital warts",
    "Hair loss",
    "Hallucination",
    "Halo",
    "Hand pain",
    "Hand swelling",
    "Hard defecation",
    "Hardening of the skin",
    "Headache",
    "Hearing loss",
    "Heart murmur",
    "Heartburn",
    "Hiccups",
    "Hip deformity",
    "Hip pain",
    "Hoarseness",
    "Hot flushes",
    "Immobilization",
    "Impaired balance",
    "Impaired hearing",
    "Impaired light-dark adaptation",
    "Impairment of male potency",
    "Incomplete defecation",
    "Increased appetite",
    "Increased drive",
    "Increased salivation",
    "Increased thirst",
    "Increased touch sensitivity",
    "Increased urine quantity",
    "Involuntary movements",
    "Irregular heartbeat",
    "Irregular mole",
    "Itching eyes",
    "Itching in the ear",
    "Itching in the mouth or throat",
    "Itching in the nose",
    "Itching of skin",
    "Itching of the anus",
    "Itching on head",
    "Itching or burning in the genital area",
    "Joint effusion",
    "Joint instability",
    "Joint pain",
    "Joint redness",
    "Joint swelling",
    "Joylessness",
    "Knee deformity",
    "Knee pain",
    "Leg cramps",
    "Leg swelling",
    "Leg ulcer",
    "Less than 3 defecations per week",
    "Limited mobility of the ankle",
    "Limited mobility of the back",
    "Limited mobility of the fingers",
    "Limited mobility of the hip",
    "Limited mobility of the leg",
    "Lip swelling",
    "Lockjaw",
    "Loss of eye lashes",
    "Lower abdominal pain",
    "Lower-back pain",
    "Lump in the breast",
    "Malposition of the testicles",
    "Marked veins",
    "Memory gap",
    "Menstruation disorder",
    "Missed period",
    "Moist and softened skin",
    "Mood swings",
    "Morning stiffness",
    "Mouth pain",
    "Mouth ulcers",
    "Muscle pain",
    "Muscle stiffness",
    "Muscle weakness",
    "Muscular atrophy in the leg",
    "Muscular atrophy of the arm",
    "Muscular weakness in the arm",
    "Muscular weakness in the leg",
    "Nausea",
    "Neck pain",
    "Neck stiffness",
    "Nervousness",
    "Night cough",
    "Night sweats",
    "Non-healing skin wound",
    "Nosebleed",
    "Numbness in the arm",
    "Numbness in the leg",
    "Numbness of the hands",
    "Oversensitivity to light",
    "Overweight",
    "Pain in the bones",
    "Pain in the calves",
    "Pain in the limbs",
    "Pain of the anus",
    "Pain on swallowing",
    "Pain radiating to the arm",
    "Pain radiating to the leg",
    "Pain when chewing",
    "Painful defecation",
    "Painful urination",
    "Pallor",
    "Palpitations",
    "Paralysis",
    "Physical inactivity",
    "Problems with the sense of touch in the face",
    "Problems with the sense of touch in the feet",
    "Protrusion of the eyes",
    "Purulent discharge from the urethra",
    "Purulent discharge from the vagina",
    "Rebound tenderness",
    "Reduced appetite",
    "Ringing in the ear",
    "Runny nose",
    "Sadness",
    "Scalp redness",
    "Scar",
    "Sensitivity to cold",
    "Sensitivity to glare",
    "Sensitivity to noise",
    "Shiny red tongue",
    "Shortness of breath",
    "Side pain",
    "Skin lesion",
    "Skin nodules",
    "Skin rash",
    "Skin redness",
    "Skin thickening",
    "Skin wheal",
    "Sleepiness with spontaneous falling asleep",
    "Sleeplessness",
    "Sneezing",
    "Sore throat",
    "Sputum",
    "Stomach burning",
    "Stress-related leg pain",
    "Stuffy nose",
    "Sweating",
    "Swelling in the genital area",
    "Swelling of the testicles",
    "Swollen glands in the armpit",
    "Swollen glands in the groin",
    "Swollen glands in the neck",
    "Tears",
    "Testicular pain",
    "Tic",
    "Tingling",
    "Tiredness",
    "Toe deformity",
    "Toe swelling",
    "Tongue burning",
    "Tongue swelling",
    "Tremor at rest",
    "Tremor on movement",
    "Trouble understanding speech",
    "Unconsciousness, short",
    "Uncontrolled defecation",
    "Underweight",
    "Urge to urinate",
    "Urination during the night",
    "Vision impairment",
    "Vision impairment for far objects",
    "Vision impairment for near objects",
    "Visual field loss",
    "Vomiting",
    "Vomiting blood",
    "Weakness or numbness on right or left side of body",
    "Weight gain",
    "Weight loss",
    "Wheezing",
    "Wound",
    "Yellow colored skin",
    "Yellowish discoloration of the white part of the eye"
  ];

  var namesAndIDs = [
    { ID: 188, Name: "Abdominal guarding" },
    { ID: 10, Name: "Abdominal pain" },
    { ID: 223, Name: "Abdominal pain associated with menstruation" },
    { ID: 984, Name: "Absence of a pulse" },
    { ID: 974, Name: "Aggressiveness" },
    { ID: 981, Name: "Agitation" },
    { ID: 996, Name: "Ankle deformity" },
    { ID: 147, Name: "Ankle swelling" },
    { ID: 238, Name: "Anxiety" },
    { ID: 971, Name: "Arm swelling" },
    { ID: 998, Name: "Back deformity" },
    { ID: 104, Name: "Back pain" },
    { ID: 180, Name: "Black stools" },
    { ID: 57, Name: "Blackening of vision" },
    { ID: 24, Name: "Blackhead" },
    { ID: 284, Name: "Bleeding from vagina" },
    { ID: 176, Name: "Bleeding in the conjunctiva of the eye" },
    { ID: 48, Name: "Bloated feeling in the stomach" },
    { ID: 190, Name: "Blood in stool" },
    { ID: 233, Name: "Bloody cough" },
    { ID: 991, Name: "Blue colored skin" },
    { ID: 240, Name: "Blue spot on skin" },
    { ID: 77, Name: "Blurred vision" },
    { ID: 239, Name: "Bold area among hair on the head" },
    { ID: 156, Name: "Bone fracture" },
    { ID: 250, Name: "Breathing-related pains" },
    { ID: 979, Name: "Brittleness of nails" },
    { ID: 192, Name: "Bulging abdominal wall" },
    { ID: 75, Name: "Burning eyes" },
    { ID: 46, Name: "Burning in the throat" },
    { ID: 288, Name: "Burning nose" },
    { ID: 107, Name: "Burning sensation when urinating" },
    { ID: 91, Name: "Changes in the nails" },
    { ID: 170, Name: "Cheek swelling" },
    { ID: 17, Name: "Chest pain" },
    { ID: 31, Name: "Chest tightness" },
    { ID: 175, Name: "Chills" },
    { ID: 218, Name: "Coarsening of the skin structure" },
    { ID: 89, Name: "Cold feet" },
    { ID: 978, Name: "Cold hands" },
    { ID: 139, Name: "Cold sweats" },
    { ID: 15, Name: "Cough" },
    { ID: 228, Name: "Cough with sputum" },
    { ID: 94, Name: "Cramps" },
    { ID: 49, Name: "Cravings" },
    { ID: 134, Name: "Crusting" },
    { ID: 260, Name: "Curvature of the spine" },
    { ID: 108, Name: "Dark urine" },
    { ID: 163, Name: "Decreased urine stream" },
    { ID: 165, Name: "Delayed start to urination" },
    { ID: 50, Name: "Diarrhea" },
    { ID: 79, Name: "Difficult defecation" },
    { ID: 126, Name: "Difficulty in finding words" },
    { ID: 98, Name: "Difficulty in speaking" },
    { ID: 93, Name: "Difficulty in swallowing" },
    { ID: 53, Name: "Difficulty to concentrate" },
    { ID: 216, Name: "Discoloration of nails" },
    { ID: 128, Name: "Disorientation regarding time or place" },
    { ID: 989, Name: "Distended abdomen" },
    { ID: 207, Name: "Dizziness" },
    { ID: 71, Name: "Double vision" },
    { ID: 270, Name: "Double vision, acute-onset" },
    { ID: 162, Name: "Dribbling after urination" },
    { ID: 244, Name: "Drooping eyelid" },
    { ID: 43, Name: "Drowsiness" },
    { ID: 273, Name: "Dry eyes" },
    { ID: 272, Name: "Dry mouth" },
    { ID: 151, Name: "Dry skin" },
    { ID: 87, Name: "Earache" },
    { ID: 92, Name: "Early satiety" },
    { ID: 242, Name: "Eye blinking" },
    { ID: 287, Name: "Eye pain" },
    { ID: 33, Name: "Eye redness" },
    { ID: 208, Name: "Eyelid swelling" },
    { ID: 209, Name: "Eyelids sticking together" },
    { ID: 219, Name: "Face pain" },
    { ID: 246, Name: "Facial paralysis" },
    { ID: 970, Name: "Facial swelling" },
    { ID: 153, Name: "Fast, deepened breathing" },
    { ID: 83, Name: "Fatty defecation" },
    { ID: 982, Name: "Feeling faint" },
    { ID: 76, Name: "Feeling of foreign body in the eye" },
    { ID: 86, Name: "Feeling of pressure in the ear" },
    { ID: 164, Name: "Feeling of residual urine" },
    { ID: 145, Name: "Feeling of tension in the legs" },
    { ID: 11, Name: "Fever" },
    { ID: 995, Name: "Finger deformity" },
    { ID: 214, Name: "Flaking skin" },
    { ID: 245, Name: "Flaking skin on the head" },
    { ID: 154, Name: "Flatulence" },
    { ID: 255, Name: "Foot pain" },
    { ID: 1002, Name: "Foot swelling" },
    { ID: 125, Name: "Forgetfulness" },
    { ID: 62, Name: "Formation of blisters on a skin area" },
    { ID: 84, Name: "Foul smelling defecation" },
    { ID: 59, Name: "Frequent urination" },
    { ID: 110, Name: "Genital warts" },
    { ID: 152, Name: "Hair loss" },
    { ID: 976, Name: "Hallucination" },
    { ID: 72, Name: "Halo" },
    { ID: 186, Name: "Hand pain" },
    { ID: 148, Name: "Hand swelling" },
    { ID: 80, Name: "Hard defecation" },
    { ID: 184, Name: "Hardening of the skin" },
    { ID: 9, Name: "Headache" },
    { ID: 206, Name: "Hearing loss" },
    { ID: 985, Name: "Heart murmur" },
    { ID: 45, Name: "Heartburn" },
    { ID: 122, Name: "Hiccups" },
    { ID: 993, Name: "Hip deformity" },
    { ID: 196, Name: "Hip pain" },
    { ID: 121, Name: "Hoarseness" },
    { ID: 149, Name: "Hot flushes" },
    { ID: 197, Name: "Immobilization" },
    { ID: 120, Name: "Impaired balance" },
    { ID: 90, Name: "Impaired hearing" },
    { ID: 70, Name: "Impaired light-dark adaptation" },
    { ID: 113, Name: "Impairment of male potency" },
    { ID: 81, Name: "Incomplete defecation" },
    { ID: 131, Name: "Increased appetite" },
    { ID: 262, Name: "Increased drive" },
    { ID: 204, Name: "Increased salivation" },
    { ID: 40, Name: "Increased thirst" },
    { ID: 220, Name: "Increased touch sensitivity" },
    { ID: 39, Name: "Increased urine quantity" },
    { ID: 257, Name: "Involuntary movements" },
    { ID: 986, Name: "Irregular heartbeat" },
    { ID: 65, Name: "Irregular mole" },
    { ID: 73, Name: "Itching eyes" },
    { ID: 88, Name: "Itching in the ear" },
    { ID: 973, Name: "Itching in the mouth or throat" },
    { ID: 96, Name: "Itching in the nose" },
    { ID: 21, Name: "Itching of skin" },
    { ID: 999, Name: "Itching of the anus" },
    { ID: 247, Name: "Itching on head" },
    { ID: 268, Name: "Itching or burning in the genital area" },
    { ID: 194, Name: "Joint effusion" },
    { ID: 198, Name: "Joint instability" },
    { ID: 27, Name: "Joint pain" },
    { ID: 230, Name: "Joint redness" },
    { ID: 193, Name: "Joint swelling" },
    { ID: 47, Name: "Joylessness" },
    { ID: 994, Name: "Knee deformity" },
    { ID: 256, Name: "Knee pain" },
    { ID: 146, Name: "Leg cramps" },
    { ID: 231, Name: "Leg swelling" },
    { ID: 143, Name: "Leg ulcer" },
    { ID: 82, Name: "Less than 3 defecations per week" },
    { ID: 992, Name: "Limited mobility of the ankle" },
    { ID: 167, Name: "Limited mobility of the back" },
    { ID: 178, Name: "Limited mobility of the fingers" },
    { ID: 1000, Name: "Limited mobility of the hip" },
    { ID: 195, Name: "Limited mobility of the leg" },
    { ID: 35, Name: "Lip swelling" },
    { ID: 205, Name: "Lockjaw" },
    { ID: 210, Name: "Loss of eye lashes" },
    { ID: 174, Name: "Lower abdominal pain" },
    { ID: 263, Name: "Lower-back pain" },
    { ID: 261, Name: "Lump in the breast" },
    { ID: 266, Name: "Malposition of the testicles" },
    { ID: 232, Name: "Marked veins" },
    { ID: 235, Name: "Memory gap" },
    { ID: 112, Name: "Menstruation disorder" },
    { ID: 123, Name: "Missed period" },
    { ID: 215, Name: "Moist and softened skin" },
    { ID: 85, Name: "Mood swings" },
    { ID: 983, Name: "Morning stiffness" },
    { ID: 135, Name: "Mouth pain" },
    { ID: 97, Name: "Mouth ulcers" },
    { ID: 177, Name: "Muscle pain" },
    { ID: 119, Name: "Muscle stiffness" },
    { ID: 987, Name: "Muscle weakness" },
    { ID: 252, Name: "Muscular atrophy in the leg" },
    { ID: 202, Name: "Muscular atrophy of the arm" },
    { ID: 168, Name: "Muscular weakness in the arm" },
    { ID: 253, Name: "Muscular weakness in the leg" },
    { ID: 44, Name: "Nausea" },
    { ID: 136, Name: "Neck pain" },
    { ID: 234, Name: "Neck stiffness" },
    { ID: 114, Name: "Nervousness" },
    { ID: 133, Name: "Night cough" },
    { ID: 1004, Name: "Night sweats" },
    { ID: 63, Name: "Non-healing skin wound" },
    { ID: 38, Name: "Nosebleed" },
    { ID: 221, Name: "Numbness in the arm" },
    { ID: 254, Name: "Numbness in the leg" },
    { ID: 200, Name: "Numbness of the hands" },
    { ID: 137, Name: "Oversensitivity to light" },
    { ID: 157, Name: "Overweight" },
    { ID: 155, Name: "Pain in the bones" },
    { ID: 142, Name: "Pain in the calves" },
    { ID: 12, Name: "Pain in the limbs" },
    { ID: 990, Name: "Pain of the anus" },
    { ID: 203, Name: "Pain on swallowing" },
    { ID: 251, Name: "Pain radiating to the arm" },
    { ID: 103, Name: "Pain radiating to the leg" },
    { ID: 286, Name: "Pain when chewing" },
    { ID: 189, Name: "Painful defecation" },
    { ID: 109, Name: "Painful urination" },
    { ID: 37, Name: "Palpitations" },
    { ID: 140, Name: "Paralysis" },
    { ID: 118, Name: "Physical inactivity" },
    { ID: 129, Name: "Problems with the sense of touch in the face" },
    { ID: 130, Name: "Problems with the sense of touch in the feet" },
    { ID: 258, Name: "Protrusion of the eyes" },
    { ID: 172, Name: "Purulent discharge from the urethra" },
    { ID: 173, Name: "Purulent discharge from the vagina" },
    { ID: 191, Name: "Rebound tenderness" },
    { ID: 54, Name: "Reduced appetite" },
    { ID: 78, Name: "Ringing in the ear" },
    { ID: 14, Name: "Runny nose" },
    { ID: 975, Name: "Sadness" },
    { ID: 269, Name: "Scalp redness" },
    { ID: 1001, Name: "Scar" },
    { ID: 60, Name: "Sensitivity to cold" },
    { ID: 69, Name: "Sensitivity to glare" },
    { ID: 102, Name: "Sensitivity to noise" },
    { ID: 264, Name: "Shiny red tongue" },
    { ID: 29, Name: "Shortness of breath" },
    { ID: 183, Name: "Side pain" },
    { ID: 26, Name: "Skin lesion" },
    { ID: 25, Name: "Skin nodules" },
    { ID: 124, Name: "Skin rash" },
    { ID: 61, Name: "Skin redness" },
    { ID: 217, Name: "Skin thickening" },
    { ID: 34, Name: "Skin wheal" },
    { ID: 241, Name: "Sleepiness with spontaneous falling asleep" },
    { ID: 52, Name: "Sleeplessness" },
    { ID: 95, Name: "Sneezing" },
    { ID: 13, Name: "Sore throat" },
    { ID: 64, Name: "Sputum" },
    { ID: 179, Name: "Stomach burning" },
    { ID: 185, Name: "Stress-related leg pain" },
    { ID: 28, Name: "Stuffy nose" },
    { ID: 138, Name: "Sweating" },
    { ID: 236, Name: "Swelling in the genital area" },
    { ID: 267, Name: "Swelling of the testicles" },
    { ID: 248, Name: "Swollen glands in the armpit" },
    { ID: 249, Name: "Swollen glands in the groin" },
    { ID: 169, Name: "Swollen glands in the neck" },
    { ID: 211, Name: "Tears" },
    { ID: 222, Name: "Testicular pain" },
    { ID: 243, Name: "Tic" },
    { ID: 201, Name: "Tingling" },
    { ID: 16, Name: "Tiredness" },
    { ID: 997, Name: "Toe deformity" },
    { ID: 1003, Name: "Toe swelling" },
    { ID: 980, Name: "Tongue burning" },
    { ID: 977, Name: "Tongue swelling" },
    { ID: 115, Name: "Tremor at rest" },
    { ID: 132, Name: "Tremor on movement" },
    { ID: 988, Name: "Trouble understanding speech" },
    { ID: 144, Name: "Unconsciousness, short" },
    { ID: 265, Name: "Uncontrolled defecation" },
    { ID: 116, Name: "Underweight" },
    { ID: 160, Name: "Urge to urinate" },
    { ID: 161, Name: "Urination during the night" },
    { ID: 68, Name: "Vision impairment" },
    { ID: 213, Name: "Vision impairment for far objects" },
    { ID: 166, Name: "Vision impairment for near objects" },
    { ID: 66, Name: "Visual field loss" },
    { ID: 101, Name: "Vomiting" },
    { ID: 181, Name: "Vomiting blood" },
    { ID: 972, Name: "Weakness or numbness on right or left side of body" },
    { ID: 23, Name: "Weight gain" },
    { ID: 22, Name: "Weight loss" },
    { ID: 30, Name: "Wheezing" },
    { ID: 187, Name: "Wound" },
    { ID: 105, Name: "Yellow colored skin" },
    { ID: 106, Name: "Yellowish discoloration of the white part of the eye" }
  ];

  var userSymptoms = [];

  // hide diagnosis div for ~aesthetics~
  $("#wwwmb-diag-div").hide();
  // autocomplete handler for our symptom search bar
  $("#symptom-search").autocomplete({
    source: symptoms
  });

  // keyup event to trigger on click with enter
  $("#symptom-search").keyup(function(event) {
    if (event.keyCode === 13) {
      $("#add-btn").click();
    }
  });

  // listener for "+" button
  // this should append the symptom to userSymptoms array,
  // display symptom on screen
  // clear the search bar
  $("#add-btn").on("click", function(event) {
    event.preventDefault();
    var userChoice = $("#symptom-search")
      .val()
      .trim();

    // verify symptom has not already been added
    if (!userSymptoms.includes(userChoice)) {
      userSymptoms.push(userChoice);
      // display a lil warning if you are passing more than 3 symptoms
      if (userSymptoms.length > 3) {
        $("#symp-warning").text(
          "* Expect limited results when passing more than 3 symptoms *"
        );
      }
    } else {
      console.log("duplicate symptom. moving on");
    }
    displaySymptomsList(userSymptoms);
    console.log(userSymptoms);
    console.log("-----------------");
  });

  // function takes in arrayy of user symptoms
  // displays on screen. triggered if user adds
  // or removes a symptom
  function displaySymptomsList(arr) {
    $("#symptoms-list").text("");
    arr.forEach(function(s) {
      $("#symptoms-list").append(
        "<li class='text-left'>" +
          s +
          "<button type='button' class='btn btn-secondary btn-sm remove-btn'>Remove</button></li>"
      );
    });
  }

  // listener for the symptoms remove button
  $("#symptoms-list-wrapper").on("click", ".remove-btn", function(e) {
    var target = e.currentTarget.previousSibling.data;
    userSymptoms.splice(userSymptoms.indexOf(target), 1);

    if (userSymptoms.length < 4) {
      $("#symp-warning").text("");
    }

    displaySymptomsList(userSymptoms);
  });

  // diagnose me button should clear userSymptoms
  $("#diagnose").on("click", function(event) {
    event.preventDefault();
    var sympIDs = [];
    // we loop through our user generated symptoms list
    // compare it to our list of symptom objects
    // and use that to generrate our symptom ID array
    // that can then be used in our API call
    userSymptoms.forEach(function(s) {
      namesAndIDs.forEach(function(n) {
        if (s === n.Name) {
          sympIDs.push(n.ID);
        }
      });
    });
    getSymptomString(sympIDs);
    // when all is said and done we reset so user can search again
    userSymptoms = [];
    sympIDs = [];
    $("#symptoms-list").text("");
  });

  // listener for the listed diagnoses if user wants more info
  $("#diagnoses").on("click", ".diag-item", function(e) {
    // we grab the id of the diagnosis the user clicked
    // and pass it to our function to access the api
    console.log(e.currentTarget);
    getDiagnosisInfo(e.currentTarget.id);
  });

  // function takes in array of IDs and converts it to
  // a string that our browser will be able to interpret
  function getSymptomString(arr) {
    var symptomsString = "%5B";
    for (var i = 0; i < arr.length - 1; i++) {
      symptomsString += arr[i];
      symptomsString += "%2C";
    }
    symptomsString += arr[arr.length - 1];
    symptomsString += "%5D";
    console.log("symptom string: ", symptomsString);
    // then calls the getDiagnosis function and passes our string
    getDiagnosis(symptomsString);
  }

  // function takes in string from getSymptomString
  // get request to retrieve diagnosis
  // then we need to display this info to the user
  function getDiagnosis(str) {
    $.get("/wwwmb/" + str).then(function(data) {
      // first we need to change the divs visibility
      $("#wwwmb-diag-div").show();
      if (data.length > 0) {
        $("#diag-res-header").text("Potential Diagnoses:");
        // okay now we have to start displaying the data
        var diagListHTML = "";
        data.forEach(function(d) {
          diagListHTML += "<li class='diag-item' id=" + d.Issue.ID + ">";
          diagListHTML += d.Issue.Name;
          diagListHTML += "</li>";
        });
        $("#diag-res-list").html(diagListHTML);
      } else {
        $("#diag-res-header").text("No Diseases Found.");
        console.log("no diseases found");
      }
    });
  }

  // function takes in an id based on user's click
  // get request to retrieve info
  function getDiagnosisInfo(id) {
    $.get("/diagnoses/" + id).then(function(data) {
      console.log(data);
    });
  }
});
