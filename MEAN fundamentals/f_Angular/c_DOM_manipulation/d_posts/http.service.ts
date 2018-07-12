postToServer(num){
  // use the .post() method of HttpClient
  // num must be an object
  // provide the url of your post route - make sure this is set up in your server!
  return this._http.post('/tasks', num);  
}