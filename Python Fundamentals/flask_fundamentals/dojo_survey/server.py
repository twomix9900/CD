from flask import Flask, render_template, redirect, request

app = Flask(__name__)
@app.route("/")
def index():
  return render_template("index.html")

@app.route("/danger")
def danger():
  print("A user tried to visit /danger. We have redirected user to /")
  return redirect("/")

@app.route("/result", methods=["post"])
def create():
  print(request.form)
  return redirect("/")

app.run(debug=True)