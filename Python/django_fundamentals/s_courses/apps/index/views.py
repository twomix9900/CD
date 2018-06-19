from django.shortcuts import render, HttpResponse, redirect
from .models import Course

def index(request):
  return render(request, "index/index.html", { "courses": Course.objects.all() })

def add(request):
  if request.method == "POST":
    print(request.POST)
    Course.objects.create(name=request.POST["name"], desc=request.POST["desc"])
    return redirect("/")
  return redirect("/")

def delete(request,id):
  Course.objects.get(id=id).delete()
  return redirect("/")

def deleteconfirm(request,id):
  return render(request, "index/deleteconfirm.html", { "course": Course.objects.get(id=id) })