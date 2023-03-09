const quotes = [
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "Youth is easily deceived because it is quick to hope.",
    author: "Aristotle",
  },
  {
    quote: "Life is a tragedy when seen in close-up, but a comedy in long-shot.",
    author: "Charlie Chaplin",
  },
  {
    quote: "A long life may not be good enough, but a good life is long enough.",
    author: "Benjamin Franklin",
  },
  {
    quote: "Life is either a daring adventure or nothing.",
    author: "Helen Keller",
  },
  {
    quote: "He who would travel happily must travel light.",
    author: "Antoine de Saint-Exupery",
  },
  {
    quote: "Life is not fair; get used to it.",
    author: "Bill Gates",
  },
  {
    quote: "What is a friend? A single soul dwelling in two bodies.",
    author: "Aristotle",
  },
  {
    quote: "Never leave that 'till tomorrow which you can do today.",
    author: "Benjamin Franklin",
  },
  {
    quote: "Seek not every quality in one individual.",
    author: "Confucius",
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// Math.round(1.2345)
// Math.ceil(1.2345)
// Math.floor(1.2345)

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length )];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;