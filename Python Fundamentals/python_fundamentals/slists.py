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
      print("runner:", id(runner), runner.val, "runner.next", id(runner.next))
      runner = runner.next
    print("*"*30)
    return self

  def remove_node(self,val):
    runner = self.head
    # if runner.val == val:
    #   print("head")
    #   self.head = Node(runner.next.val)
    #   self.remove_node(val)
    while runner.next != None:
      # if runner.next.val == val and runner.next.next == None: ## tail
      #   print("tail")
      if runner.next.val == val and runner.next.next != None: ## non-tail
        print("nontail")
        print("before change\nrunner:", id(runner), runner.val, "runner.next", id(runner.next))
        runner.next = runner.next.next
        print("after change\nrunner:", id(runner), runner.val, "runner.next", id(runner.next))
        print("-"*30)
      runner = runner.next
    self.print_all_values()

    

list = List(1)
list.add_node(2).add_node(3).add_node(4).add_node(5).print_all_values().remove_node(1).print_all_values()