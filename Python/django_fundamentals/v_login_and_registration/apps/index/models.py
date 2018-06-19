from __future__ import unicode_literals
from django.db import models
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class UserManager(models.Manager):
  def registration_validator(self, postData):
    errors = {}
    if len(postData["first_name"]) < 2:
      errors["first_name"] = "First name should be at least 2 characters"
    elif postData["first_name"].isalpha() == False:
      errors["first_name"] = "First name can only contain letters"
    if len(postData["last_name"]) < 2:
      errors["last_name"] = "Last name should be at least 2 characters"
    elif postData["last_name"].isalpha() == False:
      errors["last_name"] = "Last name can only contain letters"
    if len(User.objects.filter(email=postData["email"])) > 0:
      errors["email"] = "This email address is already in use"
    elif len(postData["email"]) == 0:
      errors["email"] = "Email field cannot be blank"
    elif not EMAIL_REGEX.match(postData['email']):
      errors["email"] = "Email must be in proper format"
    if postData["password"] != postData["password_confirm"]:
      errors["password"] = "Passwords must match"
    elif len(postData["password"]) < 8:
      errors["password"] = "Password should be at least 8 characters"
    return errors

class User(models.Model):
  first_name = models.CharField(max_length=50)
  last_name = models.CharField(max_length=50)
  email = models.EmailField(max_length=50)
  password = models.CharField(max_length=100)
  created_at = models.DateTimeField(auto_now_add = True)
  updated_at = models.DateTimeField(auto_now_add = True)
  objects = UserManager()


  def __repr__(self):
    return "<User object: {} {} {}>".format(self.first_name, self.last_name, self.email)