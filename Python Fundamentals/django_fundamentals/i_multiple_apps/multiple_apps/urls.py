from django.conf.urls import url, include

urlpatterns = [
  url(r'^', include('apps.index.urls')),
  url(r'^blogs/', include('apps.blogs.urls')),
]