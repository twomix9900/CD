from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
@app.route("/")
def index():
  return render_template("index.html")

@app.route("/users", methods=["POST"])
def create():
  print(request.form)
  print("Name",request.form["name"])
  print("Email",request.form["email"])
  # return render_template("created.html")
  return redirect("/")

app.run(debug=True)