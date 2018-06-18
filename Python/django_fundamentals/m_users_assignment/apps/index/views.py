from django.shortcuts import render, HttpResponse, redirect
from .models import User


def index(request):
  # User.objects.create(first_name="test", last_name="test", email_address="test@test.com", age="16")
  return render(request, "index/index.html")