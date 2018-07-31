from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
  return render_template("index.html")

@app.route("/main")
def main():
  print("I'm another route")
  return render_template("main.html", name="Yoda", state="False")

app.run(debug=True)