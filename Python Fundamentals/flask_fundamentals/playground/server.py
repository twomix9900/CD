from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)
@app.route("/")
def index():
  return render_template("index.html")

@app.route("/play/<int:num>/<color>")
def play(num,color):
  return render_template("play.html",num=num,color=color)

app.run(debug=True)