class MathDojo:
  def __init__(self):
    self.result = 0

  def add(self, *args):
    for value in args:
      self.result += value
    return self
  
  def subtract(self, *args):
    for value in args:
      self.result -= value
    return self
  

md = MathDojo()
print(md.add(2).add(2,5,1).subtract(3,2).result) ## 5