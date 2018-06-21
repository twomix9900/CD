from django.conf.urls import url
from . import views

urlpatterns = [
  url('^$', views.index),
  url('^books/view/$', views.view_books),
  url('^book/add/$', views.add_book),
  url('^book/details/$', views.book_details),
  url('^user/details/$', views.user_details),
  url('^register/$', views.register),
  url('^login/$', views.login),
  url('^logout/$', views.logout),
]