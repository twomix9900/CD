$(document).ready(function () {
  $("img").css("display","block");
  $("img").click(function() {
    $(this).attr("src",$(this).attr("data-alt-src"));
  })
})