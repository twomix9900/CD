class Animal:
  def __init__(self, name, health):
    self.name = name
    self.health = health

  def walk(self):
    self.health -= 1
    return self

  def run(self):
    self.health -= 5
    return self

  def display_health(self):
    print("health:", self.health)

a1 = Animal("a1",100)
a1.walk().walk().walk().run().run().display_health()

class Dog(Animal):
  def __init__(self,name,health):
    super().__init__(name,health)
    self.health = 150

  def pet(self):
    self.health += 5
    return self


d1 = Dog("d1",100)
d1.walk().walk().walk().run().run().pet().display_health()

class Dragon(Animal):
  def __init__(self, name, health):
    super().__init__(name,health)
    self.health = 170

  def fly(self):
    self.health -= 10
    return self

  def display_health(self):
    super().display_health()
    print("I am a Dragon")

dr1 = Dragon("dr1",100)
dr1.display_health()

a2 = Animal("a2",100)
a2.display_health()