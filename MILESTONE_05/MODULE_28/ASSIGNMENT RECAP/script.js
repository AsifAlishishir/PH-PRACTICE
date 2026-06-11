// heart btn functionality------------------------

const totalHearts = document.querySelectorAll(".heart");
// console.log(totalHearts);

for (let heart of totalHearts) {
  heart.addEventListener("click", function () {
    let heartCount = parseInt(document.getElementById("heart-count").innerText);
    document.getElementById("heart-count").innerText = heartCount + 1;
  });
}

// call btn functionality-------------------------------------------------
let coinTotal = parseInt(document.getElementById("coin-total").innerText);
const cardSection = document.getElementsByClassName("card");
for (let card of cardSection) {
  const cardTitle = card.querySelector(".card-title").innerText;
  const cardNumber = card.querySelector(".card-number").innerText;
  const callbtn = card.querySelector(".call-btn");

  callbtn.addEventListener("click", function () {
    // console.log('asif')
    if (coinTotal < 20) {
      alert("Insufficient Balance!");
      return;
    }
    alert(`Calling ${cardTitle} - ${cardNumber} ........`);
    coinTotal -= 20;
    document.getElementById("coin-total").innerText = coinTotal;

    const callHistoryContainer = document.getElementById(
      "call-history-container",
    );
    // console.log(callHistoryContainer);
    const newDiv = document.createElement("div");
    let date = new Date().toLocaleTimeString();
    console.log(date);

    newDiv.innerHTML = `
    <div class="hind-madurai bg-[#f1f1f1] p-4 rounded-lg mb-3 flex items-center justify-between gap-2">
              <div>
                <h4 class="text-[18px] text-[#111111] mb-1">
                  ${cardTitle}
                </h4>
                <p class="text-[18px] text-[#5C5C5C]">${cardNumber}</p>
              </div>
              <p class="text-[18px] text-[#111111]">${date}</p>
            </div>`;

    callHistoryContainer.append(newDiv);
  });

  //   console.log(callbtn)
}

// copy btn functionality --------------------------
const allCard = document.querySelectorAll(".card");
// console.log(allCard);
let copyCount = parseInt(document.getElementById("copy-count").innerText);
for (let card of allCard) {
  // console.log(copyCount);
  const cardTitle = card.querySelector(".card-title").innerText;
  const cardNumber = card.querySelector(".card-number").innerText;
  const copyBtns = card.querySelector(".copy-btn");

  copyBtns.addEventListener("click", function () {
    navigator.clipboard.writeText(cardNumber);
    alert(`${cardTitle} number has been copied!`);
    copyCount++;
    document.getElementById("copy-count").innerText = copyCount;
    // console.log(copyCount);
  });
}

// call history clear btn functionality-------------------------------
const clearBtn = document.getElementById("clear-history");
clearBtn.addEventListener("click", function () {
  alert(`Call history has been cleared!`);
  const callHistoryContainer = document.getElementById(
    "call-history-container",
  );
  callHistoryContainer.innerHTML = ``;
});
