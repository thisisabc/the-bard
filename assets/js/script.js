const quotes = ["Have more than you show,\nspeak less than you know.",

"Harp not on that string.",

"Was ever woman in this humour wooed?\nWas ever woman in this humour won?",

"Love all, trust a few,\ndo wrong to none.",

"Shine out fair sun,\ntill I have bought a glass,\nThat I may see my shadow as I pass.",

"The world is grown so bad that wrens make pray where eagles dare not perch",

"I that have neither pity, love, nor fear.",

"I have no brother,\nI am like no brother."];

function getQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var selectedQuote = quotes[randomIndex];

  document.write(selectedQuote)
}
getQuote(); // on load

