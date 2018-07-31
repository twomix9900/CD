from django.conf.urls import url
from . import views

urlpatterns = [
  url('^$', views.index) ,
  url('^show/(?P<id>\d+)/$', views.show),
  url('^new/$', views.new),
  url('^edit/(?P<id>\d+)/$', views.edit),
  url('^editprocess/(?P<id>\d+)/$', views.editprocess),
  url('^newprocess/$', views.newprocess),
  url('^delete/(?P<id>\d+)/$', views.delete),
]