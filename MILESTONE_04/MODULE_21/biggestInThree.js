function maxOfThree(one, two, three) {
  if (one > two && one > three) {
    return ("The biggest number is: ", one);
  } else if (two > one && two > three) {
    return ("The biggest number is: ", two);
  } else {
    return ("The biggest number is: ", three);
  }
}

let asif = 83;
let ali = 99;
let shishir = 96;
console.log(maxOfThree(asif, ali, shishir));
