from django.shortcuts import render, HttpResponse, redirect
from time import gmtime, strftime

def index(request):
  return render(request, "index/index.html")

def process(request):
  if "word_list" not in request.session:
    request.session["word_list"] = []

  if request.method == "POST":
    print("-"*80, request.session)
    if "big_font" in request.POST:
      temp = request.session["word_list"]
      temp.append({
        "word": request.POST["word"],
        "color": request.POST["color"],
        "big_font": True,
        "time": strftime("%Y-%m-%d %H:%M %p", gmtime())
      })
      request.session["word_list"] = temp
    else:
      temp = request.session["word_list"]
      temp.append({
        "word": request.POST["word"],
        "color": request.POST["color"],
        "big_font": False,
        "time": strftime("%Y-%m-%d %H:%M %p", gmtime())
      })
      request.session["word_list"] = temp
      
    return redirect("/result")

  return redirect("/")

def result(request):

  return render(request, "index/result.html")