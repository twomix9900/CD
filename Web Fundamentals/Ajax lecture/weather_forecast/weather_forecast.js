$(document).ready(function() {
  $("form").submit(function() {
    let city = document.getElementById("city-name").value;
    let url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=add5f2e0221e8d2cee9479dfde7ee9b8";
    $.get(url, function(res) {
      let content = "";
      let temperature = res.main.temp * (9/5) - 459.67;
      console.log(temperature);
      content += "<h1>" + city + "</h1>" + "<h3>Temperature: " + temperature + "</h3>";
      $(".city-temperature").append(content);
    }, "json")
    console.log(city);
    return false;
  });
})