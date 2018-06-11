from flask import Flask, render_template, redirect, request, flash, session
app = Flask(__name__)
app.secret_key = "ThisIsSecret!"

@app.route("/")
def index():
  return render_template("index.html")

@app.route("/process", methods=["POST"])
def process():
  session["name"] = request.form["name"]
  session["comment"] = request.form["comment"]
  session["dojo"] = request.form["dojo"]
  session["language"] = request.form["language"]
  errors = False

  if len(request.form['name']) < 1:
    flash("Name cannot be blank!")
    errors = True 
  if len(request.form["comment"]) > 120:
    flash("Comment section cannot be more than 120 characters long!")
    errors = True
  if len(request.form["comment"]) < 1:
    flash("Comment section cannot be empty!")
    errors = True

  if errors == False:
    return redirect("/results", code=307)
  return redirect("/")

@app.route("/results", methods=["POST"])
def results():
  return render_template("results.html")

app.run(debug=True)