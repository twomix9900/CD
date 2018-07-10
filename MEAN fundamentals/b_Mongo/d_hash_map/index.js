var hashMap = [];
hashMap.length = 30; 

String.prototype.hashCode = function(){
  var hash = 0;
  if(this.length == 0){
      return hash;
  }
  for(i=0; i<this.length; i++){
      var char = this.charCodeAt(i);
      hash = ((hash<<5)-hash) + char;
      hash &= hash;                
  }
  return hash;
}

function mod(input, div){
  return (input % div + div) % div;
}

function insert(hashmap, key, value) {
  var hashedKey = key.hashCode();
  var idx = mod(hashedKey, hashmap.length);
  if (!hashmap[idx]) { hashmap[idx] = new Array() } 
  hashmap[idx].push(new Array(key, value))
}

function search(hashmap, key) {
  var hashedKey = key.hashCode();
  var idx = mod(hashedKey, hashmap.length);

  return hashmap[idx]
}

insert(hashMap, 'role', 'coder')
insert(hashMap, 'role', 'troll')


console.log(hashMap)
console.log(search(hashMap, 'role'))
