from django.shortcuts import render, HttpResponse, redirect

def index(request):
  context = {
    "email" : "blog@gmail.com",
    "name" : "mike"
  }
  return render(request, "index/index.html", context)

# Create your views here.
