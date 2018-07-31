from django.shortcuts import render, HttpResponse, redirect
from .models import Book, Author

def index(request):
  context = {
    "somekey" : "helloo"
  }
  request.session["test"] = 'session test'
  return render(request, "index/index.html", context)