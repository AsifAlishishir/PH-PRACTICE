function bestTeam(player1, player2) {
  // You have to write your code here
  if (typeof player1 === "object" && typeof player2 === "object") {
    const faultOne = player1.foul + player1.cardY + player1.cardR;
    const faultTwo = player2.foul + player2.cardY + player2.cardR;
    if (faultOne < faultTwo) {
      return player1.name;
    } else if (faultOne === faultTwo) {
      return "Tie";
    } else {
      return player2.name;
    }
    // console.log(faultOne, faultTwo);
  } else {
    return "Invalid";
  }
}

const team1 = { name: "Germany", foul: 10, cardY: 1, cardR: 1 };
const team2 = { name: "France", foul: 10, cardY: 2, cardR: 1 };
console.log(bestTeam(team1, team2));
