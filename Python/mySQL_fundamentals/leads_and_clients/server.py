from flask import Flask, render_template, redirect, request
from mysqlconnection import connectToMySQL

app = Flask(__name__)
mysql = connectToMySQL('lead_gen_business')

# print("all the users", mysql.query_db("SELECT clients.first_name AS first_name, clients.last_name AS last_name, leads.registered_datetime AS date FROM clients LEFT JOIN sites ON clients.client_id = sites.client_id LEFT JOIN leads ON leads.site_id = sites.site_id WHERE leads.registered_datetime >= '2011/01/01' AND leads.registered_datetime < '2011/12/31'"))

@app.route("/")
def root():
  all_users = mysql.query_db("SELECT clients.first_name AS first_name, clients.last_name AS last_name, leads.registered_datetime AS date FROM clients LEFT JOIN sites ON clients.client_id = sites.client_id LEFT JOIN leads ON leads.site_id = sites.site_id WHERE leads.registered_datetime >= '2011/01/01' AND leads.registered_datetime < '2011/12/31'")
  # print("Fetched all users", all_users)
  sorted_users = {}
  for user in all_users:
    if user["first_name"] not in sorted_users:
      sorted_users[user["first_name"]] = 1
    else:
      sorted_users[user["first_name"]] += 1
    print(sorted_users)
  return render_template("index.html", users = sorted_users)

@app.route("/process", methods=["POST"])
def process():
  query = "INSERT INTO leads_and_clients (customer_name, number_of_leads, created_at, updated_at) VALUES (%(customer_name)s, %(number_of_leads)s, NOW(), NOW());"
  data = {
            'customer_name': request.form['customer_name'],
            'number_of_leads':  request.form['number_of_leads']
          }
  mysql.query_db(query, data)
  return redirect("/")

if __name__ == "__main__":
  app.run(debug=True)