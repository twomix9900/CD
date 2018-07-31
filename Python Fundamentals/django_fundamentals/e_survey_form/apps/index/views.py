from django.shortcuts import render, HttpResponse, redirect

def index(request):
  context = {
    "somekey" : "hello"
  }
  request.session["test"] = 'session test'
  return render(request, "index/index.html", context)

def process(request):
  if request.method == "POST":
    request.session["name"] = request.POST["name"]
    request.session["dojo"] = request.POST["dojo"]
    request.session["language"] = request.POST["language"]
  return redirect("/result")

def result(request):
  return render(request, "index/result.html")