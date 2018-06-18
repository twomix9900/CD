from django.conf.urls import url
from . import views

urlpatterns = [
  url('^$', views.index), 
  url('^farm$', views.farm), 
  url('^cave$', views.cave), 
  url('^house$', views.house), 
  url('^casino$', views.casino), 
]