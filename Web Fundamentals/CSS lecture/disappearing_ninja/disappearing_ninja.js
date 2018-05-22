$(document).ready(function() {
  console.log('ready!')

  $("img.ninja").css("display", "inline-block");
  $("img.ninja").css("width", "100px");
  $("img.ninja").click(function() {
    $(this).hide();
  })
  $("button.restore").click(function() {
    $("img.ninja").show();
  })
})