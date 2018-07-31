from django.shortcuts import render, HttpResponse, redirect
from apps.wall.models import Message, Comment
from apps.index.models import User
from django.contrib import messages
import bcrypt

def index(request):
  if "id" in request.session:
    return render(request, "wall/wall.html", { "all_user_messages": Message.objects.all() })
  else:
    return redirect("/")

def post_message(request):
  if request.method == "POST":
    Message.objects.create(user_id=User.objects.get(id=request.session["id"]), message=request.POST["message"])
    return redirect("/wall/")
  elif "id" in request.session:
    return redirect("/wall/")
  else:
    return redirect("/")