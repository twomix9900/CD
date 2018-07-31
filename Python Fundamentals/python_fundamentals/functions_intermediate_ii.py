# 1. Given

# x = [ [5,2,3], [10,8,9] ] 
# students = [
#   {'first_name':  'Michael', 'last_name' : 'Jordan'},
#   {'first_name' : 'John', 'last_name' : 'Rosales'}
# ]
# sports_directory = {
#   'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
#   'soccer' : ['Messi', 'Ronaldo', 'Rooney']
# }
# z = [ {'x': 10, 'y': 20} ]

# How would you change the value 10 in x to 15?  Once you're done x should then be [ [5,2,3], [15,8,9] ].  
# print(x[1][0])
# x[1][0] = 15
# print(x[1][0])

# How would you change the last_name of the first student from 'Jordan' to "Bryant"?
# print(students[0]["last_name"])
# students[0]["last_name"] = "Bryant"
# print(students[0]["last_name"])

# For the sports_directory, how would you change 'Messi' to 'Andres'?
# print(sports_directory["soccer"][0])
# sports_directory["soccer"][0] = "Andres"
# print(sports_directory["soccer"][0])

# For x, how would you change the value 20 to 30?
# print(z[0]["y"])
# z[0]["y"] = 30
# print(z[0]["y"])

# 2. Create a function that given a list of dictionaries, it loops through each dictionary in the list and prints each key and the associated value.  For example, given the following list:

# students = [
#   {'first_name':  'Michael', 'last_name' : 'Jordan'},
#   {'first_name' : 'John', 'last_name' : 'Rosales'},
#   {'first_name' : 'Mark', 'last_name' : 'Guillen'},
#   {'first_name' : 'KB', 'last_name' : 'Tonel'}
# ]

# iterateDictionary( students ) should output

# first_name - Michael , last_name - Jordan
# first_name - John, last_name - Rosales
# first_name - Mark, last_name - Guillen
# first_name - KB, last_name - Tonel

# def print_dictionary(array):
#   for element in array:
#     for key,val in element.items():
#       print(key, "=", val)

# print_dictionary(students)

# 3. Create a function that given a list of dictionaries and a key name, it outputs the value stored in that key for each dictionary.  For example, iterateDictionary2('first_name', students) should output

# Michael
# John
# Mark

# def print_values(key, array):
#   for element in array:
#     print(element[key])
# print_values("first_name",students)

# 4.  Say that

# dojo = {
#   'location': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
#   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
# }

# Create a function that prints the name of each location and also how many locations the Dojo currently has.  Have the function also print the name of each instructor and how many instructors the Dojo currently has.  For example, printDojoInfo(dojo) should output

# 7 LOCATIONS
# San Jose
# Seattle
# Dallas
# Chicago
# Tulsa
# DC
# Burbank
    
# 8 INSTRUCTORS
# Michael
# Amy
# Eduardo
# Josh
# Graham
# Patrick
# Minh
# Devon

# def print_dojos(dictionary):
#   print(len(dojo["location"]), "LOCATIONS")
#   for item in dictionary["location"]:
#     print(item)
#   print("\n") 
#   print(len(dojo["instructors"]), "INSTRUCTORS")
#   for item in dictionary["instructors"]:
#     print(item)

# print_dojos(dojo)