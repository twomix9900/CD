from __future__ import unicode_literals
from django.db import models

# Create your models here.
class Dojo(models.Model):
  name = models.CharField(max_length=255)
  city = models.CharField(max_length=255)
  state = models.CharField(max_length=2)
  desc = models.CharField(max_length=255)
  created_at = models.DateTimeField(auto_now_add = True)
  updated_at = models.DateTimeField(auto_now_add = True)

  def __str__(self):
    return "Name: " + self.name + " City: " + self.city + " State: " + self.state + " Desc: " + self.desc

class Ninja(models.Model):
  dojo = models.ForeignKey(Dojo, related_name="ninjas")
  first_name = models.CharField(max_length=50)
  last_name = models.CharField(max_length=50)
  created_at = models.DateTimeField(auto_now_add = True)
  updated_at = models.DateTimeField(auto_now_add = True)

  def __repr__(self):
      return "<Blog object: {} {}>".format(self.first_name, self.last_name)