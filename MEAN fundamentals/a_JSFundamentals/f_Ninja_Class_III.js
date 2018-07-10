class Ninja {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.strength = 3;
    this.speed = 3;
  }

  sayName() {
   console.log(this.name); 
  }

  showStats() {
    console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength);
  }

  drinkSake() {
    this.health += 10;
  }
}

class Sensei extends Ninja {
  constructor(name) {
    super(name);
    this.health = 200;
    this.strength = 10;
    this.speed = 10;
    this.wisdom = 10;
  }

  speakWisdom() {
    console.log("Insert wise message here, gaining 10 health");
    super.drinkSake();
  }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
