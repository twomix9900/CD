this_author = Author.objects.get(id=2)
my_book = Book.objects.create(title="Little Women", author=this_author)
# or on one line...
my_book = Book.objects.create(title="Little Women", author=Author.objects.get(id=2))



this_author = Author.objects.get(id=2)
books = Book.objects.filter(author=this_author)
# one-line version:
books = Book.objects.filter(author=Author.objects.get(id=2))



books = Book.objects.filter(author__name="Louise May Alcott")
books = Book.objects.filter(author__name__startswith="Lou")






def index(request):
  context = {"authors": Author.objects.all()}
  return render(request, "books/index.html", context)