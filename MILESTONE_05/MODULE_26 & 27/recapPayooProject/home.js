const validPin = 1234;
const accountNumber = 12345678910;
const transactionData = [];

document.getElementById("logout-btn").addEventListener("click", function () {
  window.location.href = "./index.html";
});
// function to get inputValues
function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);

  // console.log( typeof inputFieldValueNumber);
  return inputFieldValueNumber;
}

// function to get innerText
function getInnerText(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);

  return elementValueNumber;
}

// function to set innerText
function setInnerText(value) {
  const element = document.getElementById("available-balance");
  element.innerText = value;
}

// function to toggle
function toggleBtn(id) {
  const forms = document.getElementsByClassName("form");

  for (let form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// function to activeToggleBtn
function activeToggleBtn(id) {
  const formBtns = document.getElementsByClassName("form-btn");
  // console.log(formBtns);
  for (let btn of formBtns) {
    // console.log(btn);
    btn.classList.remove("border-[#0874F2]", "bg-[#0874f20d]");
    btn.classList.add("border-[#0808081a]", "bg-white");
  }

  document
    .getElementById(id)
    .classList.add("border-[#0874F2]", "bg-[#0874f20d]");

  document
    .getElementById(id)
    .classList.remove("border-[#0808081a]", "bg-white");
}

// add money functionality
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const bank = document.getElementById("bank").value;
    const addAccountNumber = getInputValueNumber("account-number");
    const addAmount = getInputValueNumber("add-amount");

    const addPin = getInputValueNumber("add-pin");

    // console.log(bank, accountNumber, addAmount, addPin);
    const availableBalance = getInnerText("available-balance");

    if (addAccountNumber !== accountNumber) {
      alert("Please provide valid Account Number!");
      return;
    }
    if (addAmount <= 0 || isNaN(addAmount)) {
      alert("Please provide a valid amount!");
      return;
    }
    if (validPin !== addPin) {
      alert("Please provide valid Pin Number");
      return;
    }
    // console.log(availableBalance);
    const totalNewAvailableBalance = addAmount + availableBalance;

    setInnerText(totalNewAvailableBalance);
    const data = {
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
    };

    transactionData.push(data);
    // console.log(transactionData);
  });

// cashout money functionality
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const withdrawAmount = getInputValueNumber("cashout-amount");
  const cashoutAgentNumber = getInputValueNumber("agent-number");
  const cashoutPin = getInputValueNumber("cashout-pin");
  const availableBalance = getInnerText("available-balance");

  //   console.log(cashoutAgentNumber, cashoutPin, withdrawAmount, availableBalance);

  if (cashoutAgentNumber !== accountNumber) {
    alert("Please provide valid Account Number!");
    return;
  }
  if (
    withdrawAmount <= 0 ||
    withdrawAmount > availableBalance ||
    isNaN(withdrawAmount)
  ) {
    alert("Please provide a valid amount!");
    return;
  }
  if (validPin !== cashoutPin) {
    alert("Please provide valid Pin Number");
    return;
  }

  const totalNewAvailableBalance = availableBalance - withdrawAmount;
  //   console.log(totalNewAvailableBalance);

  setInnerText(totalNewAvailableBalance);
  const data = {
    name: "Cash Out",
    date: new Date().toLocaleTimeString(),
  };

  transactionData.push(data);
  console.log(transactionData);
});

// transfer money funtionality
document
  .getElementById("send-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const userAccountNumber = getInputValueNumber("user-account-number");
    const transferAmount = getInputValueNumber("transfer-amount");
    const transferPin = getInputValueNumber("transfer-pin");

    const availableBalance = getInnerText("available-balance");

    if (userAccountNumber !== accountNumber) {
      alert("Please provide valid User Account Number");
      return;
    }

    if (
      transferAmount > availableBalance ||
      transferAmount <= 0 ||
      isNaN(transferAmount)
    ) {
      alert("Please provide a valid Amount!");
      return;
    }

    if (transferPin !== validPin) {
      alert("Please provide a valid Pin!");
      return;
    }

    const totalNewAvailableBalance = availableBalance - transferAmount;

    setInnerText(totalNewAvailableBalance);

    const data = {
      name: "Transfer Money",
      date: new Date().toLocaleTimeString(),
    };

    transactionData.push(data);
    // console.log(transactionData);
  });

