class Bike {
  miles: number;
  price: number;
  max_speed: string;

  constructor ( price, max_speed ) {
    this.miles = 0;
    this.price = price;
    this.max_speed = max_speed;
  };

  displayInfo = () => {
    console.log('Price: ' + this.price + ', Max Speed: ' + this.max_speed + ', Miles: ' + this.miles);
    return this;
  };

  ride = () => {
    console.log("Riding!");
    this.miles += 10;
    return this;
  };

  reverse = () => {
    console.log("Reversing!");
    if (this.miles > 5) this.miles -= 5;
    return this;
  }
}

var bike1 = new Bike(200, "25mph");
bike1.ride().ride().ride().reverse().displayInfo();

var bike2 = new Bike(200, "30mph");
bike2.ride().ride().reverse().reverse().displayInfo();

var bike3 = new Bike(300, "40mph");
bike3.reverse().reverse().reverse().displayInfo();