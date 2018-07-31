test_list = [1000,1,2,-100000, -100, 100000]

def selection_sort(list):
  for i in range(len(list)):
    for j in range(i + 1, len(list), 1):
      if (list[j] < list[i]):
        list[i], list[j] = list[j], list[i]
  return list

print(selection_sort(test_list))