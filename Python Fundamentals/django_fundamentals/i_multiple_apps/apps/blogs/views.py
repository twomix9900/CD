from django.shortcuts import render, HttpResponse, redirect

def index(request):
  context = {
    "somekey" : "hello"
  }
  request.session["test"] = 'session test'
  return render(request, "blogs/index.html", context)

def new(request):
  response = "Placeholder to display a new form to create a new blog"
  return HttpResponse(response)

def create(request):
  return redirect("/blogs")

def show(number, number):
  response = "Placeholder to display blog" + number
  return HttpResponse(response)