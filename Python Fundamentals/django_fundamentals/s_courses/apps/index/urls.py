from django.conf.urls import url
from . import views

urlpatterns = [
  url('^$', views.index),
  url('^add/$', views.add),
  url('^delete/(?P<id>\d+)/$', views.delete),
  url('^deleteconfirm/(?P<id>\d+)/$', views.deleteconfirm),
]