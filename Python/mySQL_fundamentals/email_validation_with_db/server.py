from flask import Flask, render_template, redirect, request, flash, session
import re
from mysqlconnection import connectToMySQL
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)

app.secret_key = "ThisIsSecret!"
mysql = connectToMySQL('email_validation_db')
query = "SELECT * from emails"
print("all the users?", mysql.query_db(query))

@app.route("/")
def root():
  return render_template("index.html")

@app.route("/process", methods=["POST"])
def process():
  errors = False
  if len(request.form['email']) < 1:
    flash("Email cannot be blank!")
    errors = True 
  elif not EMAIL_REGEX.match(request.form['email']):
    flash("Email must be in proper format!")
    errors = True
    
  if errors == False:
    flash("Thanks for the input!")
    insertion_query = "INSERT INTO emails (email, created_at, updated_at) VALUES (%(email)s, NOW(), NOW());"
    data = {
              'email': request.form['email']
            }
    mysql.query_db(insertion_query, data)
    return redirect("/results", code=307)

  return redirect("/")

@app.route("/results", methods=["POST"])
def results():
  all_users = mysql.query_db(query)
  print("Fetched all users", all_users)
  return render_template("results.html", users = all_users)

if __name__ == "__main__":
  app.run(debug=True)

