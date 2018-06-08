from flask import Flask, render_template
app = Flask(__name__)   

@app.route('/')        
def hello_world():
  return 'Hello World!' 

@app.route("/dojo")
def dojo():
  return "Dojo!"

@app.route("/say/<thing>")
def say(thing):
  return "Hi " + thing

@app.route("/repeat/<number>/<thing>")
def repeat(number,thing):
  return thing * int(number)



if __name__=="__main__":   
  app.run(debug=True)
