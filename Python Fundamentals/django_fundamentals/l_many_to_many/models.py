class Book(models.Model):
	title = models.CharField(max_length=255)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
class Publisher(models.Model):
	name = models.CharField(max_length=255)
	books = models.ManyToManyField(Book, related_name="publishers")
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)


# As you can see, each publisher can publish many books, and each book can be published by many publishers. 
# Unlike with a ForeignKey, it doesn't matter which model has the ManyToManyField. 
# The model would still work if the Book model has a field named publishers instead. 