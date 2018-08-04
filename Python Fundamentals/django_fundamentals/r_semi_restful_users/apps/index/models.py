from __future__ import unicode_literals
from django.db import models

class User(models.Model):
  first_name = models.CharField(max_length=50)
  last_name = models.CharField(max_length=50)
  email = models.EmailField(max_length=50)
  created_at = models.DateTimeField(auto_now_add = True)
  updated_at = models.DateTimeField(auto_now_add = True)

  def __repr__(self):
    return "<User object: {} {} {}>".format(self.first_name, self.last_name, self.email)