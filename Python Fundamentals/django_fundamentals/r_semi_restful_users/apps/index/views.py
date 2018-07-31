from django.shortcuts import render, HttpResponse, redirect
from .models import User

def index(request):
  context = {
    "users" : User.objects.all()
  }
  return render(request, "index/index.html", context)

def show(request, id):
  context = {
    "user" : User.objects.get(id=id)
  }
  return render(request, "index/show.html", context)

def new(request):
  return render(request, "index/new.html")

def edit(request, id):
  context = {
    "user" : User.objects.get(id=id)
  }
  return render(request, "index/edit.html", context)

def editprocess(request, id):
  if request.method == "POST":
    temp = User.objects.get(id=id)
    temp.first_name = request.POST["first_name"]
    temp.last_name = request.POST["last_name"]
    temp.email = request.POST["email"]
    temp.save()

  return redirect("/")

def newprocess(request):
  if request.method == "POST":
    User.objects.create(first_name=request.POST["first_name"], last_name=request.POST["last_name"], email=request.POST["email"])
    return redirect("/")

  return redirect("/")

def delete(request,id):
  if request.method == "GET":
    User.objects.get(id=id).delete()
    return redirect("/")

  return redirect("/")