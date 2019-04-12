$("#records-btn").click(function() {
  $("#visit-form").modal("show");
});

$("#info-submit").click(function() {
  var name = $("#log-name")
    .val()
    .trim();
  var phone = $("#log-phone-number")
    .val()
    .trim();
  var email = $("#log-email")
    .val()
    .trim();
  var dob = $("#log-dob")
    .val()
    .trim();
  var address1 = $("#log-address")
    .val()
    .trim();
  var address2 = $("#log-address2")
    .val()
    .trim();
  var city = $("#log-city")
    .val()
    .trim();
  var state = $("#log-state")
    .val()
    .trim();
  var zip = $("#log-zip")
    .val()
    .trim();
  var gender = $("#log-gender")
    .val()
    .trim();
  var ethnicity = $("#log-ethnicity")
    .val()
    .trim();
  var primaryCare = $("#log-dr")
    .val()
    .trim();
});


