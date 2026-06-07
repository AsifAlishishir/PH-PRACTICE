let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  if (document.body.style.backgroundColor === "black") {
    document.body.style.backgroundColor = "white";
    console.log("asif");
  } else {
    document.body.style.backgroundColor = "black";
    console.log("mili");
  }
});
