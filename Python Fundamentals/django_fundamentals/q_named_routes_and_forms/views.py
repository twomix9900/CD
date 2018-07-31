# Inside your app's views.py file
from django.core.urlresolvers import reverse
from django.shortcuts import render, HttpResponse, redirect
# Create your views here.
# Example of an old index method:
def index(request):
    print("hello, I am your first request")
    return redirect('/target/this_app/new')
# Can be transformed to the following:
def index(request):
    print("hello, I am your first request")
    return redirect(reverse('my_new'))