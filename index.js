const input = document.querySelector("input");
const button = document.querySelector("button");
const container = document.querySelector("div");
const heading = document.querySelector("h1");
input.value = randomQuoteFunc();

button.addEventListener("click", () => {
  input.value = randomQuoteFunc();
});

heading.classList.add("mt-5");
input.style.width = "100%";
input.classList.add("p-3", "my-3");
container.classList.add("container");
button.classList.add(
  "d-block",
  "mt-3",
  "py-2",
  "px-3",
  "text-white",
  "bg-secondary",
  "rounded-2"
);

function randomQuoteFunc() {
  const quotes = [
    "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    "Don't watch the clock; do what it does. Keep going.",
    "The secret of getting ahead is getting started.",
    "Well done is better than well said.",
    "You miss 100% of the shots you don’t take.",
    "A goal is a dream with a deadline.",
    "Outstanding people have one thing in common: An absolute sense of mission.",
    "Trying is winning in the moment.",
    "Fall down seven times and stand up eight.",
    "You just can't beat the person who never gives up.",
    "There is little success where there is little laughter.",
    "We cannot solve our problems with the same thinking we used when we created them.",
  ];

  const randomNum = Math.floor(Math.random() * quotes.length);
  // console.log(randomQuote);
  return quotes[randomNum];
}

// console.log(randomQuoteFunc());
