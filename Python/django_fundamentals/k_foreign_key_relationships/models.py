class Author(models.Model):
  name = models.CharField(max_length=255)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
class Book(models.Model):
  title = models.CharField(max_length=255)
  author = models.ForeignKey(Author, related_name="books")
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)


# You may have noticed that we haven't mentioned the related_name field yet. 
# This is used for a reverse look-up. In addition to placing a field on our book that holds the author information, 
# Django has also placed a field on the author that holds information about all of their books. 
# Just refer to some_author.books.all()! 
# (You need to say .all because there could potentially be many books connected to this author, not just one.) 
# This can be especially convenient on a template: 