const quotes = [
  {
    quote: "One good thing about music, when it hits you, you feel no pain.",
    author: "Bob Marley",
  },

  {
    quote: "Music is the soundtrack of your life.",
    author: "Dick Clark",
  },

  {
    quote:
      "Music to me is like breathing .I don't get tired of  breathing, I don't get tired of music. ",
    author: "Ray Charles",
  },

  {
    quote: "Where words fail, music speaks.",
    author: "Hans Christian Anderson",
  },
  {
    quote:
      "There are two means of refuge from the misery of life — music and cats. ",
    author: "Albert Schweitzer",
  },
  {
    quote: "My music isn’t just music. its medicine.",
    author: "Kanye West",
  },
  {
    quote: "Music should be your escape.",
    author: "Missy Elliot",
  },
  {
    quote: "Life and love go on, let the music play.",
    author: "Johnny Cash",
  },
  {
    quote: "Music is my religion. ",
    author: "Jimi Hendrix",
  },
  {
    quote: "Music is the shorthand of emotion. ",
    author: "Leo Tolstoy",
  },
  {
    quote: "The world’s most famous and popular language is music. ",
    author: "Psy",
  },
  {
    quote:
      "Music and performance transcend language, countries and races. Like a rainbow, I don’t care if you’re red, blue, orange, green, purple, whatever.",
    author: "BTS RM",
  },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaySaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaySaysQuote.quote;
author.innerText = todaySaysQuote.author;
