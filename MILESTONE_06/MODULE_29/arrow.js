const add = (a, b) => a + b;

console.log(add(2, 5));

const logIt = () => console.log(78);

console.log(logIt());
// function regular(a, b) {
//   console.log(arguments); // ✅ সব arguments পাবে
// }
// regular(1, 2, 3);

// const arrow = (a, b) => {
//   console.log(arguments); // ❌ ReferenceError
// };
// arrow(1, 2, 3);

const makeUser = (name) => ({ name, role: "student" });

console.log(makeUser("asif"));
