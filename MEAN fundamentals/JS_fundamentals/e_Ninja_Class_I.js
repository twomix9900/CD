var Ninja = function (name) {
  let speed = 3;
  let strength = 3;
  this.name = name;
  this.health = 100;

  this.sayName = function() {
    console.log("My ninja name is", this.name, "!");
  }

  this.showStats = function() {
    console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
  }

  this.drinkSake = function() {
    this.health += 10;
  }

  this.punch = function(ninja) {
    if (ninja instanceof Ninja) {
      ninja.health -= 5;
    } else {
      console.log("Not a ninja")
    }
  }

  this.kick = function(ninja) {
    if (ninja instanceof Ninja) {
      ninja.health -= 15 * strength;
    } else  {
      console.log("Not a ninja")
    }
  }
}

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.showStats();
redNinja.showStats();

blueNinja.kick(redNinja);
blueNinja.showStats();
redNinja.showStats();
