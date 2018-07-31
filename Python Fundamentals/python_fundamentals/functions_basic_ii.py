# Countdown - Create a function that accepts a number as an input.  Return a new array that counts down by one, from the number (as arrays 'zero'th element) down to 0 (as the last element).  For example countDown(5) should return [5,4,3,2,1,0].
# def countdown(num):
#   numbers = []
#   for val in range(num, -1, -1):
#     numbers.append(val)
#   return numbers
# print(countdown(5))

# Print and Return - Your function will receive an array with two numbers. Print the first value, and return the second.
# def print_and_return(array):
#   print(array[0])
#   return array[1]
# print(print_and_return([1,2]))

# First Plus Length - Given an array, return the sum of the first value in the array, plus the array's length.
# def first_plus_length(array):
#   return array[0] + len(array)
# print(first_plus_length([1,5,100000]))

# Values Greater than Second - Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value.  Print how many values this is.  If the array is only element long, have the function return False
# def values_greater_than_second(array):
#   if len(array) == 1:
#     return False
  
#   result = []
#   for num in array:
#     if (num > array[1]):
#       result.append(num)
#   print(len(result))
#   return result
# print(values_greater_than_second([1]))
# print(values_greater_than_second([1,2,5,6]))


# This Length, That Value - Given two numbers, return array of length num1 with each value num2.  Print "Jinx!" if they are same.
# def this_length_that_value(length, value):
#   result = []
#   if length == value:
#     print("Jinx!")
#   for i in range(length):
#     result.append(value)
#   return result
# print(this_length_that_value(3,3))