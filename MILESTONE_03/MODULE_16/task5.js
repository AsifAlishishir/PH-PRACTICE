let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

for (const obj in myObject) {
  console.log("Key: ", obj, "| type: ", typeof myObject[obj]);
}



