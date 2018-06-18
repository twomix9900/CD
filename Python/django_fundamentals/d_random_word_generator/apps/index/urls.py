from django.conf.urls import url
from . import views

urlpatterns = [
  url('^$', views.index),
  url('^reset$', views.reset),
  url('^process$', views.process)
]