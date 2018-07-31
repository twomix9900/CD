from __future__ import unicode_literals
from django.db import models

# Create your models here.
class User(models.Model):
  first_name = models.CharField(max_length=50)
  last_name = models.CharField(max_length=50)
  email_address = models.EmailField(max_length=50)
  age = models.IntegerField()
  created_at = models.DateTimeField(auto_now_add = True)
  updated_at = models.DateTimeField(auto_now_add = True)

