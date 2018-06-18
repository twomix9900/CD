from django.shortcuts import render, HttpResponse, redirect

def index(request):
  context = {
      "somekey":"somevalue"
  }
  return render(request,'appname/page.html', context)