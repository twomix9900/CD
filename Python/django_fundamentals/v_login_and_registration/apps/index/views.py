from django.shortcuts import render, HttpResponse, redirect
from .models import User
from django.contrib import messages
import bcrypt

def index(request):
  return render(request, "index/index.html")

def login(request):
  if request.method == "POST":
    try:
      user = User.objects.filter(email=request.POST["email"])[0]
      if bcrypt.checkpw(request.POST["password"].encode(), user.password.encode()):
        request.session["id"] = user.id
        request.session["first_name"] = user.first_name
        request.session["last_name"] = user.last_name
        request.session["email"] = user.email
        messages.add_message(request, messages.SUCCESS, 'Log in successful', extra_tags="log_in")
        return redirect("/success/")
      else:
        messages.add_message(request, messages.ERROR, 'Invalid login credentials', extra_tags="invalid_login")
        return redirect("/")
    except:
      messages.add_message(request, messages.ERROR, 'Invalid login credentials', extra_tags="invalid_login")
      return redirect("/")
  else:
    return redirect("/")

def register(request):
  if request.method == "POST":
    try:    
      errors = User.objects.registration_validator(request.POST)
      if len(errors):
        for key, value in errors.items():
          messages.error(request, value, extra_tags=key)
        return redirect('/')
      else:
        user = User.objects.create(first_name=request.POST["first_name"], last_name=request.POST["last_name"], email=request.POST["email"], password=bcrypt.hashpw(request.POST["password"].encode(), bcrypt.gensalt()))
        request.session["id"] = user.id
        request.session["first_name"] = user.first_name
        request.session["last_name"] = user.last_name
        request.session["email"] = user.email
        messages.add_message(request, messages.SUCCESS, 'Registration successful', extra_tags="registration")
        return redirect('/success/')
    except:
      pass

  return redirect("/")

def success(request):
  if "id" in request.session:
    return render(request, "index/success.html")
  else:
    return redirect("/")

def logout(request):
  request.session.clear()
  messages.add_message(request, messages.SUCCESS, 'Logout successful', extra_tags="log_out")
  return redirect("/")