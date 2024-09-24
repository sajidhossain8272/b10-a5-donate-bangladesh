function openHistory() {
  document.getElementById("main-content").classList.add("hidden");
  document.getElementById("transaction-history").classList.remove("hidden");

  const historyButton = document.getElementById("history-button");
  historyButton.classList.remove("bg-white");
  historyButton.classList.add("bg-lime-300");

  const donationButton = document.getElementById("donation-button");
  donationButton.classList.remove("bg-lime-300");
  donationButton.classList.add("bg-white");
}

function closeHistory() {
  document.getElementById("main-content").classList.remove("hidden");
  document.getElementById("transaction-history").classList.add("hidden");

  const historyButton = document.getElementById("history-button");
  historyButton.classList.remove("bg-lime-300");
  historyButton.classList.add("bg-white");

  const donationButton = document.getElementById("donation-button");
  donationButton.classList.remove("bg-white");
  donationButton.classList.add("bg-lime-300");
}

function openBlog() {
  window.open("blog.html", "_blank");
}

