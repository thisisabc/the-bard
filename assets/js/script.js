<<<<<<< HEAD
const quotes = ["Have more than you show,\nspeak less than you know.",

"Harp not on that string.",

"Was ever woman in this humour wooed?\nWas ever woman in this humour won?",

"Love all, trust a few,\ndo wrong to none.",

"Shine out fair sun,\ntill I have bought a glass,\nThat I may see my shadow as I pass.",
=======
const quotes = ["Have more than you show,<br>speak less than you know.",

"Harp not on that string.",

"Was ever woman in this humour wooed?<br>Was ever woman in this humour won?",

"Love all, trust a few, do wrong to none.",

"Shine out fair sun,<br>till I have bought a glass,<br>That I may see my shadow as I pass.",
>>>>>>> main

"The world is grown so bad that wrens make pray where eagles dare not perch",

"I that have neither pity, love, nor fear.",

<<<<<<< HEAD
"I have no brother,\nI am like no brother."];
=======
"I have no brother,<br>I am like no brother."];
>>>>>>> main

function getQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var selectedQuote = quotes[randomIndex];

  document.write(selectedQuote)
}
getQuote(); // on load

