/** Problem 06 :  (Current Salary )  */
var experience = 3;
var startingSalary = 100;
//write your code here DD

var currentSalary = startingSalary;

for (var i = 1; i <= experience; i++) {
  currentSalary += currentSalary * (5 / 100);
}
console.log(parseFloat(currentSalary.toFixed(2)));
