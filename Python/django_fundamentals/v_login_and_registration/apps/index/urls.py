from django.conf.urls import url
from . import views

urlpatterns = [
  url('^$', views.index),
  url('^login/$', views.login),
  url('^register/$', views.register),
  # url('^success/$', views.success),
  url('^logout/$', views.logout),
]