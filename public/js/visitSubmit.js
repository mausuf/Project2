/* eslint-disable no-unused-vars */
$(document).ready(function() {
  $("#records-btn").click(function() {
    $("#visit-form").modal("show");
  });

  $("#wwwmb-btn").click(function() {
    $("#wwwmb-form").modal("show");
  });

  $("#info-submit").click(function() {
    //Patient data object
    var patientData = {
      name: $("#log-name").val(),
      number: $("#log-phone-number").val(),
      dob: $("#log-dob").val(),
      address: {
        add1: $("#log-address").val(),
        add2: $("#log-address2").val(),
        city: $("#log-city").val(),
        state: $("#log-state").val(),
        zip: $("#log-zip".val())
      },
      gender: $("#log-gender").val(),
      ethnicity: $("#log-ethnicity").val(),
      primaryPhy: $("#log-dr").val()
    };
  });
});
