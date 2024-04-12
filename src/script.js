const el = document.querySelector('#header');
const button = document.querySelector('button');

const partInsult = "You're nothing but a ";
const listA = ["filthy ", "crusty ", "rusty ", "stupid ", "stinky ", "lumpy ", "rotten ", "lazy ", "smelly ", "squishy ", "no good ", "brainless "];
const listB = ["crap ", "butt ", "turd ", "bum ", "poop ", "puss ", "rod ", "puke ", "weiner ", "fart ", "nut ", "trash ", "dong "];
const listC = ["mammoth!", "explorer!", "lizard!", "wizard!", "tunnel!", "fairy!", "hamster!", "captain!", "dragon!", "weasel!", "goblin!", "pirate!", "banjo!"];

function random(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function insult() {
  return partInsult + random(listA) + random(listB) + random(listC);
}

button.addEventListener('click', () => el.innerHTML = insult());
