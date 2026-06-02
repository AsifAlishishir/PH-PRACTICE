// task 01--------------------------
// function totalFine(fare) {
//   if (typeof fare !== "number" || fare <= 0) {
//     return "Invalid";
//   } else {
//     let fine = fare + (fare * 20) / 100 + 30;
//     return fine;
//   }
// }

// console.log(totalFine(-"Gorib tai ticket katinai"));

// task 02-----------------------------
// function onlyCharacter(string) {
//   if (typeof string !== "string") {
//     return "Invalid";
//   } else {
//     let newStr = "";
//     for (let str of string) {
//       if (str !== " ") {
//         newStr += str.toUpperCase();
//       }
//     }
//     return newStr;
//   }
// }

// console.log(onlyCharacter(true));

// task 03-------------------------
// function bestTeam(player1, player2) {
//   if (
//     typeof player1 !== "object" ||
//     typeof player2 !== "object" ||
//     Array.isArray(player1) ||
//     Array.isArray(player2)
//   ) {
//     return "Invalid";
//   } else {
//     let player1Result = player1.foul + player1.cardY + player1.cardR;
//     let player2Result = player2.foul + player2.cardY + player2.cardR;
//     if (player1Result === player2Result) {
//       return "Tie";
//     } else if (player1Result < player2Result) {
//       return player1.name;
//     } else {
//       return player2.name;
//     }
//   }
// }

// const teamOne = { name: "Germany", foul: 10, cardY: 1, cardR: 1 };
// const teamTwo = { name: "France", foul: 10, cardY: 2, cardR: 1 };

// console.log(bestTeam(teamOne, teamTwo));

// task 04--------------------------

// function isSame(arr1, arr2) {
//   if (Array.isArray(arr1) === false || Array.isArray(arr2) === false) {
//     return "Invalid";
//   } else {
//     if (arr1.length !== arr2.length) {
//       return false;
//     } else {
//       for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//           return false;
//         }
//       }
//       return true;
//     }
//   }
// }

// const one = { data: [2, 5, 6] };
// const two = [1, 4, 4];
// console.log(isSame(one, two));

// task 05-------------------------------
function resultReport(array) {
  if (Array.isArray(array) !== true) {
    return "Invalid";
  } else {
    let sum = 0;
    let pass = 0;
    let fail = 0;

    let average = 0;
    let count = array.length;
    for (let arr of array) {
      if (arr < 40) {
        sum += arr;
        fail++;
      } else {
        sum += arr;
        pass++;
      }
    }

    if (sum === 0) {
      average = 0;
    } else {
      average = sum / count;
    }
    let result = Math.round(average);

    return {
      finalScore: result,
      pass: pass,
      fail: fail,
    };
  }
}

console.log(resultReport([]));
