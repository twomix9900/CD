from django.shortcuts import render, HttpResponse, redirect
from django.utils.crypto import get_random_string

def index(request):
  if "count" not in request.session:
    request.session["count"] = 0
  if "word" not in request.session:
    request.session["word"] = get_random_string(length=14)  
  return render(request, "index/index.html")

def reset(request):
  request.session.clear()
  return redirect("/")

def process(request):
  if request.method == "POST":
    request.session["word"] = get_random_string(length=14)  
    request.session["count"] += 1
  return redirect("/")