this_book = Book.objects.get(id=4)
this_publisher = Publisher.objects.get(id=2)
this_publisher.books.add(this_book)


# The syntax to see all books from a given publisher is the same as when doing a reverse look-up on a ForeignKey relationship: 
# this_publisher.books.all() in your views.py, or this_publisher.books.all in a template. 

# this_book.publishers.add(this_publisher) is the same as this_publisher.books.add(this_book), 
# and this_book.publishers.all() will return all publishers of a given book. 