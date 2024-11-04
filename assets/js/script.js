const quotes = ["Have more than you show, speak less than you know.",

"Harp not on that string.",

"Was ever woman in this humour wooed? Was ever woman in this humour won?",

"Love all, trust a few, do wrong to none."];

function getQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var selectedQuote = quotes[randomIndex];

  document.write(selectedQuote)
}

getQuote(); // on load

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

function toggleDarkMode() {
  let isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
}

// On page load
document.addEventListener('DOMContentLoaded', (event) => {
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }
});