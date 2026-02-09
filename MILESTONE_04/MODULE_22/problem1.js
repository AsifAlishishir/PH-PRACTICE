function totalFine(fare) {
  // You have to write your code here
  if (typeof fare !== "number" || fare < 1) {
    return "Invalid";
  } else {
    let fine = fare + fare * (20 / 100) + 30;
    return fine;
  }
}

console.log(totalFine("Gorib tai ticket katinai"));
