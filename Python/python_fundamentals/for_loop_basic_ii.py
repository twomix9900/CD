# Biggie Size - Given an array, write a function that changes all positive numbers in the array to "big". Example: makeItBig([-1, 3, 5, -5]) returns that same array, changed to [-1, "big", "big", -5].
# def biggie_size(array):
#   for i in range(len(array)):
#     if array[i] > 0:
#       print(array[i])
#       array[i] = "big"
#   return array
# print(biggie_size([-1,3,5,-5]))

# Count Positives - Given an array of numbers, create a function to replace last value with number of positive values. Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.  (Note that zero is not considered to b a positive number).
# def count_positives(array):
#   count = 0
#   for i in range(len(array)):
#     if array[i] > 0:
#       count += 1
#   array[len(array) - 1] = count
#   return array
# print(count_positives([-1,1,1,1]))

# SumTotal - Create a function that takes an array as an argument and returns the sum of all the values in the array.  For example sumTotal([1,2,3,4]) should return 10
# def sum_total(array):
#   sum = 0
#   for number in array:
#     sum += number
#   return sum
# print(sum_total([1,2,3,4]))

# Average - Create a function that takes an array as an argument and returns the average of all the values in the array.  For example multiples([1,2,3,4]) should return 2.5
# def average(array):
#   sum = 0
#   for number in array:
#     sum += number
#   return sum / len(array)
# print(average([1,2,3,4]))


# Length - Create a function that takes an array as an argument and returns the length of the array.  For example length([1,2,3,4]) should return 4
# def length(array):
#   return len(array)
# print(length([1,2,3,4]))


# Minimum - Create a function that takes an array as an argument and returns the minimum value in the array.  If the passed array is empty, have the function return false.  For example minimum([1,2,3,4]) should return 1; minimum([-1,-2,-3]) should return -3.
# def minimum(array):
#   if len(array) == 0:
#     return False
#   min = array[0]
#   for number in array:
#     if number < min:
#       min = number
#   return min
# print(minimum([-1,-2,-3]))


# Maximum - Create a function that takes an array as an argument and returns the maximum value in the array.  If the passed array is empty, have the function return false.  For example maximum([1,2,3,4]) should return 4; maximum([-1,-2,-3]) should return -3.
# def maximum(array):
#   if len(array) == 0:
#     return False
#   max = array[0]
#   for number in array:
#     if number > max:
#       max = number
#   return max
# print(maximum([1,2,3,4]))


# UltimateAnalyze - Create a function that takes an array as an argument and returns a dictionary that has the sumTotal, average, minimum, maximum and length of the array.
# def ultimate_analyze(array):
#   sum = 0
#   min = array[0]
#   max = array[0]

#   for value in array:
#     sum += value
#     if value > max:
#       max = value
#     if value < min:
#       min = value    
      
#   result = {
#     "max": max,
#     "min": min,
#     "length": len(array),
#     "average": sum/len(array),
#     "sumTotal": sum
#   }
#   return result

# print(ultimate_analyze([1,2,3,4,5]))


# ReverseList - Create a function that takes an array as an argument and return an array in a reversed order.  Do this without creating an empty temporary array.  For example reverse([1,2,3,4]) should return [4,3,2,1]. This challenge is known to appear during basic technical interviews.
# def reverse_list(array):
#   for i in range(0, int(len(array)/2), 1):
#     temp = array[i]
#     array[i] = array[int(len(array)) - i - 1]
#     array[len(array) - i - 1] = temp
#   return array

# print(reverse_list([1,2,3,4]))
