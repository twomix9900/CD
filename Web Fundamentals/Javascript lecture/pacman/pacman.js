document.addEventListener("DOMContentLoaded", function(e) { 
  var world = [
    [2,2,2,2,2,2,2,2,2,2],
    [2,1,2,1,1,1,1,1,1,2],
    [2,1,2,1,2,1,2,2,1,2],
    [2,1,2,1,2,1,1,2,1,2],
    [2,1,1,1,2,1,2,1,1,2],
    [2,1,2,1,2,1,2,1,1,2],
    [2,1,2,1,2,1,2,1,1,2],
    [2,1,2,1,2,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2]
  ];

  var pacman = {
    x: 20,
    y: 20
  }

  function displayWorld() {
    var output = '';
    for (let i = 0; i < world.length; i++) {
      output += "<div class='row'>";
      for (let j = 0; j < world[i].length; j++) {
        if (world[i][j] === 2) {
          output += "<div class='brick'></div>";
        }
        if (world[i][j] === 1) {
          output += "<div class='coin'></div>";
        }
        if (world[i][j] === 0) {
          output += "<div class='empty'></div> ";
        }
      }
      output += "</div>";
    }
    // console.log(output)
    document.getElementById("world").innerHTML = output;
  }


  document.onkeydown = function (e) {
    if (e.key === "ArrowUp") {
      pacman.y -= 20;
    }
    if (e.key === "ArrowRight") {
      pacman.x += 20;
    }
    if (e.key === "ArrowDown") {
      pacman.y += 20;
    }
    if (e.key === "ArrowLeft") {
      pacman.x -= 20;
    }
    displayPacman();
  }

  function displayPacman() {
    document.getElementById("pacman").style.top = pacman.y+"px";
    document.getElementById("pacman").style.left = pacman.x+"px";
  }

  displayWorld();
  displayPacman();
});


//list of features to build
//-have JS display the world
//-have the pacman move up and down

