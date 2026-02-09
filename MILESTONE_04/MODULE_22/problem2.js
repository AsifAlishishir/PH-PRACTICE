function onlyCharacter(str) {
  // You have to write your code here
  if (typeof str == "string") {
    let line = str.replaceAll(" ", "");
    let finalResult = line.toUpperCase();
    return finalResult;
  } else {
    return "Invalid";
  }
}

console.log(onlyCharacter("Serv er : : Do wn"));
