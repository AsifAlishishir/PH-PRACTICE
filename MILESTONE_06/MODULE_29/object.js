const user = { name: "Asif", age: 22, country: "Bangladesh" };

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
delete user.age;
console.log(user);
