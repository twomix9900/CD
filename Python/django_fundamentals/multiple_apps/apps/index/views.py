from django.shortcuts import render, HttpResponse, redirect

def index(request):
  context = {
    "somekey" : "hello"
  }
  request.session["test"] = 'session test'
  return render(request, "index/index.html", context)