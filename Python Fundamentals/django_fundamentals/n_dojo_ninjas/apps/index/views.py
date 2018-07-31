from django.shortcuts import render, HttpResponse, redirect
from .models import Dojo, Ninja

def createDojo(name, city, state):
  Dojo.objects.create(name=name, city=city, state=city)

def index(request):
  return render(request, "index/index.html")