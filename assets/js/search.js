$(document).ready(function() {
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