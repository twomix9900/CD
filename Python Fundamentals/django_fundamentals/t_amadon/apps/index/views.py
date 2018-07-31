from django.shortcuts import render, HttpResponse, redirect
from .models import Product

def index(request):
  return render(request, "index/index.html", { "products" : Product.objects.all() })

def checkout(request):
  
  return render(request, "index/checkout.html", { "product" : Product.objects.get(id=request.session["id"]) })

def process(request):
  if request.method == "POST":
    if "items_bought" not in request.session:
      request.session["items_bought"] = 0
    if "total_spent" not in request.session:
      request.session["total_spent"] = 0

    request.session["quantity"] = request.POST["quantity"]
    request.session["id"] = request.POST["id"]
    request.session["items_bought"] += int(request.session["quantity"])
    item = Product.objects.get(id=request.session["id"])
    request.session["total_item_price"] = float(item.price) * int(request.session["quantity"])
    request.session["total_spent"] += request.session["total_item_price"]
    return redirect('/checkout')
  return redirect('/')