function processDonation(inputId) {
  const donationAmount = parseFloat(document.getElementById(inputId).value);
  const totalBalanceElement = document.getElementById("user-balance");
  let totalBalance = parseFloat(totalBalanceElement.innerText);

  const balanceMap = {
    "donation-noakhali": "noakhali-balance",
    "donation-feni": "feni-balance",
    "donation-qouta": "aid-balance",
  };

  const donationBalanceElementId = balanceMap[inputId];
  const donationBalanceElement = document.getElementById(
    donationBalanceElementId
  );
  let donationBalance = parseFloat(donationBalanceElement.innerText);

  if (donationAmount && donationAmount > 0) {
    if (donationAmount <= totalBalance) {
      totalBalance -= donationAmount;
      totalBalanceElement.innerText = totalBalance.toFixed(2);

      donationBalance += donationAmount;
      donationBalanceElement.innerText = donationBalance.toFixed(2);

      document.getElementById("my_modal_5").showModal();

      logTransaction(inputId, donationAmount);
      document.getElementById(inputId).value = "";
    } else {
      alert("Insufficient balance.");
    }
  } else {
    alert("Please enter a valid donation amount.");
  }
}

function logTransaction(fundId, amount) {
  const fundNames = {
    "donation-noakhali": "Flood at Noakhali, Bangladesh",
    "donation-feni": "Flood Relief in Feni,Bangladesh",
    "donation-qouta": "Injured in the Quota Movement",
  };

  const transactionContainer = document.getElementById("transaction-container");
  const noTransactionMsg = document.getElementById("no-transaction");

  if (noTransactionMsg) {
    noTransactionMsg.style.display = "none";
  }

  const transactionElement = document.createElement("p");
  transactionElement.classList.add(
    "shadow-lg",
    "border-2",
    "p-4",
    "rounded-lg",
    "font-medium",
    "text-xl"
  );

  const now = new Date();
  const localTime = now.toLocaleString();

  transactionElement.innerHTML = `${amount.toFixed(2)} Taka is Donated for ${
    fundNames[fundId]
  }<br> Date: ${localTime}`;

  transactionContainer.appendChild(transactionElement);
}
