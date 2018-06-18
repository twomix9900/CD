from __future__ import unicode_literals
from django.db import models

class User(models.Model):
  first_name = models.CharField(max_length=50)
  last_name = models.CharField(max_length=50)
  email = models.EmailField(max_length=50)
  created_at = models.DateTimeField(auto_now_add = True)
  updated_at = models.DateTimeField(auto_now_add = True)

  def __repr__(self):
    return "<Book object: {} {} {}>".format(self.first_name, self.last_name, self.email)

class Book(models.Model):
  name = models.CharField(max_length=50)
  desc = models.CharField(max_length=255)
  liked_books = models.ManyToManyField(User, related_name="liked_users")
  uploaded_books = models.ManyToManyField(User, related_name="uploader")
  created_at = models.DateTimeField(auto_now_add = True)
  updated_at = models.DateTimeField(auto_now_add = True)

  def __repr__(self):
    return "<Author object: {} {}>".format(self.name, self.desc)