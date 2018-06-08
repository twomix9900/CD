from flask import Flask, render_template

app = Flask(__name__)
@app.route("/")
def index():
  return render_template("index.html",x=8,y=8)


@app.route("/<int:x>/<int:y>")
def checkerboard_x_y(x,y):
  return render_template("checkerboard.html",x=x,y=y)

app.run(debug=True)