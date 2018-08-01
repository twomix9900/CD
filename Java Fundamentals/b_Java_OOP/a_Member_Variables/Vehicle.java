class Vehicle {
  private int numberOfWheels;
  private String color;
  // getter
  public int getNumberOfWheels() {
      return numberOfWheels;
  }
  
  // setter
  public void setNumberOfWheels(int number) {
      numberOfWheels = number;
  }
  // getter
  public String getColor() {
      return color;
  }
  // setter
  public void setColor(String color) {
      this.color = color;        // The this keyword is necessary here to specify that we are talking about the instance variable and not the parameter variable.
  }
}
