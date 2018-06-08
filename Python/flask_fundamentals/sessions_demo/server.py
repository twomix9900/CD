from flask import Flask, render_template, session, redirect, request

app = Flask(__name__)
app.secret_key = "KeepItSecretKeepItSafe"

@app.route("/")
def index():
  return render_template("index.html")

@app.route("/process",methods=["POST"])
def process():
  session["name"] = request.form["name"]
  session["logged"] = True
  return redirect("/results")


@app.route("/results")
def results():
  return render_template("results.html")

if __name__ == "__main__":
  app.run(debug=True)