




$(document).ready(function() {
  $("#welcomeForm").submit(function(event) {
    var prefName = $("input#prefName").val();
    var favColor = $("#favColor").val();
    var dob = $("#dob").val();
    var vehMake = $("input:radio[name=vehMake]:checked").val();
    var computer = $("#computer").val();
    $(".prefName").text(prefName);
    $(".dob").text(dob);
    $(".computer").text(computer);
    $("body").css("background-color", favColor);
    $(".vehMake").text(vehMake);
    $(".container").children().toggle();
    event.preventDefault();
  });
 $("form#redo").click(function(event) {
   $(".container").children().toggle();
   $("body").css("background-color", "#ffffff");
   $("input#prefName").val("");
   $("#favColor").val("#ffffff");
   $("#dob").val("");
   $("input:radio[name=vehMake]:checked").val("None");
   $("#computer").val(" ");
   event.preventDefault();
 });
});
