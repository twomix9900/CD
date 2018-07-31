from __future__ import unicode_literals
from django.db import models
from apps.index.models import User

class Message(models.Model):
  user_id = models.ForeignKey(User, related_name="messages")
  message = models.TextField()
  created_at = models.DateTimeField(auto_now_add = True)
  updated_at = models.DateTimeField(auto_now_add = True)

  def __repr__(self):
    return "<Message: {} {}>".format(self.user_id, self.message)

class Comment(models.Model):
  message_id = models.ForeignKey(Message, related_name="comments")
  user_id = models.ForeignKey(User, related_name="comments")
  comment = models.TextField()
  created_at = models.DateTimeField(auto_now_add = True)
  updated_at = models.DateTimeField(auto_now_add = True)

  def __repr__(self):
    return "<Comment: {} {} {}>".format(self.message_id, self.user_id, self.comment)