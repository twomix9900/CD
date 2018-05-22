$(document).ready(function() {
  console.log('ready')
  $("img").css("width","100px");
  $("img").css("height","100px");


  $("img.1").hover(function() {
    $("img.1").attr("src","2.png");
  }, function() {
    $("img.1").attr("src","1.png");
  });

  $("img.3").hover(function() {
    $("img.3").attr("src","4.jpg");
  }, function() {
    $("img.3").attr("src","3.jpg");
  });

  $("img.5").hover(function() {
    $("img.5").attr("src","6.jpg");
  }, function() {
    $("img.5").attr("src","5.jpg");
  });

  $("img.7").hover(function() {
    $("img.7").attr("src","8.jpg");
  }, function() {
    $("img.7").attr("src","7.jpg");
  })


})
