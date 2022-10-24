// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
{
  quote: `"Life is not a support system for art. It's the other way around."`,
  person: `Stephen King`
},
{
  quote: `"If you want the rainbow, you gotta put up with the rain."`,
  person: `Dolly Parton`
},
{
  quote: `"You are what you habitually do."`,
  person: `Aristotle`
},
{
  quote: `"Live while you're alive. No one will survive."`,
  person: `Mel Brooks`
},
{
  quote: `"Simply live now and there will be no problems."`,
  person: `Alan Watts`
},
{
  quote: `"Progress is finding a good place to stop."`,
  person: `G.K. Chesterton`
},
{
  quote: `"How we spend our days is how we spend our lives."`,
  person: `Annie Dillard`
},
{
  quote: `"Suns may set and rise again, but for us, when the brief light has set, there is a never-ending night to be slept."`,
  person: `Catullus`
}
];

btn.addEventListener('click', function () {

  let random = Math.floor(Math.random() * quotes.length); // generates a number at random between 0 and the total number of quotes (quotes.length)

  quote.innerText = quotes[random].quote; // replaces quote
  person.innerText = quotes[random].person; // replaces person

})
