class Product:
  def __init__(self, price, item_name, weight, brand, status):
    self.price = price
    self.item_name = item_name
    self.weight = weight
    self.brand = brand
    self.status = "for sale"

  def sell(self):
    self.status = "sold"
    return self

  def add_tax(self, tax):
    self.price *= (1 + tax)
    return self.price

  def return_item(self, reason_for_return):
    if reason_for_return == "defective":
      self.status = "defective"
      self.price = 0
      return self

    if reason_for_return == "like_new":
      self.status = "for sale"
      return self

    if reason_for_return == "opened":
      self.status = "used"
      self.price *= .8
      return self

  def display_info(self):
    print("price:", self.price, "item name:", self.item_name, "weight:", self.weight, "brand:", self.brand, "status:", self.status)
    return self

product1 = Product(100, "juicer", 10, "GM", "for sale")
product1.display_info().add_tax(.10)
product1.display_info()