const quotes = ["Have More Than You Show, Speak Less Than You Know.",

"Love all, trust a few, do wrong to none."];

function getQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var selectedQuote = quotes[randomIndex];

  document.write(selectedQuote)
}

getQuote(); // on load