//challenge 1
let students = [
  {name: 'Remy', cohort: 'Jan'},
  {name: 'Genevieve', cohort: 'March'},
  {name: 'Chuck', cohort: 'Jan'},
  {name: 'Osmund', cohort: 'June'},
  {name: 'Nikki', cohort: 'June'},
  {name: 'Boris', cohort: 'June'}
];

let display = function (data) {
  for (let i = 0; i < data.length; i++) {
    console.log("Name: " + data[i].name + ', Cohort: ' + data[i].cohort);
  }
}

//challenge 2
let users = {
  employees: [
      {'first_name':  'Miguel', 'last_name' : 'Jones'},
      {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
      {'first_name' : 'Nora', 'last_name' : 'Lu'},
      {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
  ],
  managers: [
     {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
     {'first_name' : 'Gordon', 'last_name' : 'Poe'}
  ]
};

let displayTwo = function (data) {
  console.log("EMPLOYEES\n");
  for (let i = 0; i < data.employees.length; i++) {
    console.log(i + " - " + data.employees[i].last_name.toUpperCase() + ", " + data.employees[i].first_name.toUpperCase() + " - " + data.employees[i].last_name.concat(data.employees[i].first_name).length)
  }
  console.log("MANAGERS\n");
  for (let i = 0; i < data.managers.length; i++) {
    console.log(i + " - " + data.managers[i].last_name.toUpperCase() + ", " + data.managers[i].first_name.toUpperCase() + " - " + data.managers[i].last_name.concat(data.managers[i].first_name).length)
  }
}

displayTwo(users)