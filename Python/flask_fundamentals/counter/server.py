from flask import Flask, render_template, session, request, redirect

app = Flask(__name__)
app.secret_key = "This_is_a_super_secret_secret"

@app.route("/")
def index():
  return render_template("index.html")

@app.route("/process", methods=["POST"])
def process():
  # session.setdefault("count",0)

  # try:
  #   session["count"] += int(request.form["count"])
  # except KeyError:
  #   session["count"] = 1

  if "count" not in session:
    session["count"] = 0

  if "count" in request.form:
    session["count"] += int(request.form["count"])

  if "resetter" not in session:
    session["resetter"] = 0
  
  if "resetter" in request.form:
    session["resetter"] += int(request.form["resetter"])

  if session["resetter"] > 0:
    session["count"] = 0
    session["resetter"] = 0

  print(request.form,session)

  return redirect("/")


if __name__=="__main__":
  app.run(debug=True)