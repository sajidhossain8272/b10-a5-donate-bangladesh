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
    } else {
      alert("Insufficient balance.");
    }
  } else {
    alert("Please enter a valid donation amount.");
  }
}
