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


