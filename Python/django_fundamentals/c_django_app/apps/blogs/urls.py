from django.conf.urls import url
from . import views

urlpatterns = [
  url('^$', views.index),
  url('^new$', views.new),
  url('^create$', views.create),
  url('^(?P<number>\d+)$', views.show),
  url('^(?P<number>\d+)/edit$', views.edit),
  url('^(?P<number>\d+)/delete$', views.destroy),
]