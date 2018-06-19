from __future__ import unicode_literals
from django.db import models

class Course(models.Model):
  name = models.CharField(max_length=50)
  desc = models.CharField(max_length=50)
  created_at = models.DateTimeField(auto_now_add = True)
  updated_at = models.DateTimeField(auto_now_add = True)

  def __repr__(self):
    return "<Course object: {} {}>".format(self.name, self.desc)
