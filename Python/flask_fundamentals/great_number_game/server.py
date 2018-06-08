from flask import Flask, redirect, session, render_template

app = Flask(__name__)

@app.route("/")
def index():
  return render_template("index.html")

if __name__ == "main":
  app.run(debug=True)