// get bonus functionality
document.getElementById("bonus-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const bonus = getInputValueNumber("bonus-number");

  if (bonus <= 0 || isNaN(bonus)) {
    alert("Please provide a valid Bonus Coupon!");
    return;
  } else {
    alert(`You have got a ${bonus}% bonus!`);
  }

  const data = {
    name: "Get Bonus",
    date: new Date().toLocaleTimeString(),
  };

  transactionData.push(data);
});

// pay bill functionality
document.getElementById("pay-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const payAccountNumber = getInputValueNumber("pay-account-number");
  const payAmount = getInputValueNumber("pay-amount");

  const payPin = getInputValueNumber("pay-pin");

  // console.log(bank, accountNumber, addAmount, addPin);
  const availableBalance = getInnerText("available-balance");

  if (payAccountNumber !== accountNumber) {
    alert("Please provide valid Biller Account Number!");
    return;
  }
  if (payAmount <= 0 || payAmount > availableBalance || isNaN(payAmount)) {
    alert("Please provide a valid amount!");
    return;
  }
  if (validPin !== payPin) {
    alert("Please provide valid Pin Number");
    return;
  }
  // console.log(availableBalance);
  const totalNewAvailableBalance = availableBalance - payAmount;

  setInnerText(totalNewAvailableBalance);

  const data = {
    name: "Pay Bill",
    date: new Date().toLocaleTimeString(),
  };

  transactionData.push(data);

  console.log(transactionData);
});

// transaction part functionality
document
  .getElementById("transaction-btn")
  .addEventListener("click", function () {
    // console.log("asif alibtn");
    // console.log(transactionData);
    const transactionContainer = document.getElementById(
      "transaction-data-container",
    );

    transactionContainer.innerHTML = ``;

    for (let data of transactionData) {
      const div = document.createElement("div");
      div.innerHTML = `<div
              class="flex justify-between items-center bg-white rounded-2xl border-1 border-[#0808081a] p-4 mb-3"
            >
              <div class="flex gap-3 items-center">
                <img
                  class="bg-[#0808080d] p-3 rounded-full"
                  src="./assets/purse1.png"
                  alt=""
                />
                <div>
                  <h4 class="text-[#080808b3] font-semibold mb-1">
                    ${data.name}
                  </h4>
                  <p class="text-[14px] text-[#080808b3]">${data.date}</p>
                </div>
              </div>
              <i class="fa-solid fa-ellipsis fa-rotate-90"></i>
            </div>`;

      transactionContainer.append(div);
    }
  });

//   toggleing feature

// add button card
document.getElementById("add-btn").addEventListener("click", function () {
  toggleBtn("add-money-parent");
  activeToggleBtn("add-btn");
});

// cashout card
document
  .getElementById("cashout-button")
  .addEventListener("click", function () {
    toggleBtn("cashout-parent");
    activeToggleBtn("cashout-button");
  });

// transfer money card
document.getElementById("transfer-btn").addEventListener("click", function () {
  toggleBtn("transfer-money-parent");
  activeToggleBtn("transfer-btn");
});

// get bonus card
document.getElementById("get-bonus-btn").addEventListener("click", function () {
  toggleBtn("bonus-parent");
  activeToggleBtn("get-bonus-btn");
});

// pay bill card
document.getElementById("pay-bill-btn").addEventListener("click", function () {
  toggleBtn("pay-bill-parent");
  activeToggleBtn("pay-bill-btn");
});

// transaction card
document
  .getElementById("transaction-btn")
  .addEventListener("click", function () {
    toggleBtn("transaction-parent");
    activeToggleBtn("transaction-btn");
  });
