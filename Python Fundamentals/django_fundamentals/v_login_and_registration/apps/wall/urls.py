from django.conf.urls import url
from . import views

urlpatterns = [
  url('^/$', views.index),
  url('^/post_message/$', views.post_message),
]