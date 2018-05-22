$( document ).ready(function() {
  console.log( "ready!" );
  $("img.slide-toggle").hide();
  $("img.toggle").toggle();
  $("img.slide-down").hide();
  $("img.fade-in").hide();


  $("button.add-class").click(function() {
    $("p.add-class").addClass("red");
    $("p.red").css("color","red");
  });

  $("button.slide-toggle").click(function() {
    $("img.slide-toggle").show("fast");
  });

  $("button.append").click(function() {
    $("p.append").append(" I've been appended to this paragraph!");
  });

  $("button.toggle").click(function() {
    $("img.toggle").toggle("fast");
  });

  $("button.slide-up").click(function() {
    $("img.slide-up").slideUp("fast");
  });

  $("button.slide-down").click(function() {
    $("img.slide-down").slideDown("fast");
  });

  $("button.fade-in").click(function() {
    $("img.fade-in").fadeIn("slow");
  });

  $("button.fade-out").click(function() {
    $("img.fade-out").fadeOut("slow");
  });

  $("button.before").click(function() {
    $("p.before").before("<p>Another paragraph before the one after this</p>");
  });

  $("button.after").click(function() {
    $("p.after").after("<p>Another paragraph after the one before this</p>");
  });

  $("button.html").click(function() {
    $("p.html").html("<h1>H1 html added as a child of the p element</h1>");
  });

  $("button.attr").click(function() {
    $("img.attr").attr("alt","new alt value entered");
  });

  $("button.val").click(function() {
    let text = $(this).text();
    $("input.val").val(text);
  });

  $("button.text").click(function() {
    $("p.text").text("Text of this paragraph was updated");
  });

  $("button.data-set").click(function() {
    $("p.data").data("foo", 16 );
  });

  $("button.data-log").click(function() {
    console.log($("p.data").data())
  });




});