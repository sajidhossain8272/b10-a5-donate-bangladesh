function openHistory() {
  document.getElementById("main-content").classList.add("hidden");

  document.getElementById("transaction-history").classList.remove("hidden");

  const historyList = document.getElementById("history-list");

  historyList.innerHTML = `
  `;
}

function closeHistory() {
  document.getElementById("main-content").classList.remove("hidden");
  document.getElementById("transaction-history").classList.add("hidden");
}
