function resultReport(marks) {
  if (Array.isArray(marks)) {
    let score = 0;
    let pass = 0;
    let fail = 0;
    for (let mark of marks) {
      if (typeof mark !== "number") {
        return "Invalid";
      } else {
        score += mark;
        if (mark >= 40) {
          pass += 1;
        } else {
          fail += 1;
        }
      }
    }

    let average = 0;
    if (marks.length > 0) {
      average = score / marks.length;
    }
    const finalScore = Math.round(average);
    return {
      finalScore: finalScore,
      pass: pass,
      fail: fail,
    };
  } else {
    return "Invalid";
  }
}

const object = resultReport([99]);
console.log(object);
