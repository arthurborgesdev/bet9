let people = [
  {"Alice": 100 },
  {"Bob": 100 },
  {"Charles": 100 },
  {"Dave": 100 },
  {"Erika": 100 },
  {"Faraday": 100 },
  {"Gabe": 100 },
  {"Hilda": 100 },
  {"Ive": 100 },
  {"Jasmine": 100 },
];

let bet = 0;
let house = 0;
let winners;

const calculateBet = () => Math.round(Math.random(0, 100)*100, 2) + 1;

const placeBet = (people, bet) => {
  let pool = 0;
  for (const person of people) {
    let personMoney = person[Object.keys(person)];
    personMoney -= bet;
    pool += bet;
    person[Object.keys(person)] = personMoney;
  }
  return pool;
}

const dividePool = (pool, people) => {
  const loser = Math.round(Math.random(0, 9) * 9, 2);
  winners = people.filter(p => p !== people[loser]);
  house += pool/100;
  dividedMoney = (pool - pool/100) / 9;
  for (const person of winners) {
    person[Object.keys(person)] += dividedMoney;
  }
  // console.log("winners", winners);
  winners.push(people[loser]);
  // console.log("Final people", winners);
  return winners;
}

for (let i = 0; i < 1000; i+=1) {
  bet = calculateBet();
  pool = placeBet(people, bet);
  people = dividePool(pool, people);
}

console.log(winners, house);