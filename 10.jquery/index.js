// $("h1").css("color", "blue");

$("button").click(function () {
  $("h1").css("color", "red");
});

$(document).keypress(function (event) {
  $("h1").text(event.key);
});
