from flask import Flask, redirect, session, render_template, request, flash
import random

app = Flask(__name__)
app.secret_key = "ThisIsSomeTopSecretStuff"

@app.route("/")
def root():
  session["number"] = random.randrange(0, 101)
  return render_template("index.html")

@app.route("/index")
def index():
  return render_template("index.html")

@app.route("/process", methods=["POST"])
def process():
  if "guess" in request.form:
    session["guess"] = int(request.form["guess"])
  return redirect("/index")

@app.route("/reset", methods=["POST"])
def reset():
  # session.pop("guess")
  session.clear()
  session["number"] = random.randrange(0, 101)
  return redirect("/index")

if __name__ == "__main__":
  app.run(debug=True)