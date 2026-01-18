var myScore = 79;
var friendScore = 30;

if (myScore >= 80) {
  if (friendScore >= 80) {
    console.log("We go for a lunch!!!");
  } else if (friendScore >= 60 && friendScore < 80) {
    console.log("Send friend a good luck next time!!!");
  } else if (friendScore >= 40 && friendScore < 60) {
    console.log("Don't seen his messages!!!");
  } else if (friendScore < 40) {
    console.log("Block your friend!!!");
  }
} else {
  console.log("Go to home and sleep and act sad!!!");
}
