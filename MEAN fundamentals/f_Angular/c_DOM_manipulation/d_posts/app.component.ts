onButtonClickParam(num: Number): void { 
  console.log(`Click event is working with num param: ${num}`);
  // call the service's method to post the data, but make sure the data is bundled up in an object!
  let observable = this._httpService.postToServer({data: num});
  observable.subscribe(data => console.log("Got our data!", data));
}
