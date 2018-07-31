from django.conf.urls import url
from . import views

urlpatterns = [
  url('^$', views.index), 
  url('^checkout/$', views.checkout), 
  url('^process/$', views.process), 
]