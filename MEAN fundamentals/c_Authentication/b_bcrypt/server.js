const bcrypt = require('bcrypt-as-promised');

//hashing
bcrypt.hash('password_from_form', 10)
.then(hashed_password => {
	 
})
.catch(error => {
	 
});

//validation
bcrypt.compare('password_from_form', 'stored_hashed_password')
.then( result => {
	 
})
.catch( error => {
	 
})
