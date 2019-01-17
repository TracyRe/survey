




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
    $(".favColor").text(favColor);
    $(".vehMake").text(vehMake);
    $(".container").children().toggle();
    event.preventDefault();
  });
 $("form#redo").click(function(event) {
   $(".container").children().toggle();
   event.preventDefault();
 });
});
