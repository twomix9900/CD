from django.shortcuts import render, HttpResponse, redirect
from random import randint
from time import gmtime, strftime

def gold_logic(request, location, gold_min, gold_max):
  gold = randint(gold_min,gold_max)
  time = strftime("%H:%M:%S%p %m-%d-%Y", gmtime())
  temp = request.session["activities"]
  temp.append({
    "gold": gold,
    "time": time,
    "location": location
  })
  request.session["activities"] = temp
  request.session["gold"] += gold

def index(request):
  if "gold" not in request.session:
    request.session["gold"] = 0
  if "activities" not in request.session:
    request.session["activities"] = []

  return render(request, "index/index.html")

def farm(request):
  gold_logic(request, "farm", 10, 20)

  return redirect("/")

def cave(request):
  gold_logic(request, "cave", 5, 10)
  
  return redirect("/")

def house(request):
  gold_logic(request, "house", 2, 5)

  return redirect("/")

def casino(request):
  gold_logic(request, "casino", -50, 50)

  return redirect("/")