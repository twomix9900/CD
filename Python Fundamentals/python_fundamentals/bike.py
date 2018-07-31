class Bike:
  def __init__(self, price, max_speed):
    self.price = price
    self.max_speed = max_speed
    self.miles = 0

  def display_info(self):
    print("price:" , self.price , "max speed:" , self.max_speed, "miles:" , self.miles)

  def ride(self):
    print("Riding")
    self.miles += 10
    return self

  def reverse(self):
    print("Reversing")
    if self.miles > 0:
      self.miles -= 5
    return self

hello1 = Bike(100,60)
hello1.ride().ride().ride().reverse().display_info()

hello2 = Bike(110, 70)
hello2.ride().ride().reverse().reverse().display_info()

hello3 = Bike(120,80)
hello3.reverse().reverse().reverse().display_info()