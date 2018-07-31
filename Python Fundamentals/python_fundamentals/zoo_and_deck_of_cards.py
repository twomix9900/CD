class Zoo:
  def __init__(self, zoo_name):
    self.animals = []
    self.name = zoo_name
  def addDog(self, name):
    self.animals.append( Dog(name) )
  def addDragon(self, name):
    self.animals.append( Dragon(name) )
  def printAllHealth(self):
    print("-"*30, self.name, "-"*30)
    for animal in self.animals:
      animal.displayHealth()

class Animal:
  def __init__(self,name):
    self.health = 100
    self.name = name

  def displayHealth(self):
    print("name:", self.name, "health:",self.health)

class Dragon(Animal):
  def woof(self):
    print("woof")

class Dog(Animal):
  def woof(self):
    print("woof")

# zoo1 = Zoo("John's Zoo")
# zoo1.addDog("Tracy")
# zoo1.addDog("Doggy")
# zoo1.addDragon("Draggy")
# zoo1.addDragon("Dragoon")
# zoo1.printAllHealth()

class Card:
  def __init__(self, value, type):
    self.value = value
    self.type = type
  def show(self):
    print("Value: ", self.value, "Type: ", self.type)
    
class Deck:
  def __init__(self, name):
    self.deck = []
    self.name = name
    for i in ["clubs", "diamonds", "hearts", "spades"]:
      for j in range(1,15):
        self.deck.append( Card(j, i ) )
  def show(self):
    print("\n", "*"*30, self.name, "*"*30)
    for card in self.deck:
      card.show()


d1 = Deck("First Deck")
d1.show()
d2 = Deck("Second Deck")
d2.show()
