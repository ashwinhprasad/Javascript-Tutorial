let ashwin = {
  name: 'Ashwin',
  age: '18',
  isActive : true,
}

let sriram = {
  name: 'sriram',
  age: '19',
  isActive : false,
}

let haris = {
  name: 'haris',
  age: '18',
  isActive : false,
}

let users = new Map();
users.set('ashwin',ashwin);
users.set('sriram',sriram);
users.set('haris',haris);

// map methods
console.log(users.get('ashwin'));

//getting the keys
console.log(users.keys());

//getting the values (for of)
for(const values of users.values()) {
  console.log(values)
}
