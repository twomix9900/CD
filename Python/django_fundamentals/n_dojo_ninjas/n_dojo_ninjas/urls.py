from django.conf.urls import url, include

urlpatterns = [
  url(r'^', include('apps.index.urls')),
  url(r'^book_authors/', include('apps.book_authors.urls')),
  url(r'^book_users/', include('apps.book_users.urls')),
]