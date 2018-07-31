# Inside your app's urls.py file
from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.toindex, name='my_index'),
    url(r'^this_app/new$', views.new, name='my_new'),
    url(r'^this_app/(?P<id>\d+)/edit$', views.edit, name='my_edit'),
    url(r'^this_app/(?P<id>\d+)/delete$', views.delete, name='my_delete'),
    url(r'^this_app/(?P<id>\d+)$', views.show, name='my_show'),
]



---------------------------------

#Inside your main urls.py file
urlpatterns = [
    url(r'^accounts/', include('apps.login_reg_app.urls', namespace='users')),
    url(r'^courses/', include('apps.courses_app.urls', namespace='courses')),
]