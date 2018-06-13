from flask import Flask, redirect, render_template, flash, session, request
import re
from mysqlconnection import connectToMySQL
from flask_bcrypt import Bcrypt

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
app.secret_key = "ThisIsSomeSuperSecretStuff!"
mysql = connectToMySQL('login_and_registration_db')
bcrypt = Bcrypt(app)

def debugHelp(message = ""):
  print("\n\n-----------------------", message, "--------------------")
  print('REQUEST.FORM:', request.form)
  print('SESSION:', session)

@app.route("/")
def root():
  debugHelp("ROOT METHOD")
  return render_template("index.html")

@app.route("/register", methods=["POST"])
def process():
  checker_query = "SELECT * from users WHERE email = %(email)s;"
  checker_data = { 'email': request.form["email"] }
  checker_result = mysql.query_db(checker_query, checker_data)

  if "first_name" in request.form:
    session["first_name"] = request.form["first_name"]
  if "last_name" in request.form:
    session["last_name"] = request.form["last_name"]
  if "email" in request.form:
    session["email"] = request.form["email"]

  if len(request.form["first_name"]) < 1:
    flash("Name can't be blank!", "first_name")
  elif len(request.form["first_name"]) < 3:
    flash("Names must be at least 3 characters long!", "first_name")
    
  if len(request.form["last_name"]) < 1:
    flash("Name can't be blank!", "last_name")
  elif len(request.form["last_name"]) < 3:
    flash("Names must be at least 3 characters long!", "last_name")

  if len(request.form["email"]) < 1:
    flash("Email can't be blank!", "email")
  elif not EMAIL_REGEX.match(request.form['email']):
    flash("Email must be in valid format!", "email")
  elif len(checker_result) > 0:
    flash("This email is already in use!", "email")

  if len(request.form["password"]) < 1:
    flash("Password can't be blank!", "password")
  elif len(request.form["password"]) < 8:
    flash("Password must be at least 8 characters long!", "password")
  elif request.form["password"] != request.form["confirm_password"]:
    flash("Passwords must be matching!", "password")

  debugHelp("REGISTER METHOD")

  if "_flashes" in session.keys():
    return redirect("/")

  else:
    pw_hash = bcrypt.generate_password_hash(request.form["password"])
    query = "INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s, NOW(), NOW());"
    data = {
      "first_name": request.form["first_name"],
      "last_name": request.form["last_name"],
      "email": request.form["email"],
      "password": pw_hash
    }
    result = mysql.query_db(query, data)
    session["userid"] = result
    return redirect("/success")

@app.route("/login", methods=["POST"])
def login():
  debugHelp("LOG IN METHOD")
  query = "SELECT * FROM USERS WHERE email = %(email)s"
  data = { "email": request.form["email"] }
  result = mysql.query_db(query, data)

  if result:
    if bcrypt.check_password_hash(result[0]["password"], request.form["password"]):
      session["userid"] = result[0]["id"]
      session["first_name"] = result[0]["first_name"]
      return redirect("/success")
  
  flash("Invalid credentials", "invalid")
  return redirect("/")

@app.route("/success")
def success():
  if "userid" not in session:
    session.clear()
    return redirect("/")
  
  debugHelp("SUCCESS METHOD")
  flash("Log in successful!", "success")
  return render_template("/success.html")

@app.route("/logout", methods=["POST"])
def logout():
  debugHelp("SUCCESS METHOD")
  session.clear()
  return redirect("/")

if __name__ == "__main__":
  app.run(debug=True)