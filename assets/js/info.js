$(document).ready(function() {
  
  $("#carousel-next").click(function next() {
    var x = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (x <= -600) {
      return false;
    } else {
      x = x - 200;
      $("#carousel").css("margin-left", x);
    }
  });
  //Implement the "slide to right" when the user clicks on #carousel-prev here
  $("#carousel-prev").click(function prev() {
    var x = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (x >= 0) {
      return false;
    } else {
      x = x + 200;
      $("#carousel").css("margin-left", x);
    }
  });

  $(".image").hover(function() {
    $(this).css({"background-color":"black"});
    $("img", this).css("opacity", "0.2");
    $(".text", this).show();
    }, function() {
    $("img", this).css("opacity", "1");
    $(".text", this).hide();
    $(this).css({"background-color":"none"});
    });
});