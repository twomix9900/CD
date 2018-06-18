from django.conf.urls import url
from . import views

urlpatterns = [
  url('^$', views.index), 
  url('^new/$', views.new), 
  url('^create/$', views.create), 
  url('^(?P<number>\d+)/$', views.show), 
]