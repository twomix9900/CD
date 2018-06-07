class Node:
  def __init__(self, value):
    self.value = value
    self.next = None

class List:
  def __init__(self):
    self.head = None
    # self.tail = None

  def add_back(self, value):
    node = Node(value)
    runner = self.head
    if not runner:
      self.head = node
    else:
      while runner.next:
        runner = runner.next
    runner.next = node


# list = List()
# list.head = Node('Alice')
# list.head.next = Node('Chad')
# list.head.next.next = Node('Debra')

print(list)