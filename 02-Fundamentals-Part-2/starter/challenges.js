'use strict'

// Coding Challenge #1
/* Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
- Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
- Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
- To calculate average of 3 values, add them all together and divide by 3
- To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores
GOOD LUCK */

// 1.
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

// 2.
// data 1
let scoreDolphins = calcAverage(44, 23, 71)
let scoreKoalas = calcAverage(65, 54, 49)
// data 2
scoreDolphins = calcAverage(85, 54, 41)
scoreKoalas = calcAverage(23, 34, 27)

// 3.
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas win (${avgKoalas} vs. ${avgDolphins})`
  } else {
    return 'No team wins!'
  }
}
const victory = checkWinner(scoreDolphins, scoreKoalas)

// console.log('C1 => ', scoreDolphins, scoreKoalas, victory)

// Coding Challenge #2
// 1.
// const calcTip = function (bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15
//   } else {
//     return  bill * 0.2
//   }
// }

const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

// 2.
const bills = [125, 555, 44]

// 3.
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

// Bonus
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

// console.log('C2 => ', bills)
// console.log('C2 => ', tips)
// console.log('C2 => ', total)

// Coding Challenge #3

// 1.
const mark = {
  firstName: 'Mark',
  lastName: 'Miller',
  mass: 78,
  height: 1.69,

  // 2.
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2
    return this.bmi
  },
}

const john = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 92,
  height: 1.95,

  // 2.
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2
    return this.bmi
  },
}
let BMImsg
if (mark.calcBMI() > john.calcBMI()) {
  BMImsg = `${mark.firstName}'s BMI(${mark.bmi}) is higher than ${john.firstName}'s (${john.bmi}))`
} else {
  BMImsg = `${john.firstName}'s BMI(${john.bmi}) is higher than ${mark.firstName}'s (${mark.bmi}))`
}
// console.log('C3 => ', BMImsg)

// Coding Challenge 4
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

// 1.
const c4Bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// 2.
const c4Tips = []
const c4Total = []
// 3.
const c4CalcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

for (let i = 0; i < c4Bills.length; i++) {
  const tip = c4CalcTip(c4Bills[i])
  c4Tips.push(tip)
  c4Total.push(c4Bills[i] + c4Tips[i])
}
console.log('C4 => ', c4Tips)
console.log('C4 => ', c4Total)

// Bonus
const c4CalcAverage = function (arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i]
    sum += arr[i]
  }
  return sum / arr.length
}
console.log('C4 => ', c4CalcAverage(c4Total))
