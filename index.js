const cards = ["Guadalupe", "Ollie", "Aki"];

function writeCards(cards) {
  let i = 0;
  while (i < cards.length) {
    console.log(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
    i++
  }
  return cards;
}
 


console.log(writeCards(names));

function countDown(cards){
  let i = 0;
  for (let countDown = 0; countDown < 11; countDown++) {
  console.log(countDown);
}
}