$(document).ready(function () {
  $("img").css("display","block");
  $("img").click(function() {
    let temp = $(this).attr("src");
    $(this).attr("src",$(this).attr("data-alt-src"));
    $(this).attr("data-alt-src",temp);
  })
})