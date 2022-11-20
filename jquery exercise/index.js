$(document).ready(function () {
  $("#b1").click(function () {
    $(".container").remove();
  });

  $("#b2").click(function () {
    $("#p2").empty();
  });

  $("#b3").click(function () {
    $("#p1").append("lorem5");
  });

  $("#b4").click(function () {
    $("div").animate({ left: "100px" });
  });

  $("#b5").click(function () {
    $("div").animate({ left: "0px" });
  });
});
