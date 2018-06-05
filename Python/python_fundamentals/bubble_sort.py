test_list = [1020,3,1,5,6,2,9,-1000,100,-1,-5,1000,7]

def bubbleSort(list):
  for j in range(len(list) - 1):
    for i in range(0, len(list) - 1 - j, 1):
      if (list[i] > list[i + 1]):
        list[i], list[i + 1] = list[i + 1], list[i]
  return list
      

print(bubbleSort(test_list))