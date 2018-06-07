class Node:
  def __init__(self,val):
    self.val = val
    self.next = None

  def display_value(self):
    print(self.val)
    return self

class List:
  def __init__(self,val):
    self.head = Node(val)
  
  def print_head(self):
    print(self.head.val)
    return self

  def add_node(self,val):
    runner = self.head
    while runner.next != None:
      runner = runner.next
    runner.next = Node(val)
    return self

  def print_all_values(self):
    runner = self.head
    while runner != None:
      print(runner.val)
      runner = runner.next
    print("*"*30)
    return self

  # def remove_node(self,val):
  #   runner = self.head
  #   not_found = True
  #   while runner != None and not_found:
  #     if runner.next.val == val and runner.next.next == None: ## tail
  #       print("tail")
  #       not_found = not not_found
  #     if runner.next.val == val and runner.next.next: ## non-tail
  #       print("non-tail")
  #       not_found = not not_found
  #     runner = runner.next
  #   return self

    

list = List(1)
# list.add_node(2).add_node(3).add_node(4).add_node(5).remove_node(1)