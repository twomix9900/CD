from flask import Flask, render_template, redirect, request, flash, session
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

app = Flask(__name__)
app.secret_key = "ThisIsSecret!"

@app.route("/")
def index():
  return render_template("index.html")

@app.route("/process", methods=["POST"])
def process():
  session["email"] = request.form["email"]
  session["first_name"] = request.form["first_name"]
  session["last_name"] = request.form["last_name"]
  errors = False

  if len(request.form['email']) < 1:
    flash("Email cannot be blank!")
    errors = True 
  if len(request.form['first_name']) < 1:
    flash("First name cannot be blank!")
    errors = True 
  if len(request.form['last_name']) < 1:
    flash("Last name cannot be blank!")
    errors = True 
  if len(request.form['password']) < 1:
    flash("Password cannot be blank!")
    errors = True 
  if request.form["password"] != request.form["password_confirm"]:
    flash("Passwords must match!")
    errors = True
  if not EMAIL_REGEX.match(request.form['email']):
    flash("Invalid Email Address!")
    errors = True
  if not request.form["first_name"].isalpha() and request.form["first_name"]:
    flash("First name can only contain letters")
    errors = True
  if not request.form["last_name"].isalpha() and request.form["last_name"]:
    flash("Last name can only contain letters")
    errors = True
  if len(request.form["password"]) < 9 and request.form["password"]:
    flash("Password must be at least 8 characters long")
  if errors == False:
    return redirect("/results", code=307)

  return redirect("/")

@app.route("/results", methods=["POST"])
def results():
  return render_template("results.html")

app.run(debug=True)